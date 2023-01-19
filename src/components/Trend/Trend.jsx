import { TbArrowUpRight } from "react-icons/tb";
import { TbArrowDownRight } from "react-icons/tb";
import './Trend.scss'

const Trend = (props) => {
  let trend;

  if (props.trendArrow === "up") {
    return (trend = (
      <div className="upTrend">
        <span>
          <TbArrowUpRight />
          <span>{props.number}%</span>
        </span>
      </div>
    ));
  }

  if (props.trendArrow === "down") {
    return (trend = (
      <div className="downTrend">
        <span>
          <TbArrowDownRight />
          <span>{props.number}%</span>
        </span>
      </div>
    ));
  }

  return { trend };
};

export default Trend;
