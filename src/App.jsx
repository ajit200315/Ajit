import './App.css'
import { Background } from './Component/Background'
import GlassmorphicNavbar from "./Component/Navbar";


function App() {
 

  return (
    <>
    <body className="bg-black text-white min-h-screen">

      <div className='p-9'>
        <p className='text-5xl absolute top-9 left-9'>Ajit.</p>
      <GlassmorphicNavbar />
      </div>

      <Background/>


      </body>
    </>
  )
}

export default App
