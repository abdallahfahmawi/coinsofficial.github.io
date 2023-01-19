import { Fragment, useState } from "react";
import ArticleType from "./ArticleType";
import Button from "../Buttons/Button";
import ArticleImage from "../../assets/images/user.jpeg";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { AiOutlineUpload } from "react-icons/ai";

import "./Article.scss";

const Article = () => {
  const [redClass, setRedClass] = useState(false);

  const favoriteHandleClick = () => {
    setRedClass(!redClass);
  };


  return (
    <Fragment>
     
      <div className="articleHolder d-flex">
        <div className="articleHolder_image">
          <img src={ArticleImage} />
        </div>
        {/** article content section */}
        <div className="articleHolder_content w-100">
          <ArticleType />
          <div className="articleHolder_content_text">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s
            </p>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
            </p>
          </div>
          <div className="articleHolder_content_footer d-flex justify-content-between">
            <div className="">
              <Button
                className={!redClass ? "btn-more" : "btn-more favorite"}
                onClick={favoriteHandleClick}
              >
                {redClass ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
              </Button>
              <span>227</span>
              <Button className="btn-more btn-more-upload">
                <AiOutlineUpload />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Article;
