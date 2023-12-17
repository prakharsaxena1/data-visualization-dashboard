export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginRegisterResponse {
  success: boolean;
  message: string;
  data: {
    username: string;
    email: string;
    id: string;
  };
  token: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  username: string;
}
