import { ICarDetail } from "../../../../shared/api/car";
import { RejectedDataType } from "../../../../shared/types";

export interface ICarListState {
  readonly carList: ICarDetail[]
  readonly loading: boolean
  readonly error: RejectedDataType | null
}