import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// TODO: Replace with real URL when backend is ready
// const REAL_BASE_URL = 'https://api.example.com/v1';

export const baseApi = createApi({
    reducerPath: 'api',
    // Fake base query for now to prevent network errors while mocking
    baseQuery: fetchBaseQuery({ baseUrl: '/' }),
    tagTypes: ['User', 'Wallet', 'Payment'],
    endpoints: () => ({}), // Endpoints will be injected from separate files
});
