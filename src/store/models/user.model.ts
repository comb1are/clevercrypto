/**
 * Frontend Model: чистый тип для UI-компонентов.
 * Никогда не содержит snake_case или сырых данных бэкенда.
 */

export interface User {
    id: number;
    email: string;
    walletAddress: string;
    firstName: string;
    lastName: string;
    balance: number;
    status: string;
    registeredAt: string;
}
