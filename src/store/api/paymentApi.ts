import { baseApi } from './baseApi';
import type { PaymentDataDTO, CreatePaymentDTO } from '../dto/payment.dto';
import type { Payment } from '../models/payment.model';
import { mapPaymentFromDTO } from '../mappers/payment.mapper';

// Simulated delay helper
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Hardcoded fake DTO for development
const FAKE_PAYMENT_DTO: PaymentDataDTO = {
    id: 123,
    amount: 100.5,
    order_id: 'ORDER-12345',
    discount: 5,
    comment: 'Оплата заказа #12345',
    callback_url: 'https://your-site.com/callback',
    status: 'WAIT',
    address: 'TJCnKsPa7y5okkXvQAidZBzqx3QyQ6sxMW',
    date_add: '2024-01-01 12:00:00',
};

const paymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // TODO: Real endpoint — GET /pay/get/{id}
        getPaymentById: builder.query<Payment, number>({
            queryFn: async (id) => {
                await delay(1000);
                const dto: PaymentDataDTO = { ...FAKE_PAYMENT_DTO, id };
                return { data: mapPaymentFromDTO(dto) };
            },
            providesTags: (_result, _error, id) => [{ type: 'Payment', id }],
        }),

        // TODO: Real endpoint — POST /pay/create
        createPayment: builder.mutation<Payment, CreatePaymentDTO>({
            queryFn: async (body) => {
                await delay(1000);
                const createdDTO: PaymentDataDTO = {
                    id: Math.floor(Math.random() * 10000),
                    amount: Number(body.amount) || 0,
                    order_id: String(body.order_id ?? ''),
                    discount: Number(body.discount) || 0,
                    comment: String(body.comment ?? ''),
                    callback_url: String(body.url_callback ?? ''),
                    status: 'WAIT',
                    address: 'TJCnKsPa7y5okkXvQAidZBzqx3QyQ6sxMW',
                    date_add: new Date().toISOString(),
                };
                return { data: mapPaymentFromDTO(createdDTO) };
            },
            invalidatesTags: ['Payment'],
        }),
    }),
});

export const { useGetPaymentByIdQuery, useCreatePaymentMutation } = paymentApi;
export { paymentApi };
