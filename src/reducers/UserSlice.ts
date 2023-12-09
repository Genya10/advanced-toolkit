import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import { IUser } from "../types/IUser";

interface UserState {
    users:IUser[];
    isLoading:boolean;
    error:string;
}

const initialState:UserState={
    users:[],
    isLoading:false,
    error:'',
}

export const userSlice = createSlice({
  name:'user',
  initialState,
  reducers:{
   increment(state, action:PayloadAction<number>){
  
   }
  }
})
export const {increment} = userSlice.actions
export default userSlice.reducer;