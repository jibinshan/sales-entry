import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { handlenewbutton } from '../../reduxtoolkit/Stateredux'
import { useReactToPrint } from 'react-to-print'
import Componenttoprint from '../print/Componenttoprint'

const Buttons = ({insertdata,savebutton}) => {
  const dispatch = useDispatch()
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div className='bg-slate-800 w-full h-[100px] flex items-center justify-center gap-12 text-white'>
      <div className='hidden'>
         <Componenttoprint ref={componentRef}/>
      </div>
      <button className='bg-slate-300 p-2 text-black rounded-lg hover:bg-slate-500 hover:text-white w-[75px]' onClick={()=>dispatch(handlenewbutton())}>NEW</button>
      <button className='bg-slate-300 p-2 text-black rounded-lg hover:bg-slate-500 hover:text-white w-[75px]' onClick={insertdata}>INSERT</button>
      <button className='bg-slate-300 p-2 text-black rounded-lg hover:bg-slate-500 hover:text-white w-[75px]' onClick={savebutton}>SAVE</button>
      <button className='bg-slate-300 p-2 text-black rounded-lg hover:bg-slate-500 hover:text-white w-[75px]' onClick={handlePrint}>PRINT</button>
     
    </div>
  )
}

export default Buttons
