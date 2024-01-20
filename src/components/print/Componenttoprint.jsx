import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import "./print.css"

const Componenttoprint = forwardRef((props, ref) => {
    const {headers,details} =useSelector((state)=>state.State)
    const total = details.reduce((acc, item) => acc + item.qty * item.rate, 0);
  return (
    <div ref={ref} className='w-full h-screen p-20 flex-col border-4 border-black'>
      <h1 className='w-full flex justify-center items-center text-xl h-[50px]'>Purchase Voucher</h1>
      <div className='w-full h-[50px] flex items-center justify-between'>
        <h4>vr_no :- {headers.vr_no}</h4>
        <h4>vr_date :- {headers.vr_date}</h4>
        <h4>Status : {headers.status}</h4>
      </div>
      <div className='w-full h-[50px] flex items-center justify-between'>
        <h4>AC Name : {headers.ac_name}</h4>
        <h4>AC amt : {headers.ac_amt}</h4>
      </div>
      <div>
      <table>
          
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
          <tbody>
            {
            details.map((item, index) => (
              <tr key={index}>
                <td className='flex justify-evenly'>{item.sr_no}</td>
                <td>{item.item_code}</td>
                <td>{item.item_name}</td>
                <td>{item.qty.toFixed(2)}</td>
                <td>{item.rate.toFixed(2)}</td>
                <td>{(item.qty * item.rate).toFixed(2)}</td>
              </tr>
            ))
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
    </div>
  );
});

export default Componenttoprint;
