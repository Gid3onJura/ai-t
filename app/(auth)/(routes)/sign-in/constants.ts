import * as zod from "zod"

export const formSchema = zod.object({
  email: zod.string().min(1, {
    message: "email is required",
  }),
  password: zod.string().min(1, {
    message: "password is required",
  }),
})
