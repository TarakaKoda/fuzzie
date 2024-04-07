"use client";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

import { useNodeConnections } from "@/provider/connections-provider";
import {
  onCreateNodesEdges,
  onFlowPublish,
} from "../_actions/workflow-connections";

import { useToast } from "@/components/ui/use-toast";

type Props = {
  children: React.ReactNode;
  edges: any[];
  nodes: any[];
};

const FlowInstance = ({ children, edges, nodes }: Props) => {
  const pathname = usePathname();
  const [isFlow, setIsFlow] = useState([]);
  const { nodeConnection } = useNodeConnections();
  const { toast } = useToast();

  const onFlowAutomation = useCallback(async () => {
    const flow = await onCreateNodesEdges(
      pathname.split("/").pop()!,
      JSON.stringify(nodes),
      JSON.stringify(edges),
      JSON.stringify(isFlow)
    );

    if (flow)
      toast({
        description: flow.message,
      });
  }, [nodeConnection]);

  const onPublishWorkflow = useCallback(async () => {
    const response = await onFlowPublish(pathname.split("/").pop()!, true);
    if (response) toast({ description: response });
  }, []);

  const onAutomateFlow = async () => {
    const flows: any = [];
    const connectedEdges = edges.map((edge) => edge.target);
    connectedEdges.map((target) => {
      nodes.map((node) => {
        if (node.id === target) {
          flows.push(node.type);
        }
      });
    });

    setIsFlow(flows);
  };

  useEffect(() => {
    onAutomateFlow();
  }, [edges]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-3 p-4">
        <Button onClick={onFlowAutomation} disabled={isFlow.length < 1}>
          Save
        </Button>
        <Button disabled={isFlow.length < 1} onClick={onPublishWorkflow}>
          Publish
        </Button>
      </div>
      {children}
    </div>
  );
};

export default FlowInstance;
