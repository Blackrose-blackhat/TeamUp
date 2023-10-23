import * as z from "zod";

export const UserValidation = z.object({
  profile_photo: z.string().url().nonempty(),
  username: z
    .string()
    .min(3, { message: "Minimum 3 characters." })
    .max(30, { message: "Maximum 30 caracters." }),
  gender: z.string().nonempty({message:"Please select  Gender"}),
  skills: z.array(z.string()).nonempty({message:"Add any skills"}),
  year: z.string().nonempty({message:"Please select youu year of studying"}),
  instagram:z.string(),
  whatsapp:z.string(),
  linkedin:z.string(),
  github:z.string(),
  bio:z.string().nonempty({message:"This field is required"}),
  projects :z.string(),
  projecttitle:z.string(),
});
