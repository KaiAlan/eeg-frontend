import { z } from "zod";


export const openRequestSchema = z.object({
    productCategory: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    productSpecification: z.string(),
    quantity: z.string(),
    createdAt: z.date(),
    status: z.enum(['in progress', 'closed'])
  });

export type OpenRequestSchemaType = z.infer<typeof openRequestSchema>