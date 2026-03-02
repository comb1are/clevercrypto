/**
 * Frontend Model: чистый тип для UI-компонентов.
 * Статус платежа — строгий enum вместо сырой строки.
 */

export enum PaymentStatus {
    Paid = 'PAID',
    Waiting = 'WAIT',
    Cancelled = 'CANCEL',
    Unknown = 'UNKNOWN',
}

export interface Payment {
    id: number;
    amount: number;
    orderId: string;
    discount: number;
    comment: string;
    callbackUrl: string;
    status: PaymentStatus;
    address: string;
    createdAt: string;
}
