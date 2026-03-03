import { z } from 'zod';


const sanitizeString = (val: string) =>
    val
        .replace(/<[^>]*>/g, '')       
        .replace(/--/g, '')            
        .replace(/[;'"\\]/g, '')       
        .trim();


const safeString = z.string().transform(sanitizeString);



export const loginSchema = z.object({
    email: z
        .string()
        .min(1, 'Введите email или телефон')
        .max(255, 'Слишком длинное значение')
        .transform(sanitizeString),
    password: z
        .string()
        .min(6, 'Минимум 6 символов')
        .max(128, 'Максимум 128 символов'),
});

export const registerSchema = z.object({
    email: z
        .string()
        .min(1, 'Введите email или телефон')
        .max(255, 'Слишком длинное значение')
        .transform(sanitizeString),
    password: z
        .string()
        .min(6, 'Минимум 6 символов')
        .max(128, 'Максимум 128 символов'),
    smsCode: z
        .string()
        .length(4, 'Код должен быть из 4 цифр')
        .regex(/^\d{4}$/, 'Только цифры'),
});



export const transferSchema = z.object({
    amount: z
        .number({ invalid_type_error: 'Введите число' })
        .positive('Сумма должна быть > 0')
        .max(1_000_000, 'Максимум 1 000 000')
        .finite('Некорректная сумма'),
    address: z
        .string()
        .min(10, 'Минимум 10 символов')
        .max(128, 'Максимум 128 символов')
        .transform(sanitizeString),
    comment: safeString
        .pipe(z.string().max(256, 'Максимум 256 символов'))
        .optional()
        .default(''),
    coin: z
        .string()
        .min(2, 'Выберите монету')
        .max(10, 'Некорректный символ'),
});



export const createPaymentSchema = z.object({
    amount: z
        .number({ invalid_type_error: 'Введите число' })
        .positive('Сумма должна быть > 0')
        .max(10_000_000, 'Максимум 10 000 000'),
    order_id: safeString
        .pipe(z.string().min(1, 'Обязательное поле').max(128)),
    discount: z
        .number()
        .min(0, 'Скидка не может быть отрицательной')
        .max(100, 'Максимум 100%')
        .default(0),
    comment: safeString
        .pipe(z.string().max(512, 'Максимум 512 символов'))
        .optional()
        .default(''),
    url_callback: z
        .string()
        .url('Некорректный URL')
        .optional()
        .or(z.literal('')),
});



export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type TransferInput = z.infer<typeof transferSchema>;
export type CreatePaymentInput = z.infer<typeof createPaymentSchema>;
