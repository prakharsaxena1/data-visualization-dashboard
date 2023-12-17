import baseApi from '../baseQuery';
import {
  LoginRequest,
  LoginRegisterResponse,
  RegisterRequest,
} from './account.interface';

export const AccountApis = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginRegisterResponse, LoginRequest>({
      query: (params) => ({
        url: '/login',
        method: 'POST',
        body: params,
      }),
    }),
    register: build.mutation<LoginRegisterResponse, RegisterRequest>({
      query: (params) => ({
        url: '/register',
        method: 'POST',
        body: params,
      }),
    }),
  }),
});

export default AccountApis;
