import Header from "../../components/Header/Header";
import Balance from "../../components/Balance/Balance";
import WatchList from "../../components/WatchList/WatchList";
import Article from "../../components/Article/Article";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="mainHolder">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-9">
            <div className="homeBodyHolder">
              <div className="homeBodyHolder_myBalance">
                <h6>My Balance</h6>
                <h4>
                  <Balance balance="0.000" currency="JOD" />
                </h4>{" "}
                {/** this should be variables  */}
              </div>
              <div className="homeBodyHolder_watchList">
                <WatchList />
              </div>
              <div className="homeBodyHolder_articles">
                <div className="articleHolder_date">
                  <p>Tuesdaye, January 03</p>
                </div>
                <Article />
                <Article /> {/** when fetch the api should be array of maps */}
              </div>
            </div>
          </div>
          <div className="col-lg-3">dfdf</div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
