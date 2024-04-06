import { CardContainer, CardItem, CardBody } from "@/components/global/3DCard";
import { ConnectionsTypes } from "@/lib/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import GradientSpinningBorder from "@/components/global/GradientSpinningBorder";

type Props = {
  type: ConnectionsTypes;
  icon: string;
  title: ConnectionsTypes;
  description: string;
  callback?: () => void;
  connected?: {} & any;
};

const ConnectionCard = ({
  type,
  icon,
  title,
  description,
  callback,
  connected,
}: Props) => {
  return (
    <CardContainer className="inter-var w-full lg:w-[800px]">
      <CardBody className="flex items-start justify-between bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto lg:h-[170px] rounded-xl p-6 border">
        <CardItem translateZ="50" className="flex flex-col gap-4">
          <div className="flex flex-row gap-2">
            <Image
              src={icon}
              alt={title}
              height={30}
              width={30}
              className="object-contain"
            />
          </div>
          <div>
            <h3 className="text-lg">{title}</h3>
            <p>{description}</p>
          </div>
        </CardItem>
        <CardItem
          translateZ="60"
          className="flex flex-col items-center gap-2 p-4">
          {/* {connected[type] ? (
            <div className="border-primary rounded-lg border-2 px-2 py-3 font-bold text-white">
              Connected
            </div>
          ) : ( */}
          <GradientSpinningBorder>
            <Link
              href={
                title === "Discord"
                  ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                  : title === "Notion"
                  ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                  : title === "Slack"
                  ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                  : "#"
              }>
              <p className="rounded-full h-10 flex items-center justify-center relative bg-white dark:bg-black p-3 dark:text-white text-black font-normal">
                Connect
              </p>
            </Link>
          </GradientSpinningBorder>
          {/* )} */}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ConnectionCard;
