export type FormStateType =
    | {
          errors?: {
              code?: string[];
              name?: string[];
          };
          message?: string;
      }
    | undefined;
