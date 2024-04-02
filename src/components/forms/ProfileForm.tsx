"use client";
import React, { useState } from "react";

import { EditUserProfileSchema } from "@/lib/types";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import GradientSpinningBorder from "../global/GradientSpinningBorder";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/inputAceternity";
import { Loader2 } from "lucide-react";

const ProfileForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: "onChange",
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const handleUpdateProfile = (
    values: z.infer<typeof EditUserProfileSchema>
  ) => {
    console.log("Form submitted", values);
  };
  return (
    <div className="max-w-md w-full flex flex-col justify-between md:items-center relative mx-auto rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to the Update Page
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Please proceed to manage your profile information.
      </p>
      <Form {...form}>
        <form
          className="my-8"
          onSubmit={form.handleSubmit(handleUpdateProfile)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <FormField
              disabled={isLoading}
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <LabelInputContainer>
                    <FormLabel className="text-lg">First name</FormLabel>
                    <FormControl>
                      <Input placeholder="User first name" {...field} />
                    </FormControl>
                  </LabelInputContainer>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <FormField
              disabled={isLoading}
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <LabelInputContainer>
                    <FormLabel className="text-lg">Last name</FormLabel>
                    <FormControl>
                      <Input placeholder="User last name" {...field} />
                    </FormControl>
                  </LabelInputContainer>
                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
          </div>
          <FormField
            disabled={isLoading}
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <LabelInputContainer>
                  <FormLabel className="text-lg">Email Address</FormLabel>
                  <FormControl>
                    <Input
                      className="cursor-not-allowed"
                      isEmail={true}
                      placeholder="useremail@example.com"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                </LabelInputContainer>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="mt-8 -mb-6">
            <GradientSpinningBorder>
              <button
                className="rounded-full relative group/btn bg-white dark:bg-black block w-full dark:text-white h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit">
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="ml-4 h-4 w-4 animate-spin" />
                    <span>Saving User Settings...</span>
                  </div>
                ) : (
                  <p>Save User Settings &rarr;</p>
                )}
                <BottomGradient />
              </button>
            </GradientSpinningBorder>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ProfileForm;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
