import { fetchUsers } from './AcionCreators';
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
  reducers:{},

  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action:PayloadAction<IUser[]>) => {
        state.isLoading = false;
        state.error = '';
        state.users = action.payload;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsers.rejected, (state, action:any) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
  })
  export default userSlice.reducer;


/*extraReducers:{
  [fetchUsers.fulfilled.type]:(state:any,action:PayloadAction<IUser[]>)=>{
    state.isLoading = false;
    state.error = '';
    state.users = action.payload;
},
[fetchUsers.pending.type]:(state:any) => {
  state.isLoading = true;
},
[fetchUsers.rejected.type]: (state:any, action: PayloadAction<string>)=>{
  state.isLoading = false;
  state.error = action.payload
},}*/











 