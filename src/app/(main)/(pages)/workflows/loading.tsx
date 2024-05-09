import { Skeleton } from "@/components/ui/skeleton";
import Workflows from "./_components";

type Props = {};

const WorkflowsPage = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        Workflows
        <Skeleton className="h-12 w-12 rounded-full" />
      </h1>

      <div className="relative flex flex-col gap-4">
        <section className="grid lg:grid-cols-3 p-6 gap-6 text-muted-foreground">
          <p className="lg:col-span-3">
            Create custom automation workflows with ease. Connect apps, set
            triggers, and define actions to streamline your tasks and boost
            efficiency.
          </p>
          <Skeleton className="h-40 " />
          <Skeleton className="h-40 " />
          <Skeleton className="h-40 " />
          <Skeleton className="h-40 " />
          <Skeleton className="h-40 " />
          <Skeleton className="h-40 " />
        </section>
      </div>
    </div>
  );
};

export default WorkflowsPage;
