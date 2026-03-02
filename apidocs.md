📦 API Документация
URL: 4clever.io
Формат: JSON (все данные отправляем и получаем в JSON)

🔐 Авторизация
После получения токена добавляем его в заголовок:
Authorization: Token af123a45be67e89a6b0860000d6d5a3f
В документации буду отмечать как {AUTH}

=====================================
👤 ПОЛЬЗОВАТЕЛИ
=====================================

[POST] Создание пользователя
/user/create
{
    "email": "user@example.com",
    "password": "123456"
}

[POST] Получение токена (для доступа к функциям)
/user/token/create
{
    "email": "user@example.com",
    "password": "123456"
}
Ответ: токен (строка)

[GET] + {AUTH} Информация о пользователе
/user/get
Ответ:
{
    "id": 1,
    "email": "user@example.com",
    "address": "адрес CLV кошелька",
    "firstname": "Иван",
    "lastname": "Иванов",
    "balance": 1000.50,
    "status": "active",
    "date_reg": "2024-01-01"
}

[POST] + {AUTH} Обновление данных пользователя
/user/save
Можно отправить только нужные поля:
{
    "firstname": "Петр",
    "lastname": "Петров"
}

=====================================
💰 КОШЕЛЬКИ (КРИПТА)
=====================================

[POST] + {AUTH} Создание кошелька
/wallet/create
{
    "words": "word1 word2 word3 ..." // мнемоническая фраза
}

=====================================

[GET] + {AUTH} Список ID созданных кошельков
/wallet/get
Ответ: 
[1, 2, 3, ...] // массив ID кошельков

=====================================

[GET] + {AUTH} Информация по конкретному кошельку
/wallet/get/{id}
Пример: /wallet/get/1

Ответ:
{
    "data": {
        "AVAX": {
            "address": "0x...",
            "balance": 0.0
        },
        "BNB": {
            "address": "0x...", 
            "balance": 0.0
        },
        "ETH": {
            "address": "0x...",
            "balance": 0.0
        },
        "MATIC": {
            "address": "0x...",
            "balance": 0.0
        },
        "BTC": {
            "address": "1...",
            "balance": 0.0
        },
        "SOL": {
            "address": "...",
            "balance": 0.0
        },
        "TRX": {
            "address": "T...",
            "balance": 0.0
        }
        // и другие монеты...
    }
}

=====================================
💸 ПЛАТЕЖИ
=====================================

[POST] + {AUTH} Создание платежа
/pay/create

Обязательные параметры:
- wallet_id  - ID кошелька, на который будет платеж
- order_id   - ID заказа в вашей системе
- amount     - Сумма платежа
- network    - Сеть (например: TRX, ETH, BNB, MATIC, SOL, BTC и т.д.)

Необязательные параметры:
- url_callback - URL для уведомления о статусе платежа
- comment      - Комментарий к платежу
- discount     - Скидка или допустимое отклонение от суммы (%),
                 чтобы платеж был засчитан (например 5 = 5%)

Пример запроса:
{
    "wallet_id": 1,
    "order_id": "ORDER-12345",
    "amount": 100.50,
    "network": "TRX",
    "url_callback": "https://your-site.com/callback",
    "comment": "Оплата заказа #12345",
    "discount": 5
}

[GET] + {AUTH} Информация о платеже по ID
/pay/get/{id}

Ответ:
{
    "status": "success",
    "data": {
        "id": 123,
        "amount": 100.50,
        "order_id": "ORDER-12345",
        "discount": 5,
        "comment": "Оплата заказа #12345",
        "callback_url": "https://your-site.com/callback",
        "status": "pending",  // статус платежа
        "address": "TXYZ...", // адрес для оплаты
        "date_add": "2024-01-01 12:00:00"
    }
}

Возможные статусы платежа:
- PAID  - оплачен
- WAIT  - ожидает оплаты
- CANCEL  - отменён
