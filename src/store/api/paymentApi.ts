import { baseApi } from './baseApi';
import type { PaymentResponseDTO, CreatePaymentDTO } from '../dto/payment.dto';
import type { Payment } from '../models/payment.model';
import { mapPaymentFromDTO } from '../mappers/payment.mapper';

const paymentApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getPaymentById: builder.query<Payment, number>({
            query: (id) => `/pay/get/${id}`,
            transformResponse: (response: PaymentResponseDTO) =>
                mapPaymentFromDTO(response.data),
            providesTags: (_result, _error, id) => [{ type: 'Payment', id }],
        }),

        createPayment: builder.mutation<Payment, CreatePaymentDTO>({
            query: (body) => ({
                url: '/pay/create',
                method: 'POST',
                body,
            }),
            transformResponse: (response: PaymentResponseDTO) =>
                mapPaymentFromDTO(response.data),
            invalidatesTags: ['Payment', 'Wallet'],
        }),
    }),
});

export const { useGetPaymentByIdQuery, useCreatePaymentMutation } = paymentApi;
export { paymentApi };
