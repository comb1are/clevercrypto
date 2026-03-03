

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
