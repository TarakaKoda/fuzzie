import { ConnectionProviderProps } from "@/provider/connections-provider";
import { z } from "zod";

export const EditUserProfileSchema = z.object({
  email: z.string().email("Required"),
  firstName: z.string().min(1, "Required"),
  lastName: z.string().optional(),
});

export const WorkflowFormSchema = z.object({
  name: z.string().min(1, "Required"),
  description: z.string().min(1, "Required"),
});

export type ConnectionsTypes = "Google Drive" | "Notion" | "Slack" | "Discord";

export type Connection = {
  title: ConnectionsTypes;
  description: string;
  image: string;
  connectionKey: keyof ConnectionProviderProps;
  accessTokenKey?: string;
  alwaysTrue?: boolean;
  slackSpecial?: boolean;
};
