


export interface PaymentDataDTO {
    id: number;
    amount: number;
    order_id: string;
    discount: number;
    comment: string;
    callback_url: string;
    status: string; 
    address: string;
    date_add: string;
}


export interface PaymentResponseDTO {
    status: string;
    data: PaymentDataDTO;
}


export interface CreatePaymentDTO {
    wallet_id: number;
    order_id: string;
    amount: number;
    network: string;
    url_callback?: string;
    comment?: string;
    discount?: number;
}
