

export const PaymentStatus = {
    Paid: 'PAID',
    Waiting: 'WAIT',
    Cancelled: 'CANCEL',
    Unknown: 'UNKNOWN',
} as const;

export type PaymentStatus = typeof PaymentStatus[keyof typeof PaymentStatus];

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
