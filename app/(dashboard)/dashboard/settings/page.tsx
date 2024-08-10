import React from 'react'
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
import ProfilePage from '@/components/settings/profile'
import ChangePasswordPage from '@/components/settings/change-password'
const Setting = () => {
  return (
    <main className="w-full flex-grow overflow-x-hidden overflow-y-auto padding-x-container py-14">
         <Tabs defaultValue="profile" >
      <TabsList className="grid grid-cols-2 w-fit">
        <TabsTrigger value="profile">Account</TabsTrigger>
        <TabsTrigger value="password">Change Password</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <ProfilePage />
      </TabsContent>
      <TabsContent value="password">
        <ChangePasswordPage />
      </TabsContent>
    </Tabs>
  </main>
  )
}

export default Setting