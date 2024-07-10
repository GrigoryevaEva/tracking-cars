import { api } from "../base"
import { ICarDetail } from "./types"

const endpoint = 'vehicles'

export const getCarList = (): Promise<ICarDetail[]> => {
  return api.get(endpoint)
}