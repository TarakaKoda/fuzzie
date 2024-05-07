import React from "react";
import Workflow from "./Workflow";
import { onGetWorkflows } from "../_actions/workflow-connections";
import MoreCredits from "./MoreCredits";

type Props = {};

const Workflows = async (props: Props) => {
  const workflows = await onGetWorkflows();
  return (
    <div className="relative flex flex-col justify-center items-center gap-4">
      <section
        className={`grid gap-4 p-6 ${workflows?.length && "md:grid-cols-3"}`}>
          <MoreCredits/>
        {workflows?.length ? (
          workflows.map((flow) => <Workflow key={flow.id} {...flow} />)
        ) : (
          <div className="flex items-center justify-center text-muted-foreground">
            No Workflows
          </div>
        )}
      </section>
    </div>
  );
};

export default Workflows;
