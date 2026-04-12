export interface UnionUser {
  email: string;
  fullName: string;
  preferredName: string;
}

export interface AuthState {
  user: UnionUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterCredentials {
  email: string;
  password1: string;
  password2: string;
}

export interface AuthActions {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => Promise<void>;
}
