import { useState } from "react";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { NavLink } from "react-router-dom";
import "./SideBar.scss";

const SideBar = (props) => {
  const [activeItem, setActiveItem] = useState(0);

  const value = 0.66;

  const renderedItems = props.itemArray.map((item, index) => {
    const isActive = index === activeItem;

    return (
      <li
        key={item.id}
        onClick={() => setActiveItem(index)}
        className={isActive ? "activeLink" : ""}
      >
        <NavLink to={`/ ${item.path}`} className="linksStyle">
          <span>{item.icon}</span>
          <span>{item.name}</span>
        </NavLink>
      </li>
    );
  });

  return (
    <div>
      <CircularProgressbar
       value={value}
        maxValue={1}
         className="progressBar"
         styles={buildStyles ({
          rotation: 0.35,
          pathColor : `#0052fd`
         })}
          />
      <ul className="itemsHolder">{renderedItems}</ul>
    </div>
  );
};

export default SideBar;
