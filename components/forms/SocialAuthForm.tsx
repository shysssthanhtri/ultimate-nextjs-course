import React from "react";
import { SocialButton } from "@/components/forms/SocialButton";

export const SocialAuthForm = () => {
  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <SocialButton iconSrc="/icons/github.svg" iconAlt="GitHub Logo" label="Log in with GitHub" invertIcon />

      <SocialButton iconSrc="/icons/google.svg" iconAlt="Google Logo" label="Log in with Google" />
    </div>
  );
};
