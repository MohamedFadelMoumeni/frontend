'use server'
import { revalidateTag } from 'next/cache';
import {get, update} from '../fetch'
import { API_ROUTES } from '@/constants/api'
import { UserType , PasswordData} from '@/types';

export const getUserDetails = async () => {
    const data = await get(API_ROUTES.USER_DETAILS, ["user"]);
    return data
}
export const updateUser = async(user : Partial<UserType>) => {
    const data = await update(API_ROUTES.UPDATE_CURRENT_USER, user);
    return data
}

export const updatePassword = async (passwordData : PasswordData) => {
    const data = await update(API_ROUTES.UPDATE_PASSWORD, passwordData);
    return data

}
export const revalidateUser = () => revalidateTag("user")