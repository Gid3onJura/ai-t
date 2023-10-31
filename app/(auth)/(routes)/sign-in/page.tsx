"use client"

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form"
import { formSchema } from "./constants"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import * as zod from "zod"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
<<<<<<< HEAD
import { signIn, useSession } from "next-auth/react"
=======
import { useSession } from "next-auth/react"
>>>>>>> master

export default function Page() {
  const [error, setError] = useState("")

  const router = useRouter()
  const session = useSession()

  const form = useForm<zod.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

<<<<<<< HEAD
=======
  if (session.status === "loading") {
    return <p>Loading...</p>
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard")
  }

>>>>>>> master
  const isLoading = form.formState.isSubmitting

  const onSubmit = async (values: zod.infer<typeof formSchema>) => {
    try {
<<<<<<< HEAD
      const signInData = await signIn("credentials", {
        email: values.email,
        password: values.password,
      })
      console.log("signInData", signInData)
      if (signInData?.error) {
        console.log(signInData.error)
      } else {
        router.refresh()
        router.push("/dashboard")
      }
    } catch (error: any) {
      console.log(error)
=======
      form.reset()
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: values?.email,
          password: values?.password,
        }),
      })

      if (response.status === 200 || response.status === 201) {
        router.push("/dashboard")
      } else {
        router.push("/sign-in")
        setError("Something  wrong!")
      }
    } catch (error: any) {
    } finally {
>>>>>>> master
    }
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-red-950">
        <h1 className="text-xl font-bold my-4">Login</h1>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-log border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="email"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="email"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="password"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full" disabled={isLoading}>
                Login
              </Button>
            </form>
          </Form>
          {error && <div>Etwas ist schief gelaufen! {error}</div>}
          <Link className="text-sm, mt-3 text-right" href={"/sign-up"}>
            Du hast keinen Account? <span className="underline">Register</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
