import logo from "./logo.svg";
import "./App.css";
import SideMenu from "./components/SideMenu";
import Accordian1 from "./components/Accordian1";
import Accordian2 from "./components/Accordian2";
import Accordian3 from "./components/Accordian3";
import { useState } from "react";


function App() {
  const [menu, togglemenu] = useState(false);
  const [box1, togglebox1] = useState(false);
  const [box2, togglebox2] = useState(false);
  const [box3, togglebox3] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // ----------------------------------------------------------------
  return (
    <div className=" phone:ml-1 ml-16">


      {/*---------------------------- HEADER---------------------------------*/}
      
      <div className="flex ">
        <img
          className="w-56 h-20 p-5 phone:w-40 phone:h-16 mt-4 "
          src="https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png"
        />
        <div className="lg:hidden  ml-4  mt-8 hover:cursor-pointer">
          <img src="/images/hambuger.png" onClick={() => togglemenu(!menu)} />
        </div>

        {/* ---------SIDEBAR--------- */}
        {menu && (
          <div className="absolute top-0 right-0 z-50">
            <SideMenu />
          </div>
        )}

        <div className=" rounded-lg flex justify-between ml-72 w-max items-center text-md phone:hidden">
          <p className="ml-2 hover:cursor-pointer hover:text-blue-700 hover:font-bold">
            Home
          </p>
          <p className="ml-20 hover:cursor-pointer hover:text-blue-700 hover:font-bold">
            Flashcard
          </p>
          <p className="ml-20 hover:cursor-pointer hover:text-blue-700 hover:font-bold">
            Contact
          </p>
          <p className="ml-20 hover:cursor-pointer hover:text-blue-700 hover:font-bold">
            FAQ
          </p>

          <div className="ml-20 mr-2 hover:cursor-pointer bg-gradient-to-b from-blue-900 to-blue-500 text-white p-4 rounded-3xl w-28 h-10 flex items-center justify-center">
            Login
          </div>
        </div>
      </div>


      {/*--------------------- NAV LINKS ---------------------------------------------------*/}


      <div className=" phone:ml-3 mt-11 ml-4 flex">
        <img
          className="  phone:w-4 phone:h-4 h-5 w-5 "
          src="/images/home.png"
        />
        <img className="ml-3 h-3 w-3 mt-[5px] " src="/images/leftarrow.png" />{" "}
        <p className="ml-3 phone:text-sm hover:cursor-pointer  hover:text-blue-700">
          Flashcard
        </p>
        <img className="ml-3   h-3 w-3 mt-[5px] " src="/images/leftarrow.png" />
        <p className="ml-3 phone:text-sm hover:cursor-pointer  hover:text-blue-700">
          Mathematics
        </p>
        <img className="ml-3 h-3 w-3 mt-[5px]" src="/images/leftarrow.png" />
        <p className="ml-3 phone:text-sm hover:cursor-pointer  hover:text-blue-700 ">
          {" "}
          Relations and Functions
        </p>
      </div>

      {/*-------------------------------SIDE HEADINGS -----------------------------*/}

      <div className="ml-4 ">
        <p className="mt-14 text-blue-700  font-bold text-2xl phone:text-base ">
          Relations and Functions (Mathematics)
        </p>
      </div>

      {/* --------------------SECTIONS--------- */}
      <div className=" phone:ml-2 ml-60 mt-14">
        <div className="flex text-xl font-bold phone:text-sm ">
          <p className="mx-10 hover:text-blue-700 hover:cursor-pointer hover:underline phone:mx-4 text-blue-700 underline">
            Study{" "}
          </p>
          <p className="mx-10 hover:text-blue-700 hover:cursor-pointer hover:underline phone:mx-4 text-gray-500">
            Quiz
          </p>
          <p className="mx-10 hover:text-blue-700 hover:cursor-pointer hover:underline phone:mx-4 text-gray-500">
            Test
          </p>
          <p className="mx-10 hover:text-blue-700 hover:cursor-pointer hover:underline phone:mx-4 text-gray-500">
            Game
          </p>
          <p className="mx-10 hover:text-blue-700 hover:cursor-pointer hover:underline phone:mx-4 text-gray-500">
            Others
          </p>
        </div>

        {/*------------------------------- QUESTION CARD------------------------- */}

        <div className="  bg-gradient-to-b from-blue-900 to-blue-500 text-white w-[712px] phone:w-[380px]   h-96 mt-8 rounded-3xl">
          <div className="flex">
            <img
              src="/images/light-bulb.png"
              className=" hover:cursor-pointer w-8 h-8  mt-10 ml-5"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            {isHovered && (
              <p className="absolute text-black bg-white   p-2 rounded shadow-md mt-20 text-xs  w-max ml-10">
                Try calculating  using BODMAS rule !!
              </p>
            )}
            <img
              src="/images/volume2.png"
              className=" hover:cursor-pointer w-7 h-7 phone:ml-64 ml-[600px]  mt-12"
            />
          </div>
          <div className="mt-28 ml-48 text-4xl phone:text-2xl phone:ml-24">
            <p>9 + 6 + 7x - 2x - 3</p>
          </div>
        </div>

          {/* ------------ICONS-------------------- */}

        <div className="flex mt-10   ">
          <img
            className="ml-5 w-7 h-7 hover:cursor-pointer  phone:w-5 phone:h-5 mt-3 "
            src="/images/redo.png"
          />
          <div className=" phone:ml-14 ml-52 rounded-full bg-gradient-to-b from-blue-900 to-blue-500  w-10 flex items-center justify-center  h-10">
            <img
              className=" hover:cursor-pointer  phone:w-5 phone:h-5 "
              src="/images/left.png"
            />
          </div>
          <p className="ml-5 font-bold text-xl phone:mt-1 mt-2 ">0/10</p>
          <div className="ml-5 rounded-full bg-gradient-to-b from-blue-900 to-blue-500 w-10 flex items-center justify-center  h-10">
            <img
              className="hover:cursor-pointer  phone:w-5 phone:h-5 "
              src="/images/next.png"
            />
          </div>
          <img
            className="ml-56 mt-3 hover:cursor-pointer  w-6 h-6 phone:ml-16 phone:w-4 phone:h-4 "
            src="/images/expand.png"
          />
        </div>
      </div>

      {/* ---------------------------FOOTER--------------------------- */}

      <div className="flex mt-20 ml-5 ">
        <div className="flex">
          <div className="rounded-full shadow-2xl flex items-center justify-center w-20 h-20 phone:w-10 phone:h-10 phone:mt-3 ">
            <img
              className="w-10 h-8 phone:w-5 phone:h-5 "
              src="/images/logo-round.png"
            />
          </div>
          <div className="ml-3 mt-3 ">
            <p className="text-sm phone:text-xs ">Published by</p>
            <p className="text-blue-600 text-2xl font-bold phone:text-xl">
              Hyggex
            </p>
          </div>
        </div>

        <div>
          <div className="flex phone:absolute  ml-[680px] phone:ml-20 mt-6">
            <div className="hover:cursor-pointer  bg-blue-700 rounded-full flex items-center justify-center w-10 h-10 phone:w-5 phone:h-5 mt-1">
              <img src="/images/plus.png" />
            </div>
            <p className="text-xl ml-2 phone:mt-1 mt-3 text-blue-600 font-semibold phone:text-sm">
              Create Flashcard
            </p>
          </div>
        </div>
      </div>

      {/* --------------------------------------FAQ SECTION-------------------- */}


      <div className="mt-20">
        <p className="text-4xl text-blue-700 font-bold ml-10 ">FAQ</p>

        <div className="ml-10 mt-10 mb-20">
          <div className="flex border-2 border-blue-500 w-[800px] items-center rounded-xl mt-5 phone:w-44">
            <p className="p-5">
              Can education flashcards be used for all age groups?
            </p>
            <img
              className="ml-auto mr-10 phone:mr-1 h-5 w-5 p-1 hover:cursor-pointer "
              onClick={() => togglebox1(!box1)}
              src="/images/downarrow.png"
            />
          </div>

          {box1 && (
            <div className="">
              <Accordian1 />
            </div>
          )}

          <div className="flex border-2 border-blue-500 w-[800px] items-center rounded-xl mt-5 phone:w-44">
            <p className="p-5">
              Can education flashcards be used for all age groups?
            </p>
            <img
              className="ml-auto p-1 mr-10 phone:mr-1 h-5 w-5 hover:cursor-pointer "
              onClick={() => togglebox2(!box2)}
              src="/images/downarrow.png"
            />
          </div>

          {box2 && (
            <div className="">
              <Accordian2 />
            </div>
          )}

          <div className="flex border-2 border-blue-500 w-[800px] items-center rounded-xl mt-5  phone:w-44">
            <p className="p-5">
              Can education flashcards be used for all age groups?
            </p>
            <img
              className="ml-auto mr-10 phone:mr-1  h-5 w-5 p-1 hover:cursor-pointer "
              onClick={() => togglebox3(!box3)}
              src="/images/downarrow.png"
            />
          </div>
          {box3 && (
            <div className="">
              <Accordian3 />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
