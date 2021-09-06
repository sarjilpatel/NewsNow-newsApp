import React from "react";

const NewsItem =(props) => {

    let { title, description, imgUrl, newsUrl, author, date, source } =
      props;

    return (
      <div className="my-4 mx-2">
        <div className="card">
          <span
            className="position-absolute translate-middle-y badge rounded-pill bg-danger"
            style={{
              right: "-5px",
              zIndex: "1",
            }}
          >
            {source}
          </span>
          <img
            src={
              imgUrl
                ? imgUrl
                : "https:www.rmit.edu.au/content/dam/rmit/au/en/study-with-us/interest-areas/thumbnails/science-study-area-1220x732.jpg"
            }
            className="card-img-top"
            alt=""
          />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}. . .</p>
            <p className="card-text text-danger"
               
              >
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
            </p>
            <a
              href={newsUrl}
              rel="noreferrer noopener"
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}
export default NewsItem;