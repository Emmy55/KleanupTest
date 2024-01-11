// import React from 'react'
import Logo from "./Media/Kleanup.png";
import Profile from "./Media/profile.png";
import Notification from "./Media/notification.png";
import Home from "./Media/home.png";
import Cleaning from "./Media/cleaning.png";
import User from "./Media/user.png";
import Schedule from "./Media/schedule.png";
import Financial from "./Media/financial.png";
import Customer from "./Media/customer.png";
import Analytics from "./Media/analytics.png";
import Account from "./Media/account.png";
import Logout from "./Media/logout.png";
import { Link } from "react-router-dom";
import Planselector from "./Planselector";
import Calender from "./Calender";
// import  from './Media/'
// import  from './Media/'
// import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import {
  faChevronDown,
  // faBell,
  faXmark,
  faMagnifyingGlass,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DashboardTemp({
  showAdditionalDiv,
  showAdditionalDiv1,
  showAdditionalDiv2,
  showAdditionalDiv3,
  showAdditionalDiv4,
  showAdditionalDiv5,
  showAdditionalDiv6,
  showAdditionalDiv7,
  showAdditionalDiv8,
  showAdditionalDiv9,
  showAdditionalDiv10,
  showAdditionalDiv11,
  showAdditionalDiv12,
  showAdditionalDiv13,
  showAdditionalDiv14,
  showAdditionalDiv15,
  WelcomeText,
  NavText,
  AltNav,
  InitNav,
  Color,
  tempColor,
  Color1,
  tempColor1,
  Color2,
  tempColor2,
  Color3,
  tempColor3,
  Color4,
  tempColor4,
  Color5,
  tempColor5,
  Color6,
  tempColor6,
  Color7,
  tempColor7,
  ValueInText,
  ValueInText1,
  ValueInText2,
  ValueInText3,
  ValueInText4,
  ValueInText5,
  ValueInText6,
  ValueInText7,
  COLOR,
  opacityValue
}) {
  const myCustomColor = "#FAFAFA";
  // const myCustomColor1 = "red";
  // const myCustomColor2 = "lightblue";
  const myCustomColor2 = "#019B23";
  const myCustomColor4 = "#3DA5EC";

  const [showScrollbar, setShowScrollbar] = useState(true);

  useEffect(() => {
    // Set a timeout to hide the scrollbar after 5 seconds (adjust the time as needed)
    const timeoutId = setTimeout(() => {
      setShowScrollbar(false);
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timeout when the component unmounts or if needed in other cases
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      <div className={`overflow-x-hidden ${COLOR} opacity-${opacityValue}`}>
        <div className="fixed ">
          <div
            className="w-80 h-screen-3 pb-20 absolute bg-white "
            // style={{ backgroundColor: myCustomColor1 }}
          >
            <img
              className="h-8 w-28 ml-14 mt-12 relative -top-5 object-contain"
              src={Logo}
            />

            <div
              className={`ml-10 mt-4 overflow-y-scroll overflow-x-hidden ${
                showScrollbar ? "" : "overflow-hidden"
              }`}
            >
              <div className="text-gray-500">
              <Link to="/WelcomeDashboard">
              <img src={Home} className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125" 
              style={{ filter: `saturate(1.25) brightness(${ValueInText})` }} />
              

                <a
                  href=""
                  className="p-2 pl-12 px-48 py-3 whitespace-nowrap rounded-l-xl"
                  style={{ backgroundColor: Color, color: tempColor }}
                >
                  Home
                </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
              <Link to="/CleaningRequest">
                <img
                  src={Cleaning}
                  className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                  style={{ filter: `saturate(1.25) brightness(${ValueInText1})` }}
                />
                <a
                  href=""
                  className="p-2 pl-11 px-20  py-3 whitespace-nowrap rounded-l-xl"
                  style={{ backgroundColor: Color1, color: tempColor1 }}

                >
                  Cleaning Requests{" "}
                  <span className="relative left-16 px-1 text-xs bg-red-600 rounded-xl text-white">
                    5
                  </span>
                </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
              <Link to="/UserManagement">
                <img src={User} className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125" 
                  style={{ filter: `saturate(1.25) brightness(${ValueInText2})` }}
                />
                <a
                  href=""
                  className="p-2 pl-10 px-28 py-3 whitespace-nowrap rounded-l-xl"
                  style={{ backgroundColor: Color2, color: tempColor2 }}
                >
                  User management
                </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
              <Link to="/ScheduleOverview">
                <img
                  src={Schedule}
                  className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                  style={{ filter: `saturate(1.25) brightness(${ValueInText3})` }}
                />
                <a
                  href=""
                  className="p-2 pl-11 px-40 py-3 whitespace-nowrap rounded-l-xl"
                  style={{ backgroundColor: Color3, color: tempColor3 }}
                >
                  Scheduling
                </a>
                </Link>
              </div>
              <div className="text-gray-500 pt-3">
                <img
                  src={Financial}
                  className="w-1/12 h- relative top-7 left-3 filter brightness-75 saturate-125"
                  style={{ filter: `saturate(1.25) brightness(${ValueInText4})` }}
                />
                <a
                  href=""
                  className="p-2 pl-11 px-20 py-3 whitespace-nowrap rounded-l-xl"
                  style={{ backgroundColor: Color4, color: tempColor4 }}
                >
                  Financial management
                </a>
              </div>
              <div className="text-gray-500 pt-3">
                <img
                  src={Customer}
                  className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                  style={{ filter: `saturate(1.25) brightness(${ValueInText5})` }}
                />
                <a
                  href=""
                  className="p-2 pl-11 px-28 py-3 whitespace-nowrap rounded-l-xl"
                  style={{ backgroundColor: Color5, color: tempColor5 }}
                >
                  Customer support
                </a>
              </div>
              <div className="text-gray-500 pt-3">
                <img
                  src={Analytics}
                  className="w-1/12 h- relative top-6 left-3 filter brightness-75 saturate-125"
                  style={{ filter: `saturate(1.25) brightness(${ValueInText6})` }}
                />
                <a
                  href=""
                  className="p-2 pl-9 px-24 py-3 whitespace-nowrap rounded-l-xl"
                  style={{ backgroundColor: Color6, color: tempColor6 }}
                >
                  Analytics and insights
                </a>
              </div>
              <div className="text-gray-500 pt-3">
                <img
                  src={Account}
                  className="w-1/12 h- relative top-6 left-4 filter brightness-75 saturate-125"
                  style={{ filter: `saturate(1.25) brightness(${ValueInText7})` }}
                />
                <a
                  href=""
                  className="p-2 pl-12 px-20 py-3 whitespace-nowrap rounded-l-xl"
                  style={{ backgroundColor: Color7, color: tempColor7 }}
                >
                  Account management
                </a>
              </div>

              <div className="relative -pb-10 top-10 w-64 left-3 ">
                <img
                  src={Logout}
                  className="w-1/12 h- relative z-10 left-12 filter brightness-75 saturate-125"
                  style={{ top: "228px" }}
                />
                <a
                  href=""
                  className="p-2 pl-20 text-center font-semibold relative top-52 px-20 py-3 whitespace-nowrap rounded-xl"
                  style={{ backgroundColor: myCustomColor }}
                >
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
        <nav
          className="ml-1/3 z-50 bg-white left-80 fixed h-16 p-7 pt-3  w-screen"
          // style={{ backgroundColor: myCustomColor1 }}
        >
          
          {InitNav && (
            <div className="relative -top-1 right-4 ml-5">
            <p>{WelcomeText}</p>
            <h1 className="font-semibold text-lg">{NavText}</h1>
          </div>
          )}
          {AltNav && (
            <div className="relative -top-1 right-4 ml-5">
            <p>{WelcomeText}</p>
            <h1 className="font-semibold text-lg mt-6 -top-3 relative">{NavText}</h1>
          </div>
          )}
          <div className="flex relative ml-10 left-1/3 w-20 -top-14 mt-2 ">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="-mr-10 relative left-12 text-sm mt-3 z-10 text-gray-500"
            />
            <input
              placeholder="Search"
              type="search"
              className=" px-16 h-9 mr-10 pl-8 relative left-16 rounded-md focus:outline-none "
              style={{ backgroundColor: myCustomColor }}
            />
            <div className="flex w-96 space-x-2 justify-center items-center relative left-24 -top-2 ">
              <img src={Notification} className="h-5 w-1/2" />
              <sup className="bg-red-600 right-2 -top-3 text-white relative py-2 px-1 rounded-2xl">
                1
              </sup>
              <img src={Profile} className="w-96 h-3/4 relative left-" />
              <FontAwesomeIcon
                icon={faChevronDown}
                className="text-sm relative left-2 cursor-pointer"
              />
            </div>
          </div>
        </nav>
        {showAdditionalDiv && (
          <div
            className="w- h-screen-2  z-30 relative left-80"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="relative top-24 left-6 flex space-x-4 ">
              <div className="px-14 bg-white rounded-xl py-8">
                <p className="whitespace-nowrap relative right-6 -top-2 text-xs">
                  Completed requests
                </p>
                <h1 className="text-blue-300 relative right-6 text-2xl font-semibold">
                  06
                </h1>
              </div>
              <div className="px-14 bg-white rounded-xl py-8">
              
                <p className="whitespace-nowrap relative right-6 -top-2 text-xs">
                  Pending requests
                </p>
                <h1 className="text-blue-300 relative right-6 text-2xl font-semibold">
                  08
                </h1>
                
              </div>
              <div className="px-8 bg-white rounded-xl py-8">
                <p className="whitespace-nowrap text-xs relative -top-2">
                  Upcoming scheduled cleaning
                </p>
                <h1 className="text-blue-300 text-2xl font-semibold">12</h1>
              </div>
              <div className="px-16 bg-white rounded-xl py-8">
                <p className="whitespace-nowrap relative right-9 -top-2 text-xs">
                  Total earnings
                </p>
                <h1 className="text-blue-300 relative right-9  text-2xl font-semibold">
                  $24,000
                </h1>
              </div>
            </div>
            <div className="bg-white h-screen-3 w-screen-3 left-10 pl-4 pt-9 relative top-36">
              <h1 className="font-semibold text-lg">Request history</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4"
                style={{ backgroundColor: myCustomColor }}
              >
                <p>Client Name</p>
                <p>Date of request</p>
                <p className="relative right-10">Address</p>
                <p className="relative right-4">Service type</p>
                <p>Status</p>
              </div>

              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Office cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 relative left-2 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Office cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold relative left-2">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Office cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold relative left-2">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
            </div>
          </div>
        )}
        {showAdditionalDiv1 && (
          <div
            className="w- h-screen-2   z-30 relative left-80"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm">
              <Link to="/CleaningRequest">
                <p className="cursor-pointer px-5 rounded-md py-2 relative -top-2 bg-white">
                  Completed requests
                </p>
                </Link>
                <Link to="/PendingRequest">
                <p className="cursor-pointer text-gray-400">Pending requests</p>
                </Link>
                <Link to="/UpcomingSchedule">
                <p className="cursor-pointer text-gray-400">
                  Upcoming schedule cleaning
                </p>
                </Link>
                <Link to="/RequestHistory">
                <p className="cursor-pointer text-gray-400">Request History</p>
                </Link>
              </div>
            </div>
            <div className="bg-white h-screen-3 w-screen-3 left-10 pl-4 pt-9 relative top-36">
              <h1 className="font-semibold text-lg">Completed requests</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                <p className="whitespace-nowrap relative -left-14">
                  Completed date
                </p>
                <p className="relative -left-32 whitespace-nowrap">Address</p>
                <p className="relative right-28 whitespace-nowrap">
                  Service type
                </p>
                <p className="whitespace-nowrap relative right-36">Duration</p>
                <p className="whitespace-nowrap relative right-40">
                  Payment status
                </p>
              </div>

              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-10">
                  Unpaid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-10">
                  Unpaid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-10">
                  Unpaid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-red-500 font-semibold px-2 bg-red-50 rounded-xl relative left-10">
                  Unpaid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">7AM - 3PM</p>
                <p className="text-green-400 font-semibold px-2 bg-green-50 rounded-xl relative left-10">
                  Paid
                </p>
              </div>
            </div>
          </div>
        )}
        {showAdditionalDiv2 && (
          <div
            className="w- h-screen-2   z-30 relative left-80"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm">
              <Link to="/CleaningRequest">
                <p className="cursor-pointer text-gray-400">
                  Completed requests
                </p>
                </Link>
                <p className="cursor-pointer px-5 bg-white py-2 rounded-md relative -top-2">
                  Pending requests{" "}
                  <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                    5
                  </span>
                </p>
                <Link to="/UpcomingSchedule">
                <p className="cursor-pointer text-gray-400">
                  Upcoming schedule cleaning
                </p>
                </Link>
                <Link to="/RequestHistory">
                <p className="cursor-pointer text-gray-400">Request History</p>
                </Link>
              </div>
            </div>
            <div className="bg-white h-screen-3 w-screen-3 left-10 pl-4 pt-9 relative top-36">
              <h1 className="font-semibold text-lg">Pending requests</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                <p className="whitespace-nowrap relative -left-14">
                Scheduled date
                </p>
                <p className="relative -left-32 whitespace-nowrap">Address</p>
                <p className="relative right-28 whitespace-nowrap">
                  Service type
                </p>
                <p className="whitespace-nowrap relative right-36">
                  Special instruction
                </p>
                <p className="whitespace-nowrap relative right-44">Action</p>
              </div>

              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative left-0"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/Accept
                </p>
              </div>
            </div>
          </div>
        )}
        {showAdditionalDiv3 && (
          <div
            className="w- h-screen-2   z-30 relative left-80"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 text-sm">
              
                <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                  Customer accounts
                </p>
                
                <Link to="/CleanersAccount">
                <p className="cursor-pointer px-5  text-gray-400 ">
                  Cleaners accounts{" "}
                  {/* <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                  5
                </span> */}
                </p>
                </Link>
                {/* <p className="cursor-pointer text-gray-400">
                Upcoming schedule cleaning
              </p> */}
                <p className="cursor-pointer text-white text-center bg-blue-600 px-10 py-3 relative left-1/3 font-semibold rounded-lg">
                  Manage requests
                </p>
              </div>
            </div>
            <div className="bg-white h-screen-3 w-screen-3 left-10 pl-4 pt-9 relative top-36">
              <h1 className="font-semibold text-lg">Customer accounts</h1>
              <div
                className="flex mt-9 space-x-60 relative font-semibold py-3 px-4 w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                <p className="whitespace-nowrap relative -left-20">Email</p>
                <p className="relative -left-32 whitespace-nowrap">Address</p>
                {/* <p className="relative right-28 whitespace-nowrap">
                  Service type
                </p>
                <p className="whitespace-nowrap relative right-36">
                  Special instruction
                </p> */}
                <p className="whitespace-nowrap relative right-44">Action</p>
              </div>

              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-40 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-24 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p> */}
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-32"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
            </div>
          </div>
        )}
        {showAdditionalDiv10 && (
          <div
            className="w- h-screen-2   z-30 relative left-80"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 text-sm">
              <Link to="/UserManagement">
                <p className="cursor-pointer px-5  text-gray-400 ">
                  Customer accounts{" "}
                  {/* <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                  5
                </span> */}
                </p>
                </Link>
                <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                  Cleaners account
                </p>
                {/* <p className="cursor-pointer text-gray-400">
                Upcoming schedule cleaning
              </p> */}
                <p className="cursor-pointer text-white text-center bg-blue-600 px-8 py-3 relative left-1/3 font-semibold rounded-lg">
                  Approve new cleaners
                </p>
              </div>
            </div>
            <div className="bg-white h-screen-3 w-screen-3 left-10 pl-4 pt-9 relative top-36">
              <h1 className="font-semibold text-lg">Cleaners accounts</h1>
              <div
                className="flex mt-9 space-x-40 relative font-semibold py-3 px-4 w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                <p className="whitespace-nowrap relative -left-24">Email</p>
                <p className="relative -left-28 ml-2 whitespace-nowrap">
                  Address
                </p>
                {/* <p className="relative right-28 whitespace-nowrap">
                  Service type
                </p> */}
                <p className="whitespace-nowrap relative right-44">
                  Availability(Working hours)
                </p>
                <p className="whitespace-nowrap relative right-72">Action</p>
              </div>

              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
              <div className="flex mt-1 space-x-24 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-12 whitespace-nowrap">
                  Samjam@gmail.com
                </p>
                <p className="relative right-28 whitespace-nowrap">
                  123 Maple Street...
                </p>
                {/* <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p> */}
                <p className="relative right-44 whitespace-nowrap">
                  09:00AM - 17:00PM
                </p>
                <p
                  className="text-white font-semibold px-2 rounded-md py-1 relative right-40"
                  style={{ backgroundColor: myCustomColor2 }}
                >
                  View/edit
                </p>
              </div>
            </div>
          </div>
        )}
        {showAdditionalDiv11 && (
          <div className="w-2/5 h-screen-1 bg-white p-8 z-50 top-0 absolute left-1/2 ml-32 rounded-lg">
            <div>
              <FontAwesomeIcon
                icon={faXmark}
                className="border-2 py-1 cursor-pointer border-black px-2 rounded-2xl  font-semibold float-right"
              />
              <div className="relative top-20">
                <p className="absolute  bg-sky-100 px-4 py-1 rounded-2xl -top-10 -left-1">
                  Maryan clark
                </p>
                <p className="font-semibold text-2xl mb-10">
                  Personal information
                </p>
              </div>

              <div>
                <div className="mt-24">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Samson james"
                    className="border-gray-200 mt-11 -ml-11 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Samjam@gmail.com"
                    className="border-gray-200 mt-11 -ml-11 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="mt-10 top-5 relative whitespace-nowrap font-semibold">
                    Phone number
                  </label>
                  <input
                    type="number"
                    placeholder="+65 89274737383"
                    className="border-gray-200 mt-7 -ml- rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Maple Street..."
                    className="border-gray-200 mt-11 -ml-14 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Availability
                  </label>
                  <input
                    type="text"
                    placeholder="09:00AM to 5:00PM"
                    className="border-gray-200 mt-11 -ml-20 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div className="flex">
                <div>
                  <div className="mt-2">
                    <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                      From
                    </label>
                    <input
                      type="text"
                      placeholder="09:00AM"
                      className="border-gray-200 mt-11 -ml-10 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                      style={{ backgroundColor: myCustomColor }}
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-2">
                    <label className="-mt-10 -top-11 -ml-2 relative whitespace-nowrap font-semibold">
                      To
                    </label>
                    <input
                      type="text"
                      placeholder="5:00PM"
                      className="border-gray-200 mt-11 -ml-4 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                      style={{ backgroundColor: myCustomColor }}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <p className="font-semibold text-xl">Services</p>

                <p className="mt-4 mb-2">Services offered</p>
                <div
                  className="w-10/12 rounded-lg border-2 p-5"
                  style={{ backgroundColor: myCustomColor }}
                >
                  <div>
                    <p className="font-semibold">Regular cleaning</p>
                  </div>

                  <div className="mt-5">
                    <p className="font-semibold">Office cleaning</p>
                  </div>

                  <div className="mt-5">
                    <p className="font-semibold">Deep cleaning</p>
                  </div>
                </div>

                <div className="flex relative right-14 top-2 w-">
                  <label className="mt-3 left-14 relative whitespace-nowrap font-semibold">
                    Start date
                  </label>
                  <input
                    type="date"
                    placeholder="Monthly plan"
                    className="border-gray-200 mt-11 -ml-3  rounded-md border-2 text-sm text-black w-screen px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />

                  <label className="mt-3 left-9 relative whitespace-nowrap font-semibold">
                    Renewal date
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    className="border-gray-200 mt-11 -ml-10 relative -left-5 rounded-md border-2 text-sm text-black w-screen px-10 pl-6 py-3 focus:outline-none  "
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>

                <div className="mt-8">
                  <p className="font-semibold text-xl">
                    Schedules and assignments
                  </p>
                  <p className="mt-4 mb-2">Current jobs</p>
                  <div
                    className="w-10/12 h-64 rounded-lg border-2 p-5"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    <div>
                      <p className="font-semibold float-right mt-4">
                        Regular cleaning
                      </p>
                      <p>Date</p>
                      <p className="font-semibold">21st July</p>
                      <p className="font-semibold text-blue-700 px-3 bg-blue-50 rounded-xl float-right">
                        Ongoing
                      </p>
                    </div>

                    <div className="mt-5">
                      <p className="font-semibold float-right mt-5 relative left-20 pl-2">
                        Office cleaning
                      </p>
                      <p>Date</p>
                      <p className="font-semibold">21st July</p>
                      <p className="font-semibold text-blue-700 px-3 bg-blue-50 rounded-xl float-right">
                        Ongoing
                      </p>
                    </div>

                    <div className="mt-5">
                      <p className="font-semibold float-right mt-5 relative left-20 pl-2">
                        Deep cleaning
                      </p>
                      <p>Date</p>
                      <p className="font-semibold">21st July</p>
                      <p className="font-semibold text-blue-700 px-3 bg-blue-50 rounded-xl float-right">
                        Ongoing
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-2">
                  <label className="-mt-10 top-2 relative whitespace-nowrap font-semibold">
                    Availability
                  </label>
                  <Calender />
                </div>

                <div className="space-x-14 mt-12">
                  <button className="px-7 py-2 bg-blue-500 rounded-lg text-white">
                    Assign new job
                  </button>
                  <button className="px-7 py-2 bg-red-600 rounded-lg relative -left-2 text-white">
                    Deactivate cleaner
                  </button>
                </div>
              </div>
            </div>
            <div className="flex space-x-12 mb-10"></div>
          </div>
        )}
        {showAdditionalDiv12 && (
          <div className="w-2/5 h-screen-1 bg-white p-8 z-50 top-0 absolute left-1/2 ml-32 rounded-lg">
            <div>
              <FontAwesomeIcon
                icon={faXmark}
                className="border-2 py-1 cursor-pointer border-black px-2 rounded-2xl  font-semibold float-right"
              />
              <div className="relative top-20">
                <p className="font-semibold text-2xl mb-10">
                  New cleaner approval
                </p>
              </div>

              <div>
                <div className="mt-24">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Samson james"
                    className="border-gray-200 mt-11 -ml-11 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Samjam@gmail.com"
                    className="border-gray-200 mt-11 -ml-11 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="mt-10 top-5 relative whitespace-nowrap font-semibold">
                    Phone number
                  </label>
                  <input
                    type="number"
                    placeholder="+65 89274737383"
                    className="border-gray-200 mt-7 -ml- rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Maple Street..."
                    className="border-gray-200 mt-11 -ml-14 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>

              <div className="mt-8">
                <div>
                  <div className="mt-2">
                    <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                      Availability
                    </label>
                    <input
                      type="text"
                      placeholder="09:00AM to 5:00PM"
                      className="border-gray-200 mt-11 -ml-20 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                      style={{ backgroundColor: myCustomColor }}
                    />
                  </div>
                </div>
                <div className="flex">
                  <div>
                    <div className="mt-2">
                      <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                        From
                      </label>
                      <input
                        type="text"
                        placeholder="09:00AM"
                        className="border-gray-200 mt-11 -ml-10 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                        style={{ backgroundColor: myCustomColor }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-2">
                      <label className="-mt-10 -top-11 -ml-2 relative whitespace-nowrap font-semibold">
                        To
                      </label>
                      <input
                        type="text"
                        placeholder="5:00PM"
                        className="border-gray-200 mt-11 -ml-4 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                        style={{ backgroundColor: myCustomColor }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="font-semibold text-xl">Services</p>

                  <p className="mt-4 mb-2">Services offered</p>
                  <div
                    className="w-10/12 rounded-lg border-2 p-5"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    <div>
                      <p className="font-semibold">Regular cleaning</p>
                    </div>

                    <div className="mt-5">
                      <p className="font-semibold">Office cleaning</p>
                    </div>

                    <div className="mt-5">
                      <p className="font-semibold">Deep cleaning</p>
                    </div>
                  </div>
                </div>

                <div className="space-x-14 mt-12">
                  <button className="px-8 py-2 bg-blue-500 rounded-lg text-white">
                    Approve cleaner
                  </button>
                  <button className="px-8 py-2 bg-red-600 rounded-lg text-white">
                    Reject cleaner
                  </button>
                </div>
              </div>
            </div>
            <div className="flex space-x-12 mb-10"></div>
          </div>
        )}
        {showAdditionalDiv9 && (
          <div className="w-2/5 h-screen-1 bg-white p-8 z-50 top-0 absolute left-1/2 ml-32 rounded-lg">
            <div>
              <FontAwesomeIcon
                icon={faXmark}
                className="border-2 py-1 cursor-pointer border-black px-2 rounded-2xl  font-semibold float-right"
              />
              <div className="relative top-20">
                <p className="absolute  bg-sky-100 px-4 py-1 rounded-2xl -top-10 -left-1">
                  Samson James
                </p>
                <p className="font-semibold text-2xl mb-10">
                  Personal information
                </p>
              </div>

              <div>
                <div className="mt-24">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Samson james"
                    className="border-gray-200 mt-11 -ml-11 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Email
                  </label>
                  <input
                    type="text"
                    placeholder="Samjam@gmail.com"
                    className="border-gray-200 mt-11 -ml-11 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="mt-10 top-5 relative whitespace-nowrap font-semibold">
                    Phone number
                  </label>
                  <input
                    type="number"
                    placeholder="+65 89274737383"
                    className="border-gray-200 mt-7 -ml- rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div>
                <div className="mt-2">
                  <label className="-mt-10 -top-11 relative whitespace-nowrap font-semibold">
                    Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Maple Street..."
                    className="border-gray-200 mt-11 -ml-14 rounded-md border-2 text-sm placeholder-black w-5/6 px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>
              </div>
              <div className="mt-8">
                <p className="font-semibold text-xl">Subscription</p>

                <Planselector />

                <div className="flex relative right-14 top-2 w-">
                  <label className="mt-3 left-14 relative whitespace-nowrap font-semibold">
                    Start date
                  </label>
                  <input
                    type="date"
                    placeholder="Monthly plan"
                    className="border-gray-200 mt-11 -ml-3  rounded-md border-2 text-sm text-black w-screen px-10 pl-6 py-3 focus:outline-none"
                    style={{ backgroundColor: myCustomColor }}
                  />

                  <label className="mt-3 left-9 relative whitespace-nowrap font-semibold">
                    Renewal date
                  </label>
                  <input
                    type="date"
                    placeholder=""
                    className="border-gray-200 mt-11 -ml-10 relative -left-5 rounded-md border-2 text-sm text-black w-screen px-10 pl-6 py-3 focus:outline-none relative "
                    style={{ backgroundColor: myCustomColor }}
                  />
                </div>

                <div className="mt-8">
                  <p className="font-semibold text-xl">Service history</p>
                  <p className="mt-4 mb-2">Service records</p>
                  <div
                    className="w-10/12 rounded-lg border-2 p-5"
                    style={{ backgroundColor: myCustomColor }}
                  >
                    <div>
                      <p className="font-semibold float-right mt-4">
                        Regular cleaning
                      </p>
                      <p>Date</p>
                      <p className="font-semibold">21st July</p>
                    </div>

                    <div className="mt-5">
                      <p className="font-semibold float-right mt-4">
                        Office cleaning
                      </p>
                      <p>Date</p>
                      <p className="font-semibold">21st July</p>
                    </div>

                    <div className="mt-5">
                      <p className="font-semibold float-right mt-4">
                        Deep cleaning
                      </p>
                      <p>Date</p>
                      <p className="font-semibold">21st July</p>
                    </div>
                  </div>
                </div>

                <div className="space-x-14 mt-12">
                  <button className="px-8 py-2 bg-blue-500 rounded-lg text-white">
                    Save changes
                  </button>
                  <button className="px-8 py-2 bg-red-600 rounded-lg text-white">
                    Delete customer
                  </button>
                </div>
              </div>
            </div>
            <div className="flex space-x-12 mb-10"></div>
          </div>
        )}
       
        {showAdditionalDiv7 && (
          <div
            className="w- h-screen-2   z-30 relative left-80"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>

              <div className="flex space-x-3 relative left-4 text-sm">
              <Link to="/CleaningRequest">
                <p className="cursor-pointer text-gray-400">
                  Completed requests
                </p>
                </Link>
                <Link to="/PendingRequest">
                <p className="cursor-pointer text-gray-400">
                  Pending requests{" "}
                </p>
                </Link>
                <Link to="/UpcomingSchedule">
                <p className="cursor-pointer px-5 bg-white py-2  rounded-md relative -top-2">
                  Upcoming schedule cleaning
                  <span className="relative left-3 text-xs px-1 bg-red-600 rounded-xl text-white">
                    5
                  </span>
                </p>
                </Link>
                <Link to="/RequestHistory">
                <p className="cursor-pointer text-gray-400">Request History</p>
                </Link>
              </div>
            </div>
            <div className="bg-white h-screen-3 w-screen-3 left-10 pl-4 pt-9 relative top-36">
              <h1 className="font-semibold text-lg">Pending requests</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Client Name</p>
                <p className="whitespace-nowrap relative -left-14">
                  Scheduled date
                </p>
                <p className="relative -left-32 whitespace-nowrap">Address</p>
                <p className="relative right-28 whitespace-nowrap">
                  Service type
                </p>
                <p className="whitespace-nowrap relative right-36">
                  Special instruction
                </p>
                <p className="whitespace-nowrap relative right-44">Status</p>
              </div>

              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-black font-semibold px-3 rounded-xl py-1 relative -left-3"
                  style={{ backgroundColor: myCustomColor }}
                >
                  Reschedule
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-black font-semibold px-3 rounded-xl py-1 relative -left-3"
                  style={{ backgroundColor: myCustomColor }}
                >
                  Reschedule
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-black font-semibold px-3 rounded-xl py-1 relative -left-3"
                  style={{ backgroundColor: myCustomColor }}
                >
                  Reschedule
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p
                  className="text-black font-semibold px-3 rounded-xl py-1 relative -left-3"
                  style={{ backgroundColor: myCustomColor }}
                >
                  Reschedule
                </p>
              </div>
              <div className="flex mt-1 space-x-10 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right-3 whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p className="relative left-6 whitespace-nowrap">
                  Regular cleaning
                </p>
                <p className="relative left-5 whitespace-nowrap">
                  Please focus on kitchen...
                </p>
                <p className="font-semibold px-3 w-24 rounded-xl py-1 relative bg-red-50 text-red-600 -left-3">
                  Cancelled
                </p>
              </div>
            </div>
          </div>
        )}
        {showAdditionalDiv8 && (
          <div
            className="w- h-screen-2   z-30 relative left-80"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4" />
                Back
              </p>


              <Link to="/CleaningRequest">
</Link>
<Link to="/PendingRequest">
</Link>
<Link to="/UpcomingSchedule">
</Link>
              <div className="flex space-x-3 relative left-4 text-sm">
              <Link to="/CleaningRequest">
                <p className="cursor-pointer text-gray-400">
                  Completed requests
                </p>
                </Link>
                <Link to="/PendingRequest">
                <p className="cursor-pointer text-gray-400">
                  Pending requests{" "}
                </p>
                </Link>
                <Link to="/UpcomingSchedule">
                <p className="cursor-pointer text-gray-400">
                  Upcoming schedule cleaning
                </p>
                </Link>
                <p className="cursor-pointer px-5 bg-white py-2  rounded-md relative -top-2">
                  Request History
                </p>
              </div>
            </div>
            <div className="bg-white h-screen-3 w-screen-3 left-10 pl-4 pt-9 relative top-36">
              <h1 className="font-semibold text-lg">Request history</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4"
                style={{ backgroundColor: myCustomColor }}
              >
                <p>Client Name</p>
                <p>Date of request</p>
                <p className="relative right-10">Address</p>
                <p className="relative right-4">Service type</p>
                <p>Status</p>
              </div>

              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Office cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 relative left-2 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Office cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold relative left-2">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Office cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold relative left-2">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-blue-400 px-2 bg-blue-50 rounded-xl font-semibold">
                  Pending
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
              <div className="flex mt-1 space-x-20 relative py-3 px-4">
                <p className="whitespace-nowrap">Samson James</p>
                <p className="relative right- whitespace-nowrap">21st July</p>
                <p className="relative left-7">123 Maple Street...</p>
                <p>Regular cleaning</p>
                <p className="text-green-400 px-2 bg-green-50 rounded-xl font-semibold">
                  Completed
                </p>
              </div>
            </div>
          </div>
        )}
        
        
        

        {showAdditionalDiv13 && (
          <div
            className="w- h-screen-2   z-30 relative left-80"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 ">
                <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                  Overview
                  {/* <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                  5
                </span> */}
                </p>
                <p className="cursor-pointer px-5  text-gray-400 ">
                  Payment history
                </p>
                {/* <p className="cursor-pointer text-gray-400">
                Upcoming schedule cleaning
              </p> */}
                <p className="cursor-pointer text-gray-400 text-center  px-8 py-3 relative -mt-3 right-8 font-semibold rounded-lg">
                  Invoices
                </p>
              </div>
            </div>
            <div className="bg-white h-screen-3  w-screen-3 left-10 pl-4 pt-9 relative top-36">
              <h1 className="font-semibold text-lg">Available jobs</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Job ID</p>
                <p className="whitespace-nowrap relative -left-3">
                  Client Name
                </p>
                <p className="whitespace-nowrap relative -left-16">Address</p>

                <p className="relative right-24 whitespace-nowrap">
                  Service type
                </p>
                <p className="relative -left-36 ml-2 whitespace-nowrap">
                  Special instruction
                </p>
                <p className="whitespace-nowrap relative right-56">
                  Scheduled date
                </p>
                <p className="whitespace-nowrap relative right-1/3 ml-40">
                  Action
                </p>
              </div>
              <div className="text-sm relative -left-3">
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-2">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative -left-6">
                    Samson James
                  </p>
                  <p className="relative right-16 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-32 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-44 whitespace-nowrap">
                    Please focus on the...
                  </p>
                  <p className="relative right-60 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-md py-1 relative -left-1/3 -ml-12 whitespace-nowrap"
                    style={{ backgroundColor: myCustomColor4 }}
                  >
                    Assign job
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {showAdditionalDiv14 && (
          <div
            className="w- h-screen-2   z-30 relative left-80"
            style={{ backgroundColor: myCustomColor }}
          >
            <div className="top-32 relative left-6">
              <p className="bg-white relative -top-10 pl-5 px-2 w-24 whitespace-nowrap py-2 rounded-lg left-4">
                <FontAwesomeIcon icon={faArrowLeft} className="pr-4 " />
                Back
              </p>

              <div className="flex space-x-3 ">
                <p className="cursor-pointer px-5  text-gray-400 ">
                  Assign Jobs
                </p>
                <p className="cursor-pointer bg-white py-3 px-4 left-4 rounded-md relative -top-3">
                  Monitor Job status
                  {/* <span className="relative left-1 text-xs px-1 bg-red-600 rounded-xl text-white">
                  5
                </span> */}
                </p>
                {/* <p className="cursor-pointer text-gray-400">
                Upcoming schedule cleaning
              </p> */}
                {/* <p className="cursor-pointer text-gray-400 text-center  px-8 py-3 relative -mt-3 right-8 font-semibold rounded-lg">
                Invoices
              </p> */}
              </div>
            </div>
            <div className="bg-white h-screen-3  w-screen-3 left-10 pl-4 pt-9 relative top-36">
              <h1 className="font-semibold text-lg">Ongoing Jobs</h1>
              <div
                className="flex mt-9 space-x-24 relative font-semibold py-3 px-4 w-screen-2"
                style={{ backgroundColor: myCustomColor }}
              >
                <p className="whitespace-nowrap">Job ID</p>
                <p className="whitespace-nowrap relative -left-3">
                  Client Name
                </p>
                <p className="whitespace-nowrap relative -left-16">Address</p>

                <p className="relative right-24 whitespace-nowrap">
                  Service type
                </p>
                <p className="relative -left-36 ml-2 whitespace-nowrap">
                  Assigned cleaner
                </p>
                <p className="whitespace-nowrap relative right-56">
                  Scheduled date
                </p>
                <p className="whitespace-nowrap relative right-1/3 ml-40">
                  Status
                </p>
              </div>
              <div className="text-sm relative -left-3">
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 whitespace-nowrap bg-blue-50"
                    style={{ color: myCustomColor4 }}
                  >
                    In progress
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 -ml-12 whitespace-nowrap bg-green-50"
                    style={{ color: myCustomColor2 }}
                  >
                    Completed
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 whitespace-nowrap bg-blue-50"
                    style={{ color: myCustomColor4 }}
                  >
                    In progress
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 whitespace-nowrap bg-blue-50"
                    style={{ color: myCustomColor4 }}
                  >
                    In progress
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 -ml-12 whitespace-nowrap bg-green-50"
                    style={{ color: myCustomColor2 }}
                  >
                    Completed
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 -ml-12 whitespace-nowrap bg-green-50"
                    style={{ color: myCustomColor2 }}
                  >
                    Completed
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 whitespace-nowrap bg-blue-50"
                    style={{ color: myCustomColor4 }}
                  >
                    In progress
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 -ml-12 whitespace-nowrap bg-green-50"
                    style={{ color: myCustomColor2 }}
                  >
                    Completed
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 -ml-12 whitespace-nowrap bg-green-50"
                    style={{ color: myCustomColor2 }}
                  >
                    Completed
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 whitespace-nowrap bg-blue-50"
                    style={{ color: myCustomColor4 }}
                  >
                    In progress
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 -ml-12 whitespace-nowrap bg-green-50"
                    style={{ color: myCustomColor2 }}
                  >
                    Completed
                  </p>
                </div>
                <div className="flex mt-1 space-x-20 relative -left-11 py-3 px-4 ">
                  <p className="whitespace-nowrap relative left-12">
                    #8384738920
                  </p>
                  <p className="whitespace-nowrap relative left-5">
                    Samson James
                  </p>
                  <p className="relative right-5 whitespace-nowrap">
                    123 Maple Street...
                  </p>

                  <p className="relative -left-20 whitespace-nowrap">
                    Regular cleaning
                  </p>
                  <p className="relative right-32 whitespace-nowrap">
                    Maryan Clark
                  </p>
                  <p className="relative right-40 whitespace-nowrap ">
                    Tomorrow, 10:00AM
                  </p>
                  <p
                    className="text-white font-semibold px-2 rounded-2xl py-1 relative -left-1/4 whitespace-nowrap bg-blue-50"
                    style={{ color: myCustomColor4 }}
                  >
                    In progress
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DashboardTemp;
