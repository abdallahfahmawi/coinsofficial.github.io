import Balance from "../Balance/Balance";
import { SiBitcoin } from "react-icons/si";
import { HiOutlineArrowTrendingUp } from "react-icons/hi2";
import { AiOutlineStar } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import Trend from "../Trend/Trend";
import "./WatchList.scss";

const WatchList = () => {
  return (
    <div>
      <h6>Watch List</h6>
      <div className="cyptoHolder d-flex justify-content-between">
        <div className="crypto d-flex">
          <div className="cyptoHolder_cryptoIcon">
            <span>
              <SiBitcoin />
            </span>
          </div>
          <div className="cyptoHolder_cryptoName">
            <p>Bitcoin</p>
            <span>BTC</span>
          </div>
        </div>
        <div className="cyptoHolder_numbers">
          <ul className="watchList d-flex">
            <li>
              <Balance balance="11,808.349" currency="JOD" />
            </li>
            <li>
              <HiOutlineArrowTrendingUp />
            </li>
            <li>
              <Trend trendArrow="down" number={0.02} />
            </li>
            <li>
              <Balance balance="228.1B" currency="JOD" />
            </li>
            <li>
              <span className="watchList_buy">Buy</span>
            </li>
            <li>
                <AiOutlineStar/>
            </li>
            <li>
                <GiHamburgerMenu />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WatchList;
