const { Project, SyntaxKind } = require("ts-morph");
const fs = require("fs");
const path = require("path");

// 1. Инициализируем парсер
const project = new Project();
project.addSourceFilesAtPaths("src/**/*.tsx");

// Словарь для перевода SVG-атрибутов в React-формат
const attrMap = {
    "class": "className",
    "fill-rule": "fillRule",
    "clip-rule": "clipRule",
    "stroke-width": "strokeWidth",
    "stroke-linecap": "strokeLinecap",
    "stroke-linejoin": "strokeLinejoin",
    "stroke-miterlimit": "strokeMiterlimit",
    "fill-opacity": "fillOpacity",
    "stop-color": "stopColor"
};

const iconsDir = path.resolve(__dirname, "src/components/Icons");
if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true });

let globalCounter = 1;

// Исключаем саму папку Icons, чтобы не парсить сгенерированное
const files = project.getSourceFiles().filter(f => !f.getFilePath().includes("components/Icons"));

for (const file of files) {
    // Находим все теги <svg> как элементы AST-дерева
    const svgElements = file.getDescendantsOfKind(SyntaxKind.JsxElement)
        .filter(node => node.getOpeningElement().getTagNameNode().getText() === "svg");

    if (svgElements.length === 0) continue;

    let modified = false;
    const importsToAdd = new Map();

    // Идем с конца файла вверх. Это критически важно: если заменять узлы сверху вниз, 
    // индексы текста съедут, и файл превратится в кашу.
    const reversedSvgs = svgElements.reverse();

    for (const svg of reversedSvgs) {
        const baseName = file.getBaseNameWithoutExtension();
        // Имя вроде IconHome1, IconHome2
        const iconName = `Icon${baseName.replace(/[^a-zA-Z0-9]/g, '')}${globalCounter++}`;

        // Исправляем kebab-case атрибуты на camelCase прямо в AST-дереве
        const attributes = svg.getDescendantsOfKind(SyntaxKind.JsxAttribute);
        attributes.forEach(attr => {
            const attrName = attr.getNameNode().getText();
            if (attrMap[attrName]) {
                attr.getNameNode().replaceWithText(attrMap[attrName]);
            }
        });

        // Получаем чистый исправленный код SVG
        let svgCode = svg.getText();

        // Аккуратно вставляем пропсы для гибкости
        svgCode = svgCode.replace('<svg', '<svg {...props}');

        // Генерируем код нового компонента
        const componentCode = `import React from 'react';\n\nexport default function ${iconName}(props: React.SVGProps<SVGSVGElement>) {\n    return (\n        ${svgCode}\n    );\n}\n`;

        const iconPath = path.join(iconsDir, `${iconName}.tsx`);
        fs.writeFileSync(iconPath, componentCode, "utf8");

        // Заменяем огромный SVG на вызов компонента в исходном файле
        svg.replaceWithText(`<${iconName} />`);

        // Вычисляем правильный относительный путь (например ../../components/Icons/IconHome1)
        let relPath = path.relative(path.dirname(file.getFilePath()), iconPath).replace(/\\/g, '/');
        if (!relPath.startsWith('.')) relPath = './' + relPath;
        relPath = relPath.replace('.tsx', '');

        importsToAdd.set(iconName, relPath);
        modified = true;
    }

    if (modified) {
        // Вставляем импорты в начало файла
        for (const [name, p] of importsToAdd.entries()) {
            file.addImportDeclaration({
                defaultImport: name,
                moduleSpecifier: p
            });
        }
        // Сохраняем мутации файла на диск
        file.saveSync();
        console.log(`[+] Вычищен файл: ${file.getBaseName()}`);
    }
}
console.log(`\nГотово! Ампутировано векторного мусора: ${globalCounter - 1} шт.`);