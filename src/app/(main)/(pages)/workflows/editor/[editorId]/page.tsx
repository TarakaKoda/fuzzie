import ConnectionsProvider from "@/provider/connections-provider";
import EditorProvider from "@/provider/editor-provider";
import React from "react";
import EditorCanvas from "./_components/EditorCanvas";

interface Props {
  params: { editorId: string };
}

const WorkflowsEditorPage = ({ params: { editorId } }: Props) => {
  return (
    <div className="h-full">
      <EditorProvider>
        <ConnectionsProvider>
          <EditorCanvas/>
        </ConnectionsProvider>
      </EditorProvider>
    </div>
  );
};

export default WorkflowsEditorPage;
