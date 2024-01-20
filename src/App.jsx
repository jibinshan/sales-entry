import './App.css'
import Details from './components/Details/Details'
import Header from './components/header/Header'
import { useDispatch } from 'react-redux';
import { savebuttonasync } from './reduxtoolkit/Stateredux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // const [filtereddata , setFiltereddata] = useState([]);
  const dispatch = useDispatch()

  // const [header , setHeader] = useState({
  //   // vr_no: 0,
  //   // vr_date: "2024-17-01",
  //   // ac_name: "",
  //   // ac_amt: 0,
  //   // status: "A"    
  //   vr_no:0, 
  //   vr_date: "",
  //   ac_name: '',
  //   ac_amt: 0,
  //   status: 'A',
  // })
  //  useEffect(() => {
  //   const currentDate = new Date();
  //   const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getDate()).padStart(2, '0')}-${String(currentDate.getMonth() + 1).padStart(2, '0')}`;

  //   setHeader((prevHeader) => ({
  //     ...prevHeader,
  //     vr_date: formattedDate,
  //   }));
  // }, []); 
  const savebutton = async ()=>{
    try {
      await dispatch(savebuttonasync())
      // const response = await axios.post("http://5.189.180.8:8010/header/multiple",{
      //     header_table:header,
      //     detail_table:filtereddata,
      // })
      // console.log(response.data);
    } catch (error) {
      console.log(error,"===error");
    }
    
  }

  return (
    <div className='bg-slate-200 h-screen'>
       <Header/>
       <Details savebutton={savebutton}/>
       <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
       />
    </div>
  )
}

export default App
