"use client";

import WorkflowForm from "@/components/forms/WorkflowForm";
import CustomModal from "@/components/global/CustomModal";
import GradientSpinningBorder from "@/components/global/GradientSpinningBorder";
import { Button } from "@/components/ui/button";
import { useModal } from "@/provider/modal-provider";
import { Plus } from "lucide-react";
import React from "react";

type Props = {};

const WorkflowButton = (props: Props) => {
  const { setOpen, setClose } = useModal();

  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerful tool that help you automate tasks.">
        <WorkflowForm />
      </CustomModal>
    );
  };

  return (
    <GradientSpinningBorder>
      <Button
        size={"icon"}
        className="relative rounded-full bg-white hover:bg-background text-black dark:bg-black dark:text-white"
        onClick={handleClick}>
        <Plus className="dark:text-white" />
      </Button>
    </GradientSpinningBorder>
  );
};

export default WorkflowButton;
