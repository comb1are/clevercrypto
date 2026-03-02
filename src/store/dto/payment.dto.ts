/**
 * DTO: Точное зеркало JSON-ответа бэкенда.
 * НЕ использовать в UI-компонентах напрямую!
 */

/** GET /pay/get/{id} → data */
export interface PaymentDataDTO {
    id: number;
    amount: number;
    order_id: string;
    discount: number;
    comment: string;
    callback_url: string;
    status: string; // "PAID" | "WAIT" | "CANCEL"
    address: string;
    date_add: string;
}

/** GET /pay/get/{id} — полный ответ */
export interface PaymentResponseDTO {
    status: string;
    data: PaymentDataDTO;
}

/** POST /pay/create — тело запроса */
export interface CreatePaymentDTO {
    wallet_id: number;
    order_id: string;
    amount: number;
    network: string;
    url_callback?: string;
    comment?: string;
    discount?: number;
}
