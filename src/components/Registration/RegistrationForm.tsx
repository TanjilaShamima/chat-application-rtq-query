"use client";
import { useRegisterMutation } from "@/lib/redux/slices/auth/authApi";
import { UserFormType } from "@/src/utils/appCommonTypes";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RegistrationForm = () => {
  const [userData, setUserData] = useState<UserFormType>({} as UserFormType);
  const [register, { data, isLoading, isSuccess, isError, error }] =
    useRegisterMutation();
  const router = useRouter();

  console.log("userData", userData);

  const handleChange = (e: any) => {
    e.preventDefault();

    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    register({
      name: userData?.name,
      email: userData?.email,
      password: userData?.password,
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
          <label className="sr-only">Full Name</label>
          <input
            id="name"
            name="name"
            type="Name"
            value={userData?.name || ""}
            onChange={handleChange}
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
            placeholder="Name"
          />
        </div>

        <div>
          <label className="sr-only">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            value={userData?.email}
            onChange={handleChange}
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
            placeholder="Email address"
          />
        </div>

        <div>
          <label className="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={userData?.password}
            onChange={handleChange}
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>

        <div>
          <label className="sr-only">Confirm Password</label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="confirmPassword"
            value={userData?.confirmPassword}
            onChange={handleChange}
            required
            className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
            placeholder="confirmPassword"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="rememberMe"
            name="rememberMe"
            type="checkbox"
            className="h-4 w-4 text-violet-600 focus:ring-violet-500 border-gray-300 rounded"
            onChange={() =>
              setUserData((prev) => ({ ...prev, rememberMe: !prev.rememberMe }))
            }
            checked={userData?.rememberMe}
          />
          <label className="ml-2 block text-sm text-gray-900">
            Agreed with the terms and condition
          </label>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
          Sign up
        </button>
      </div>
    </form>
  );
};

export default RegistrationForm;
