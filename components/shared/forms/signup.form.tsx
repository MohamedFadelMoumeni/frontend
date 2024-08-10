"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signUp } from "@/lib/actions/auth"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  first_name: z.string().min(2, {
        message: "First name must be at least 2 characters.",
   }),
   last_name: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export function SignUpForm() {
  const {toast} = useToast()
  const [isLoading , setIsLoading] = useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
      password: "",  
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true) 
    const data = await signUp(values)
     if(data?.error){
      toast({
        title: data?.message,
        className : cn("top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-600 text-white text-lg")
      })
     }else {
      toast({
        title: "Sign up success",
        className : cn("top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-600 text-white text-lg")
      })
     }
     form.reset()
     setIsLoading(false)
   
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full max-w-lg">
      <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="Email" className="no-focus" {...field} />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">First name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="First name" className="no-focus" {...field} />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Last name</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Last name" className="no-focus" {...field} />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
                  <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" className="no-focus" {...field} />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  )
}
