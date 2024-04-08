import { EditorCanvasCardType } from "@/lib/types";
import { useEditor } from "@/provider/editor-provider";
import { useMemo } from "react";
import { Position, useNodeId } from "reactflow";
import EditorCanvasIconHelper from "./EditorCanvasIconHelper";
import CustomHandle from "./CustomHandle";
import { CardBody, CardContainer, CardItem } from "@/components/global/3DCard";
import { Badge } from "@/components/ui/badge";
import clsx from "clsx";

type Props = {};

const EditorCanvasCardSingle = ({ data }: { data: EditorCanvasCardType }) => {
  const { dispatch, state } = useEditor();
  const nodeId = useNodeId();

  const logo = useMemo(() => {
    return <EditorCanvasIconHelper type={data.type} />;
  }, [data]);

  return (
    <>
      {data.type !== "Trigger" && data.type !== "Google Drive" && (
        <CustomHandle
          type="target"
          position={Position.Top}
          style={{ zIndex: 100 }}
        />
      )}
      <CardContainer className="relative max-w-[400px] dark:border-muted-foreground/70">
        <CardBody className="flex flex-col items-start justify-between bg-gray-50 group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto lg:h-[170px] rounded-xl p-6 border">
          <CardItem className="flex flex-row items-center gap-4">
            <div>{logo}</div>
            <div>
              <h2 className="text-md">{data.title}</h2>
              <div>
                <p className="text-xs text-muted-foreground/50">
                  <b className="text-muted-foreground/80">ID:</b>
                  {nodeId}
                </p>
                <p>{data.description}</p>
              </div>
            </div>
          </CardItem>
          <Badge variant="secondary" className="absolute right-2 top-2">
            {data.type}
          </Badge>
          <div
            className={clsx("absolute left-3 top-4 h-2 w-2 rounded-full", {
              "bg-green-500": Math.random() < 0.6,
              "bg-orange-500": Math.random() >= 0.6 && Math.random() < 0.8,
              "bg-red-500": Math.random() >= 0.8,
            })}></div>
        </CardBody>
      </CardContainer>
      <CustomHandle type="source" position={Position.Bottom} id="a" />
    </>
  );
};

export default EditorCanvasCardSingle;
