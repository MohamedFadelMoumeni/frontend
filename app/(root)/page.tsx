"use client"
import React from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { redirect } from 'next/navigation'

const HomePage = () => {
  redirect('/sign-in')
  return (
    <div>
           
      <h3>ddddd</h3>
    </div>
  )
}

export default HomePage