import * as zod from "zod"

export const formSchema = zod.object({
  prompt: zod.string().min(1, {
    message: "Prompt is required",
  }),
  amount: zod.string().min(1),
  resolution: zod.string().min(1),
})

export const amountOptions = [
  {
    value: "1",
    label: "1 Image",
  },
  {
    value: "2",
    label: "2 Images",
  },
  {
    value: "5",
    label: "5 Images",
  },
]

export const resolutionOptions = [
  {
    value: "256x256",
    label: "256x256",
  },
  {
    value: "512x512",
    label: "512x512",
  },
  {
    value: "1024x1024",
    label: "1024x1024",
  },
]
