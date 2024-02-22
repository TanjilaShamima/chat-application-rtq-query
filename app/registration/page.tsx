import RegistrationForm from "@/src/components/Registration/RegistrationForm";
import RegistrationHeader from "@/src/components/Registration/RegistrationHeader";
import React from "react";

const LoginPage = () => {
  return (
    <div className="grid place-items-center h-screen bg-[#F9FAFB">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <RegistrationHeader />
          <RegistrationForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
