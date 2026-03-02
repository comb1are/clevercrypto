import { baseApi } from './baseApi';
import type { UserDTO, UpdateUserDTO } from '../dto/user.dto';
import type { User } from '../models/user.model';
import { mapUserFromDTO } from '../mappers/user.mapper';

// Simulated delay helper
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// Hardcoded fake DTO for development
const FAKE_USER_DTO: UserDTO = {
    id: 1,
    email: 'demo@4clever.io',
    address: 'CLV1a2b3c4d5e6f7g8h9i0j',
    firstname: 'Иван',
    lastname: 'Петров',
    balance: 42482.59,
    status: 'active',
    date_reg: '2024-01-15',
};

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        // TODO: Real endpoint — GET /user/get
        getUser: builder.query<User, void>({
            queryFn: async () => {
                await delay(1000);
                return { data: mapUserFromDTO(FAKE_USER_DTO) };
            },
            providesTags: ['User'],
        }),

        // TODO: Real endpoint — POST /user/save
        updateUser: builder.mutation<User, UpdateUserDTO>({
            queryFn: async (body) => {
                await delay(1000);
                const updatedDTO: UserDTO = {
                    ...FAKE_USER_DTO,
                    ...(body.firstname !== undefined && { firstname: body.firstname }),
                    ...(body.lastname !== undefined && { lastname: body.lastname }),
                };
                return { data: mapUserFromDTO(updatedDTO) };
            },
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
export { userApi };
