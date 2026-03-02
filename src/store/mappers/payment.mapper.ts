import type { PaymentDataDTO } from '../dto/payment.dto';
import { PaymentStatus, type Payment } from '../models/payment.model';

const STATUS_MAP: Record<string, PaymentStatus> = {
    PAID: PaymentStatus.Paid,
    WAIT: PaymentStatus.Waiting,
    CANCEL: PaymentStatus.Cancelled,
};

/**
 * Paranoid mapper: DTO → Frontend Model.
 * Маппит строковые статусы в enum с fallback на Unknown.
 * Все поля защищены optional chaining и fallback-значениями.
 */
export function mapPaymentFromDTO(dto: PaymentDataDTO): Payment {
    const rawStatus = String(dto?.status ?? '').toUpperCase();

    return {
        id: Number(dto?.id) || 0,
        amount: Number(dto?.amount) || 0,
        orderId: String(dto?.order_id ?? ''),
        discount: Number(dto?.discount) || 0,
        comment: String(dto?.comment ?? ''),
        callbackUrl: String(dto?.callback_url ?? ''),
        status: STATUS_MAP[rawStatus] ?? PaymentStatus.Unknown,
        address: String(dto?.address ?? ''),
        createdAt: String(dto?.date_add ?? ''),
    };
}
