import "./App.css";
import { Background } from "./Component/Background";
import GlassmorphicNavbar from "./Component/Navbar";

function App() {
  return (
    <>
      <body className="bg-black text-white min-h-screen">
        <div className="p-9">
          <p className="text-5xl absolute top-9 left-9">Ajit.</p>
          <GlassmorphicNavbar />
        </div>

        <div>
        <img src="Photos\picture.png" alt="My Profile Picture"  className="mix-blend-lighten w-192 md:w-384 lg:w-170 absolute left-230 bottom-8"/>
        </div>


        <Background />
      </body>
    </>
  );
}

export default App;
