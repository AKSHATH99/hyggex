import logo from "./logo.svg";
import "./App.css";
// import myImage from "./28.png"
function App() {
  return (
    <div className=" phone:ml-0 ml-16">
      {/* HEADER */}
      <div className="flex ">
        <img
          className="w-56 h-20 p-5 "
          src="https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png"
        />
        <div className=" rounded-lg flex justify-between ml-96 w-max items-center text-xl">
          <p className="ml-2">Home</p>
          <p className="ml-20">Flashcard</p>
          <p className="ml-20">Contact</p>
          <p className="ml-20">FAQ</p>

          <div className="ml-20 mr-2 bg-gradient-to-b from-blue-900 to-blue-500 text-white p-4 rounded-2xl w-28 h-10 flex items-center justify-center">
            Login
          </div>
        </div>
      </div>

      {/* NAV LINKS */}
      <div className=" phone:ml-3 mt-11 ml-4 flex">
        <img className="  phone:w-4 phone:h-4 h-5 w-5 " src="/images/home.png" /> 
        <img className="ml-3 h-3 w-3 mt-[5px] " src="/images/leftarrow.png" />{" "}
        <p  className="ml-3 phone:text-sm">Flashcard</p> 
        <img className="ml-3 h-3 w-3 mt-[5px]" src="/images/leftarrow.png" /> 
        <p className="ml-3 phone:text-sm">Mathematics</p>
        <img className="ml-3 h-3 w-3 mt-[5px]" src="/images/leftarrow.png" />
        <p className="ml-3 phone:text-sm  "> Relations and Functions</p>
      </div>

      {/* HEADING  */}
      <div className="ml-4 ">
        <p className="mt-14 text-blue-700  font-bold text-2xl phone:text-base ">
          RELATIONS AND FUNCTIONS (MATHEMATICS)
        </p>
      </div>
      <div className="ml-72 mt-14">
        <div className="flex text-xl font-bold ">
          <p className="mx-10 text-blue-700 underline">Study </p>
          <p className="mx-10 text-gray-500">Quiz</p>
          <p className="mx-10 text-gray-500">Test</p>
          <p className="mx-10 text-gray-500">Game</p>
          <p className="mx-10 text-gray-500">Others</p>
        </div>

        {/* QUESTION CARD */}
        <div className="bg-gradient-to-b from-blue-900 to-blue-500 text-white w-[712px] h-96 mt-8 rounded-3xl">
          <div className="flex">
            <img src="/images/volume2.png" className="w-5 h-5  mt-10 ml-5" />
            <img
              src="/images/volume2.png"
              className="w-5 h-5 ml-[600px] mt-10"
            />
          </div>
          <div className="mt-36 ml-48 text-4xl">
            <p>9 + 6 + 7x - 2x - 3</p>
          </div>
        </div>
        <div className="flex mt-10   ">
          <img className="ml-5" src="/images/redo.png" />
          <img className="ml-56" src="/images/arrow.png" />
          <p className="ml-10">0/10</p>
          <img className="ml-10" src="/images/leftarrow.png" />
          <img className="ml-56" src="/images/fullscreen.png" />
        </div>
      </div>

      {/* --------------- */}
      <div className="flex mt-20 ml-5">
        <div className="flex">
          <div className="rounded-full shadow-2xl flex items-center justify-center w-20 h-20  ">
            <img className="w-10 h-8 " src="/images/logo-round.png" />
          </div>
          <div className="ml-3 mt-3">
            <p className="text-sm">Published by</p>
            <p className="text-blue-600 text-2xl font-bold">Hyggex</p>
          </div>
        </div>

        <div>
          <div className="flex ml-[850px]">
            <div className="bg-blue-700 rounded-full flex items-center justify-center w-10 h-10 ">
              <img src="/images/plus.png" />
            </div>
            <p className="text-xl ml-2 mt-1 text-blue-600 font-semibold">
              Create Flashcard
            </p>
          </div>
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-20">
        <p className="text-4xl text-blue-700 font-bold ml-10">FAQ</p>

        <div className="ml-10 mt-10">
          <div className="flex border-2 border-blue-500 w-[800px] items-center rounded-xl mt-5">
            {" "}
            <p className="   p-5 ">
              Can education flashcards be used for all age groups?
            </p>
            <img className="ml-80 h-5  w-5" src="/images/downarrow.png" />
          </div>
          <div className="flex border-2 border-blue-500 w-[800px] items-center rounded-xl mt-5">
            {" "}
            <p className="   p-5 ">
              Can education flashcards be used for all age groups?
            </p>
            <img className="ml-80 h-5  w-5" src="/images/downarrow.png" />
          </div>
          <div className="flex border-2 border-blue-500 w-[800px] items-center rounded-xl mt-5 mb-20">
            {" "}
            <p className="   p-5 ">
              Can education flashcards be used for all age groups?
            </p>
            <img className="ml-80 h-5  w-5" src="/images/downarrow.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
