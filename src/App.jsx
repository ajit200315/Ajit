import "./App.css";
import { Background } from "./Component/Background";
import GlassmorphicNavbar from "./Component/Navbar";
import { ContainerTextFlip } from "./Component/HomePageTextAnimation";

function App() {
  return (
    <>
      <body className="bg-black text-white min-h-screen overflow-x-hidden">
        {/* Header Section */}
        <div className="p-4 sm:p-6 md:pt-9 relative z-10">
          <p className="text-3xl sm:text-4xl md:text-5xl absolute top-4 left-4 sm:top-6 sm:left-6 md:top-9 md:left-9 z-20">
            Ajit.
          </p>
          <GlassmorphicNavbar />
        </div>

        {/* Main Content Section */}
        <div className="relative min-h-[80vh] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:pl-27">
          
          {/* Text Content - Mobile First, then side-by-side on larger screens */}

          <div className="w-full lg:w-1/2 z-10 order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="text-center lg:text-left space-y-4 md:space-y-6">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                Hi There!
              </h1>

              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                I'm{" "}
                <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
                  Ajit Chauhan
                </span>
              </p>
              
              <div className="mt-6 md:mt-10">
                <ContainerTextFlip
                  words={["A Software Dev", "A CS Student", "A Chess Player"]}
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center lg:justify-end">
            <img
              src="Photos/picture.png"
              alt="My Profile Picture"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl object-contain mix-blend-lighten"
            />
          </div>
        </div>

        <Background />
      </body>
    </>
  );
}

export default App;