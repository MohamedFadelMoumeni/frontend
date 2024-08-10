'use server'
import {jwtDecode} from 'jwt-decode'
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import { BACKEND_URL } from '@/constants/config';

export const getHeaders = () => ({
  Cookie: cookies().toString(),
});


export async function login(values : {email: string; password: string}){
  const resp = await fetch(`${BACKEND_URL}/auth/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
  if(resp.ok){
    setAuthCookie(resp)
    redirect('/dashboard')
  }else{
    const respJson = await resp.json()
    return respJson
  }


}

const setAuthCookie = (response: Response) => {
  const setCookieHeader = response.headers.get("Set-Cookie");

  if (setCookieHeader) {
    const token = setCookieHeader.split(";")[0].split("=")[1];
    console.log(jwtDecode(token))
    cookies().set({
      name: 'Authentication',
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }
};

export const getAuthCookie = () => {
  return cookies().get('Authentication')
}
export  const  authenticated = async () => {
  return await !!cookies().get('Authentication')?.value;
}

export const signOut = () => {
  cookies().delete('Authentication');
  redirect('/sign-in');
}

export const signUp = async (values : object) => {
  const resp = await fetch(`${BACKEND_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
  const respJson = await resp.json()
  if(resp.status === 201){
    redirect('/sign-in')
  }
  return respJson

}

export const forgotPassword = async (values : object) => {
  const resp = await fetch(`${BACKEND_URL}/auth/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
  const respJson = await resp.json()
  return respJson

}
export const resetPassword = async (values : object, token : string) => {
  const resp = await fetch(`${BACKEND_URL}/auth/reset-password?token=${token}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
    cache: "no-cache"
  })
  const respJson = await resp.json()
  return respJson
}

export const verifyEmail = async (token : string) => {
  const resp = await fetch(`${BACKEND_URL}/auth/verify-email?token=${token}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache"
    })
  const respJson = await resp.json()
  return respJson

}