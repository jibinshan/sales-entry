import React, { useState } from 'react'
import "./Details.css"
import Buttons from '../Buttons/Buttons'
import { useDispatch, useSelector } from 'react-redux'
import { handleaddbutton, handledeletebutton, handledetailinput } from '../../reduxtoolkit/Stateredux'


const Details = ({savebutton}) => {
    // const [data,setData] = useState([])
    const dispatch = useDispatch()
    const {detailinput,details} = useSelector((state)=>state.State)
    const [newdata,setNewdata] = useState(true)
    const [insertdata,setInsertdata] = useState(false)
    // const [itemcodeinput, setItemcodeinput] = useState({
    //     vr_no:0, 
    //     sr_no: 0, 
    //     item_code: '',
    //     item_name: '',
    //     description: '',
    //     qty: 0,
    //     rate: 0,
    //   });
      const total = details.reduce((acc, item) => acc + item.qty * item.rate, 0);
      const handleitemcode = (e) =>{
          //  setItemcodeinput((prev)=>({
          //    ...prev,
          //    vr_no:headers.vr_no,
          //    [e.target.name]:e.target.value
          //  }))
           dispatch(handledetailinput({
            [e.target.name]:e.target.value 
           }))
      }
      const handleadd = ()=>{
          setInsertdata(false)
          setNewdata(false)
          dispatch(handleaddbutton(detailinput))
      }
      const handledeleteitem = (srno) =>{
        dispatch(handledeletebutton(srno))
      }
      const insertdatas = ()=>{
       setInsertdata(true)
       setNewdata(true)
      }
    //   useEffect(()=>{
    //     fetchdata()
    //   },[])
  return (
    <div className='w-full bg-slate-200'>
        <Buttons insertdata ={insertdatas} savebutton={savebutton}/>
      <table>
          {newdata ?
          <thead>
          <tr>
            <th>Sr No</th>
            <th>Item Code</th>
            <th>Item Name</th>
            <th>Qty</th>
            <th>Rate</th>
            <th>Add New</th>
          </tr>
        </thead>
          :
          <thead>
            <tr>
              <th>Sr No</th>
              <th>Item Code</th>
              <th>Item Name</th>
              <th>Qty</th>
              <th>Rate</th>
              <th>Amount</th>
            </tr>
          </thead>
          }
          <tbody>
            {details.length > 0 ? 
            details.map((item, index) => (
              <tr key={index}>
                <td className='flex justify-evenly'>{item.sr_no} <button className='bg-red-600 p-[5px] rounded-lg text-white hover:bg-red-800' onClick={()=>handledeleteitem(item.sr_no)}>delete</button></td>
                <td>{item.item_code}</td>
                <td>{item.item_name}</td>
                <td>{item.qty.toFixed(2)}</td>
                <td>{item.rate.toFixed(2)}</td>
                <td>{(item.qty * item.rate).toFixed(2)}</td>
              </tr>
            ))
        :
        <tr>
        <td><input type="text" className='rounded-sm' onChange={handleitemcode} name='sr_no' placeholder='Enter sr_no'/></td>
        <td><input type="text" className='rounded-sm' onChange={handleitemcode} name='item_code' placeholder='Enter item code'/></td>
        <td><input type="text" className='rounded-sm' onChange={handleitemcode} name='item_name' placeholder='Enter item name'/></td>
        <td><input type="text" className='rounded-sm' onChange={handleitemcode} name='qty' placeholder='Enter Quantity'/></td>
        <td><input type="text" className='rounded-sm' onChange={handleitemcode} name='rate' placeholder='Enter rate'/></td>
        <td><button className="bg-blue-500 p-[5px] rounded-lg hover:bg-blue-700 text-white" onClick={handleadd}>Add</button></td>
      </tr>
        }
        {
            insertdata && 
            <tr>
            <td><input type="text" className='rounded-sm' onChange={handleitemcode} name='sr_no' placeholder='Enter sr_no'/></td>
            <td><input type="text" className='rounded-sm' onChange={handleitemcode} name='item_code' placeholder='Enter item code'/></td>
            <td><input type="text" className='rounded-sm' onChange={handleitemcode} name='item_name' placeholder='Enter item name'/></td>
            <td><input type="text" className='rounded-sm' onChange={handleitemcode} name='qty' placeholder='Enter Quantity'/></td>
            <td><input type="text" className='rounded-sm' onChange={handleitemcode} name='rate' placeholder='Enter rate'/></td>
            <td><button className="bg-blue-500 p-[5px] rounded-lg hover:bg-blue-700 text-white" onClick={handleadd}>Add</button></td>
          </tr>
        }
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5" className='text-end pr-[20px]'>Total</td>
              <td>{total.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
    </div>
  )
}

export default Details
