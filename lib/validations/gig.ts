import * as z from "zod";

export const GigValidation = z.object({
  gigs: z.string().nonempty().min(3, { message: "Minimum 3 characters" }),
  accountId:z.string(),
  requirement : z.array(z.string()).min(1,{message:"Minimum 1 tag required"}),
});
