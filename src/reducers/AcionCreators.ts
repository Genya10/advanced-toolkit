import { userSlice } from './UserSlice';
import axios from "axios";
import { AppDispatch } from "../store/store";
import { IUser } from "../types/IUser";
import { createAsyncThunk } from '@reduxjs/toolkit';

/*export const fetchUsers =()=>async(dispatch:AppDispatch)=>{
    try{
      dispatch(userSlice.actions.usersFetching())
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      dispatch(userSlice.actions.usersFetchingSuccess(response.data))
    }catch(e:any){
      dispatch(userSlice.actions.usersFetchingError(e.message))
    }
}*/

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async(_,thunkAPI)=>{
    const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    return response.data
  }
)