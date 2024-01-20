import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleinputheader } from '../../reduxtoolkit/Stateredux'

const Header = ({setHeader,header}) => {
   const dispatch = useDispatch()
   const {headers} = useSelector((state)=>state.State)
   console.log(headers,"==hhh");
   const handleinputchange = (e)=>{
      const target = {
         [e.target.name]:e.target.value
      }
      dispatch(handleinputheader(target))
   }
  return (
    <div className='w-full h-[200px] bg-slate-800 text-white'>
      <div className='flex h-[100px] items-center justify-evenly'>
      <div className='flex gap-2'>
          <label htmlFor="">Vr NO :- </label>
          <input className='bg-slate-200 w-[50px]  outline-none text-slate-900 rounded-sm pl-2' type="text" name='vr_no' value={headers.vr_no} onChange={handleinputchange}/> 
       </div>  
       <div className='flex gap-2'>
          <label htmlFor="">Vr Date :- </label>
          <input className='bg-slate-200 w-[100px] outline-none text-slate-900 rounded-sm pl-2' type="text" name='vr_date' placeholder={headers.vr_date}/> 
       </div>
       <div className='flex items-center gap-2'>
          <label htmlFor="">Status : </label>
          <h2>A</h2> 
       </div>   
      </div>   
      <div className=' h-[100px] flex items-center justify-evenly'>
       <div className='flex gap-2'>
          <label htmlFor="">AC Name  </label>
          <input className='bg-slate-200 w-[100px] xl:w-[350px] outline-none text-slate-900 rounded-sm pl-2' type="text" name='ac_name' value={headers.ac_name} onChange={handleinputchange}/> 
       </div>  
       <div className='flex gap-2'>
          <label htmlFor="">AC Amt </label>
          <input className='bg-slate-200 w-[90px] outline-none text-slate-900 rounded-sm pl-2' type="text" name='ac_amt' value={headers.ac_amt} onChange={handleinputchange}/> 
       </div>
    </div>
</div>
  )
}

export default Header
