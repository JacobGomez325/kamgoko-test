/* eslint-disable no-async-promise-executor */
import { httpClient } from "@/plugins/http-client"
import type { User } from "@/types/user"




export  function useCreateUser (user: User,) {
  return  httpClient.post<any>(`users?access-token=xxx`,user)
}


export function useGetUser (page: number = 1,per_page:number = 100) {
  return  httpClient.get<any>(`users/?page=${page}&per_page=${per_page}`)
}





