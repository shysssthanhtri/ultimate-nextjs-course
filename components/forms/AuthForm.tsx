"use client";

import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { DefaultValues, FieldValues, Path, SubmitHandler, useForm } from "react-hook-form";
import { z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ROUTES } from "@/constants/routes";
import Link from "next/link";

interface Props<T extends FieldValues> {
  formType: "SIGN_IN" | "SIGN_UP";
  schema: ZodType<T>;
  defaultValues: T;
  onSubmit: (data: T) => Promise<{ success: boolean; data?: T }>;
}

export function AuthForm<T extends FieldValues>({ formType, schema, defaultValues, onSubmit }: Props<T>) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof schema>>({
    resolver: standardSchemaResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>,
  });

  const handleSubmit: SubmitHandler<T> = async () => {};

  const buttonText = formType === "SIGN_IN" ? "Sign in" : "Sign up";

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="mt-10 space-y-6">
        {Object.keys(defaultValues).map((keyName) => (
          <FormField
            key={keyName}
            control={form.control}
            name={keyName as Path<T>}
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-2">
                <FormLabel className="paragraph-medium text-dark400_light700">{field.name}</FormLabel>
                <FormControl>
                  <Input
                    required
                    type={field.name === "password" ? "password" : "text"}
                    {...field}
                    className="paragraph-regular background-light900_dark200 light-border-2 text-dark300_light700 no-focus rounded-1.5 min-h-12 border"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <Button
          type="submit"
          className="primary-gradient paragraph-medium rounded-2 font-inter !text-light-900 min-h-12 w-full px-4 py-3"
          disabled={form.formState.isSubmitting}
        >
          {buttonText}
        </Button>

        {formType === "SIGN_IN" ? (
          <p>
            Don&#39;t have an account?{" "}
            <Link className="paragraph-semibold primary-text-gradient" href={ROUTES.SIGN_UP}>
              Sign up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <Link className="paragraph-semibold primary-text-gradient" href={ROUTES.SIGN_IN}>
              Sign in
            </Link>
          </p>
        )}
      </form>
    </Form>
  );
}
