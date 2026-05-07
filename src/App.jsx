import './App.css'
import { BrowserRouter } from 'react-router-dom';
import CommanRoutes from './Routes/CommanRoutes';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster />

      <BrowserRouter>
        <CommanRoutes />
      </BrowserRouter>
    </>
  )
}

export default App