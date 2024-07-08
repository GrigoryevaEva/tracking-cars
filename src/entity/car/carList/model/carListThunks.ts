import { createAsyncThunk } from "@reduxjs/toolkit";
import { SyntheticEvent } from "react";

import { ErrorType } from "../../../../shared/types";
import { getCarList } from "../../../../shared/api/car";


export const fetchCarList = createAsyncThunk(
  'car/fetchCarList',
  async (_: SyntheticEvent | void, thunkAPI) => {
    try {
      const resp = await getCarList();
      return resp
    } catch (err: unknown) {
      const error = err as ErrorType
      return thunkAPI.rejectWithValue({
        messageError: error.message,
        status: error.response?.status
      })
    }
  }
)