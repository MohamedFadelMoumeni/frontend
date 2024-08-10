"use client"
 
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { UserType } from "@/types"
import { revalidateUser, updateUser } from "@/lib/actions/profile"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"
import { cn } from "@/lib/utils"
import { useState } from "react"
 
const formSchema = z.object({
  first_name: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  last_name: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  email: z.string().email(),
  phone_number: z.string().optional()
})

type Props = {
  user : UserType
}

const ProfileForm = (props : Props) => {
  const {user } = props
  const {toast} = useToast()
  const [isLoading, setIsLoading] = useState<boolean>(false)


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        values: {
          first_name: user.first_name || '',
          last_name:  user.last_name || '',
          email:  user.email || '',
          phone_number : user.phone_number || ''
        },
        resetOptions:{
          keepDirty:true
        }
      })
      async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        try{
          const data = await updateUser({
            ...values,
            _id: user._id
           })
           if(data){
            toast({
              title: "Profile update success",
              className : cn("top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-green-600 text-white text-lg")
            })
           }else {
            toast({
              title: "Profile update failed",
              className : cn("top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-600 text-white text-lg")
            })
           }
           revalidateUser()
          
        }catch(e:unknown){
          toast({
            title: "Profile update failed",
            className : cn("top-0 right-0 flex fixed md:max-w-[420px] md:top-4 md:right-4 bg-red-600 text-white text-lg")
          })
        }finally{
          setIsLoading(false)
        }
      }

    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="w-full flex items-center gap-2 ">
            <FormField
              control={form.control}
              name='first_name'
              render={({ field }) => (
                <FormItem className="w-1/2">
                <FormLabel className="regular-13">First name</FormLabel>
                <FormControl>
                    <Input className="no-focus" placeholder="First name" {...field} />
                  </FormControl>
                  <FormMessage  className="medium-13"/>
                </FormItem>
               
              )}
            />
            <FormField
              control={form.control}
              name='last_name'
              render={({ field }) => (
                <FormItem className="w-1/2">
                <FormLabel className="regular-13">Last name</FormLabel>
                <FormControl>
                    <Input className="no-focus" placeholder="Last name" {...field} />
                  </FormControl>
                  <FormMessage  className="medium-13"/>
                </FormItem>
               
              )}
            />
            </div>
            <div className="w-full flex items-center gap-2 ">
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className="w-1/2">
                <FormLabel className="regular-13">Email</FormLabel>
                <FormControl>
                    <Input type="email" className="no-focus" placeholder="Email" {...field} />
                  </FormControl>
                  <FormMessage  className="medium-13"/>
                </FormItem>
               
              )}
            />
            <FormField
              control={form.control}
              name='phone_number'
              render={({ field }) => (
                <FormItem className="w-1/2">
                <FormLabel className="regular-13">Phone number</FormLabel>
                <FormControl>
                    <Input className="no-focus" placeholder="Phone number" {...field} />
                  </FormControl>
                  <FormMessage  className="medium-13"/>
                </FormItem>
               
              )}
            />
            </div>
            <Button disabled={isLoading} type="submit" className="regular-13">Submit</Button>
          </form>
        </Form>
      )
}

export default ProfileForm