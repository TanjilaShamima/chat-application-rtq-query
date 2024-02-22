/** For Register User */
export type UserType = {
  id?: number;
  name: string;
  email: string;
  password: string;
};

export type UserFormType = UserType & {
  confirmPassword: string;
  rememberMe: boolean;
};

export type AuthState = {
  accessToken: string | undefined;
  user: UserType | undefined;
};


/** For Log in User */
export type UserLogInFormType = {
  email: string;
  password: string;
};
