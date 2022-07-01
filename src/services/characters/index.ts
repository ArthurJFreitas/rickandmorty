import { AxiosResponse } from "axios";
import { api } from "../api";

export interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface CharactesResult {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: any
  location: any
  image: string
  episode: any[]
  url: string
  created: string
}

export interface CharactesRequest {
  info: Info
  results: CharactesResult[]
}

interface Params {
  page? : number;
}

export function getAllCharacters(params: Params): Promise<AxiosResponse<CharactesRequest, any>>{
  return api.get('/character', { params })
}