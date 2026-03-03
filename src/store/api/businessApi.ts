import { baseApi } from './baseApi';
import type { PlatformDTO, StoreDTO, BusinessPaymentDTO } from '../dto/business.dto';
import type { Platform, Store, BusinessPayment } from '../models/business.model';
import { mapPlatformFromDTO, mapStoreFromDTO, mapBusinessPaymentFromDTO } from '../mappers/business.mapper';


const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));


const FAKE_PLATFORMS: PlatformDTO[] = [
    { id: 'p1', name: 'OZON', domain: 'ozon.ru', status: 'approved', logo: '/assets/business-logo1.png' },
    { id: 'p2', name: 'FunPay', domain: 'funpay.com', status: 'pending', logo: '/assets/business-logo2.png' },
];

const FAKE_STORES: StoreDTO[] = [
    { id: 's1', type: 'simple', name: 'Kupikod', domain: 'kupikod.com', badge: 'Цифровые товары', status: 'blocked', logo: '/assets/business-logo3.png', has_error: true },
    { id: 's2', type: 'simple', name: 'FunPay', domain: 'funpay.com', badge: 'Цифровые товары', status: 'approved', logo: '/assets/business-logo2.png', has_error: false },
    { id: 's3', type: 'simple', name: 'FunPay', domain: 'funpay.com', badge: 'Цифровые товары', status: 'pending', logo: '/assets/business-logo2.png', has_error: false },
];

const FAKE_BUSINESS_PAYMENTS: BusinessPaymentDTO[] = [
    { id: 1, icon: '/assets/payment-icon1.png', title: 'Ожидает оплаты', date: '4 дек. 2024 16:56', price: '1.28 USDT', type: '', warning: false },
    { id: 2, icon: '/assets/payment-icon2.png', title: 'Подтверждено', date: '4 дек. 2024 16:56', price: '5.00 USDT', type: 'success', warning: false },
    { id: 3, icon: '/assets/payment-icon3.png', title: 'Отменено', date: '4 дек. 2024 16:56', price: '10.50 USDT', type: '', warning: true },
    { id: 4, icon: '/assets/payment-icon1.png', title: 'Ожидает оплаты', date: '4 дек. 2024 16:56', price: '2.10 USDT', type: '', warning: false },
    { id: 5, icon: '/assets/payment-icon4.png', title: 'Создан', date: '4 дек. 2024 16:56', price: '100.00 USDT', type: '', warning: false },
];

const businessApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        
        getPlatforms: builder.query<Platform[], void>({
            queryFn: async () => {
                await delay(1000);
                return { data: FAKE_PLATFORMS.map(mapPlatformFromDTO) };
            },
            providesTags: ['Business'],
        }),

        
        getStores: builder.query<Store[], void>({
            queryFn: async () => {
                await delay(1000);
                return { data: FAKE_STORES.map(mapStoreFromDTO) };
            },
            providesTags: ['Business'],
        }),

        
        getBusinessPayments: builder.query<BusinessPayment[], void>({
            queryFn: async () => {
                await delay(1000);
                return { data: FAKE_BUSINESS_PAYMENTS.map(mapBusinessPaymentFromDTO) };
            },
            providesTags: ['Payment'],
        }),
    }),
});

export const {
    useGetPlatformsQuery,
    useGetStoresQuery,
    useGetBusinessPaymentsQuery,
} = businessApi;
export { businessApi };
