import { WorkflowFormSchema } from "@/lib/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Loader2 } from "lucide-react";
import GradientSpinningBorder from "../global/GradientSpinningBorder";
import { Input } from "../ui/inputAceternity";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  subTitle?: string;
};

const WorkflowForm = ({ title, subTitle }: Props) => {
  const form = useForm<z.infer<typeof WorkflowFormSchema>>({
    mode: "onChange",
    resolver: zodResolver(WorkflowFormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  const isLoading = form.formState.isLoading;

  const router = useRouter();

  const handleSubmit = () => {};

  return (
    <div className="max-w-md w-full  relative mx-auto rounded-2xl p-4 shadow-input bg-white dark:bg-black">
      <Form {...form}>
        <form
          className="flex flex-col gap-4 justify-between"
          onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            disabled={isLoading}
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <LabelInputContainer>
                  <FormLabel className="text-lg self-start">Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Modal Name" {...field} />
                  </FormControl>
                </LabelInputContainer>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <FormField
            disabled={isLoading}
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <LabelInputContainer>
                  <FormLabel className="text-lg self-start">
                    Description
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Modal Description" {...field} />
                  </FormControl>
                </LabelInputContainer>
                <FormMessage className="text-red-500" />
              </FormItem>
            )}
          />
          <div className="mt-8 ">
            <GradientSpinningBorder>
              <button
                className="rounded-full relative group/btn bg-white dark:bg-black block w-full dark:text-white h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit">
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader2 className="ml-4 h-4 w-4 animate-spin" />
                    <span>Saving Modal Settings...</span>
                  </div>
                ) : (
                  <p>Save Modal Settings &rarr;</p>
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

export default WorkflowForm;

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
    <div className={cn("flex flex-col  space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
