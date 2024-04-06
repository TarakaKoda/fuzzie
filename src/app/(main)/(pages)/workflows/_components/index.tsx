import React from "react";
import Workflow from "./Workflow";

type Props = {};

const Workflows = (props: Props) => {
  return (
    <div className="relative flex flex-col gap-4">
      <section className="grid md:grid-cols-3 gap-4 p-6">
        <Workflow
          name="Automation Workflow"
          description="Creating a test workflow"
          id="fdeaeceeve3fesf"
          publish={false}
        />
        <Workflow
          name="Automation Workflow"
          description="Creating a test workflow"
          id="fdeaeceeve3fesf"
          publish={false}
        />
        <Workflow
          name="Automation Workflow"
          description="Creating a test workflow"
          id="fdeaeceeve3fesf"
          publish={false}
        />
        <Workflow
          name="Automation Workflow"
          description="Creating a test workflow"
          id="fdeaeceeve3fesf"
          publish={false}
        />
        <Workflow
          name="Automation Workflow"
          description="Creating a test workflow"
          id="fdeaeceeve3fesf"
          publish={false}
        />
      </section>
    </div>
  );
};

export default Workflows;
