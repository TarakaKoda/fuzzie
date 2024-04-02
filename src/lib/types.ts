import { z } from "zod";

export const EditUserProfileSchema = z.object({
  email: z.string().email("Required"),
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
});
