"use client";

import { CardBody, CardContainer, CardItem } from "@/components/global/3DCard";
import { Switch } from "@/components/ui/switch";

import { Label } from "@/components/ui/labelAceternity";
import Image from "next/image";
import Link from "next/link";
import { onFlowPublish } from "../_actions/workflow-connections";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  name: string;
  description: string;
  id: string;
  publish: boolean | null;
};

const Workflow = ({ name, description, id, publish }: Props) => {
  const { toast } = useToast();
  const onPublishFlow = async (event: any) => {
    const response = await onFlowPublish(
      id,
      event.target.ariaChecked === "false"
    );
    if (response)
      toast({
        title: response,
      });
  };

  return (
    <CardContainer className="inter-var w-full lg:w-[800px]">
      <CardBody className="flex items-center justify-between bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto lg:h-[170px] rounded-xl p-6 border">
        <CardItem translateZ="50">
          <Link href={`workflows/editor/${id}`} className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <Image
                src="/googleDrive.png"
                alt="Google Drive"
                height={30}
                width={30}
                className="object-contain"
              />
              <Image
                src="/notion.png"
                alt="Notion"
                height={30}
                width={30}
                className="object-contain"
              />
              <Image
                src="/discord.png"
                alt="Discord"
                height={30}
                width={30}
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-lg">{name}</h3>
              <p>{description}</p>
            </div>
          </Link>
        </CardItem>
        <CardItem
          translateZ={60}
          className="flex flex-col gap-2 p-4 items-center">
          <Label htmlFor="airplane-mode" className="text-muted-foreground">
            {publish! ? "On" : "Off"}
          </Label>
          {/* <GradientSpinningBorder rounded="rounded-full p-1"> */}
          <Switch
            className="relative"
            id="airplane-mode"
            onClick={onPublishFlow}   
            defaultChecked={publish!}
          />
          {/* </GradientSpinningBorder> */}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Workflow;
