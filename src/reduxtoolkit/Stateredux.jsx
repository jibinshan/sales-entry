import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  toast } from 'react-toastify';
import axios from "axios";

const api = "http://5.189.180.8:8010/header/multiple"
export const savebuttonasync = createAsyncThunk("State/savebuttonasync",async (_,{getState})=>{
    const { headers, details } = getState().State;
    try {
        const response = await axios.post(api,{
            header_table:headers,
            detail_table:details,
    })

    console.log(response.data);
    toast.success("succesfully saved")
    return response.data
} catch (error) {
    if (!error.response) {
         console.log(error,"=====!error");
    }
    toast.error("vr_no is already exist or missing details")
    console.log(error);
    return error
}
})
const initialState = {
   headers:{
    vr_no:0, 
    vr_date: "",
    ac_name: '',
    ac_amt: 0,
    status: 'A',
   },
   details:[],
   detailinput:{
    vr_no:0, 
    sr_no: 0, 
    item_code: '',
    item_name: '',
    description: '',
    qty: 0,
    rate: 0,
   }
}

const StateSlice = createSlice({
    name:"State",
    initialState,
    reducers:{
        handledetailinput:(state,action)=>{
             state.detailinput={
                ...state.detailinput,
                vr_no:state.headers.vr_no,
                ...action.payload,
             }
        },
        handleinputheader:(state,action)=>{
            const currentDate = new Date();
            state.headers={
                ...state.headers,
                vr_date:`${currentDate.getFullYear()}-${String(currentDate.getDate()).padStart(2, '0')}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`,
                ...action.payload
               }
          },
          handleaddbutton:(state,action)=>{
             state.details = ([
                 ...state.details,
                {
              ...state.detailinput,
              rate:parseFloat(action.payload.rate),
              qty: parseFloat(action.payload.qty)
              
           } ])
             const amount = state.details.reduce((acc,item)=>acc + item.rate*item.qty,0)
             state.headers={
              ...state.headers,
              ac_amt:amount
             }
          },
          handledeletebutton:(state,action)=>{
            const deleted = state.details.filter((item) => item.sr_no !== action.payload)
            state.details = deleted
          },
          handlenewbutton:(state,action)=>{
           state.headers = {
              vr_no:0, 
              vr_date: "",
              ac_name: '',
              ac_amt: 0,
              status: 'A',
             }
             state.details = []
             state.detailinput={
              vr_no:0, 
              sr_no: 0, 
              item_code: '',
              item_name: '',
              description: '',
              qty: 0,
              rate: 0,
             }
          }
        },
})
export const { handledetailinput,handleinputheader,handleaddbutton,handledeletebutton,handlenewbutton } = StateSlice.actions;
export default StateSlice.reducer