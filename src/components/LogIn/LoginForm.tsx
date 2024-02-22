"use client";
import { useLoginMutation } from "@/lib/redux/slices/auth/authApi";
import { UserFormType, UserLogInFormType } from "@/src/utils/appCommonTypes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const LoginForm = () => {
  const [loginData, setLoginData] = useState<UserLogInFormType>(
    {} as UserLogInFormType
  );
  const [login, { data, isLoading, isSuccess, isError, error }] =
    useLoginMutation();
  const router = useRouter();

  const handleChange = (e: any) => {
    e.preventDefault();

    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login({
      email: loginData?.email,
      password: loginData?.password,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      router.push("/chat");
    }
  }, [data, error, isSuccess]);

  return (
    <form
      className="mt-8 space-y-6"
      action="#"
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label className="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            value={loginData?.email}
            onChange={handleChange}
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>
        <div>
          <label className="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
            value={loginData?.password}
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="flex items-center justify-end">
        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-violet-600 hover:text-violet-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
