import { z } from "zod";

export type ShipFormState =
    | {
          errors?: {
              code?: string[];
              name?: string[];
          };
          message?: string;
      }
    | undefined;

export const ShipStatusEnum = z.enum(["Aktif", "Tidak Aktif"]);

export const ShipSchema = z.object({
    code: z.string().trim(),
    name: z.string().trim(),
    status: ShipStatusEnum,
    createdAt: z.string().trim(),
});

export type Ship = z.infer<typeof ShipSchema>;
