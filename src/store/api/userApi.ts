import { baseApi } from './baseApi';
import type { UserDTO, UpdateUserDTO } from '../dto/user.dto';
import type { User } from '../models/user.model';
import { mapUserFromDTO } from '../mappers/user.mapper';

const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getUser: builder.query<User, void>({
            query: () => '/user/get',
            transformResponse: (response: { data: UserDTO } | UserDTO) => {
                const dto = 'data' in response ? response.data : response;
                return mapUserFromDTO(dto);
            },
            providesTags: ['User'],
        }),

        updateUser: builder.mutation<User, UpdateUserDTO>({
            query: (body) => ({
                url: '/user/save',
                method: 'POST',
                body,
            }),
            transformResponse: (response: { data: UserDTO } | UserDTO) => {
                const dto = 'data' in response ? response.data : response;
                return mapUserFromDTO(dto);
            },
            invalidatesTags: ['User'],
        }),
    }),
});

export const { useGetUserQuery, useUpdateUserMutation } = userApi;
export { userApi };
