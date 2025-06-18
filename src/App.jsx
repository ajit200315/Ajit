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

        <div className="flex justify-end px-4">
          <img
            src="Photos/picture.png"
            alt="My Profile Picture"
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl object-contain mix-blend-lighten"
          />

          
            <h1 class="absolute right-345 top-55 text-2xl sm:text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              Hi There!
            </h1>

         
        </div>

        <Background />
      </body>
    </>
  );
}

export default App;
