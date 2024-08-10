"use client"
 import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
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
import { updatePassword } from "@/lib/actions/profile"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
 
const formSchema = z.object({
  current_password: z.string().min(8, {
    message: "Current password must be at least 8 characters.",
  }),
  new_password: z.string().min(8, {
    message: "New password must be at least 8 characters.",
  }),

})

const ChangePasswordForm = () => {
  const { toast } = useToast()
  const [isLoading , setIsLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          current_password: "",
          new_password: ""
        },
      })
      async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        try {
          const response = await updatePassword(values)
          console.log(response)
          if(response){
            toast({
              title: "Profile update success",
              className : cn("top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-600 text-white text-lg")
            })
            form.reset()
           }else {
            toast({
              title: "Current Password is invalid",
              className : cn("top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-600 text-white text-lg")
            })
           }
        }catch(e:any){
          toast({
            title: e.message,
            className : cn("top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-600 text-white text-lg")
          })

        }finally{
          setIsLoading(false)
        }
      }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="w-full flex flex-col items-start gap-2 ">
            <FormField
              control={form.control}
              name='current_password'
              render={({ field }) => (
                <FormItem className="w-1/2">
                <FormLabel className="regular-13">Current password</FormLabel>
                <FormControl>
                    <Input type="password" className="no-focus" placeholder="Current password" {...field} />
                  </FormControl>
                  <FormMessage  className="medium-13"/>
                </FormItem>
               
              )}
            />
            <FormField
              control={form.control}
              name='new_password'
              render={({ field }) => (
                <FormItem className="w-1/2">
                <FormLabel className="regular-13">New password</FormLabel>
                <FormControl>
                    <Input type="password" className="no-focus" placeholder="New password" {...field} />
                  </FormControl>
                  <FormMessage  className="medium-13"/>
                </FormItem>
               
              )}
            />
            </div>
            <Button disabled={isLoading} type="submit" className="regular-13">
              {
                isLoading? "Loading..." : "Change Password"
              }
            </Button>
          </form>
        </Form>
      )
}

export default ChangePasswordForm