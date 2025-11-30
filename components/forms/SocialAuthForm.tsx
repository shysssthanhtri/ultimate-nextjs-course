"use client";

import React from "react";
import { SocialButton } from "@/components/forms/SocialButton";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import { ROUTES } from "@/constants/routes";

export const SocialAuthForm = () => {
  const handleSignIn = async (prodiver: "github" | "google") => {
    try {
      await signIn(prodiver, {
        redirectTo: ROUTES.HOME,
        // redirect: false,
      });
    } catch (error) {
      console.error(error);
      toast.error("Sign-in failed.", {
        description: error instanceof Error ? error.message : undefined,
      });
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <SocialButton
        iconSrc="/icons/github.svg"
        iconAlt="GitHub Logo"
        label="Log in with GitHub"
        invertIcon
        onClick={() => handleSignIn("github")}
      />

      <SocialButton
        iconSrc="/icons/google.svg"
        iconAlt="Google Logo"
        label="Log in with Google"
        onClick={() => handleSignIn("google")}
      />
    </div>
  );
};
