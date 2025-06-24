import { z } from "zod";

export const advocateSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  city: z.string(),
  degree: z.string(),
  specialties: z.array(z.string()),
  yearsOfExperience: z.number(),
  phoneNumber: z.number(),
});

export type AdvocateModel = z.infer<typeof advocateSchema>;