import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SideBar from "./components/SideBar/SideBar";
import { BiTrendingUp, BiPlanet } from "react-icons/bi";
import { MdHomeFilled } from "react-icons/md";
import { BiPieChartAlt } from "react-icons/bi";
import { AiOutlinePercentage } from "react-icons/ai";
import { HiOutlineCircleStack } from "react-icons/hi2";
import { BsThreeDotsVertical } from "react-icons/bs";
import { nanoid } from "@reduxjs/toolkit";


function App() {
  /// the side bar items are here in this array and it will replace with API items later
  const itemsArray = [
    {
      name: "Home",
      icon: <MdHomeFilled />,
      path: "home",
      id: nanoid(),
    },
    {
      name: "My Assest",
      icon: <BiPieChartAlt />,
      path: "assest",
      id: nanoid(),
    },
    {
      name: "Trade",
      icon: <BiTrendingUp />,
      path: "trade",
      id: nanoid(),
    },
    {
      name: "Earn",
      icon: <AiOutlinePercentage />,
      path: "earn",
      id: nanoid(),
    },
    {
      name: "Web3",
      icon: <BiPlanet />,
      path: "web",
      id: nanoid(),
    },
    {
      name: "Pay",
      icon: <HiOutlineCircleStack />,
      path: "pay",
      id: nanoid(),
    },
    {
      name: "More",
      icon: <BsThreeDotsVertical />,
      path: "more",
      id: nanoid(),
    },
  ];
  /// end of the sidebar array

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-1 col-sm-2">
          <SideBar itemArray={itemsArray} />
        </div>
        <div className="col-lg-10 col-md-11 col-sm-10">
          <Route path="/">
            <HomePage />
          </Route>
        </div>
      </div>
    </div>
  );
}

export default App;
