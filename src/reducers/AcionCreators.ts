import axios from "axios";
import { AppDispatch } from "../store/store";
import { IUser } from "../types/IUser";

export const fetchUsers =()=>async(dispatch:AppDispatch)=>{
    try{
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
    }catch(e){
    }
}