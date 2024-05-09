import Workflows from "./_components";
import WorkflowButton from "./_components/WorkflowButton";

type Props = {};

const WorkflowsPage = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 relative">
      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b justify-between">
        Workflows
        <WorkflowButton />
      </h1>
      <div className="relative flex flex-col gap-4">
        <section className="grid text-muted-foreground">
          <p className="lg:col-span-2 px-6 pt-6">
            Create custom automation workflows with ease. Connect apps, set
            triggers, and define actions to streamline your tasks and boost
            efficiency.
          </p>
          <Workflows />
        </section>
      </div>
    </div>
  );
};

export default WorkflowsPage;
