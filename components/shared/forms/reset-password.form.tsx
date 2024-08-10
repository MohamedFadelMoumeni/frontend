"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { resetPassword } from "@/lib/actions/auth"
import { useRouter } from "next/navigation"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { cn } from "@/lib/utils"

const formSchema = z.object({
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
  confirm_password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
}).refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match.",
    path: ["confirm_password"]
  });

type Props = {
    token : string
}  

export function ResetPasswordForm({token}: Props) {

  const { toast } = useToast()
  const [isLoading , setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirm_password: ""
    },
  })

   async function onSubmit(values: z.infer<typeof formSchema>) {  
    setIsLoading(true) 
    const data = await resetPassword(values, token)
    if(data?.statusCode !== 200){
      toast({
        title: data?.message,
        className : cn("top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-600 text-white text-lg")
      })
    }else {
      toast({
        title: data.message,
        className : cn("top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-600 text-white text-lg")
      })

      router.push("/sign-in")
    }
    setIsLoading(false)
    form.reset() 

   }
  

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5 w-full  max-w-lg">
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
         <FormField
          control={form.control}
          name="confirm_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm">Confirm password</FormLabel>
              <FormControl>
                <Input type="password" className="no-focus" placeholder="Confirm password" {...field} />
              </FormControl>
              <FormMessage className="text-sm" />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit" className="w-full">
          {
            isLoading? "Loading..." : "Update"
          }
        </Button>
      </form>
    </Form>
  )
}
