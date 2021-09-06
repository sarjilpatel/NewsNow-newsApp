import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(30);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;

    let data = await fetch(url);
    props.setProgress(50);
    let parseData = await data.json();
    props.setProgress(80);

    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title=`NewsNow-${capitalizeFirstLetter(props.category)}`;
     updateNews();
     // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
        page + 1
    }&pagesize=${props.pageSize}`;

    let data = await fetch(url);
    let parseData = await data.json();
   

    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);
    setPage(page+1)
  };

  return (
    <div className="container my-5">
      <h1 className="text-center h1" style={{margin:"10px 0px",
        marginTop:"80px"
      }}>
        NewsNow - Top { capitalizeFirstLetter(props.category)} Headlines{" "}
      </h1>
      {  loading && <Loading />}
      
      <InfiniteScroll
        dataLength={  articles.length}
        next={ fetchMoreData}
        hasMore={  articles.length !==   totalResults}
        loader={<Loading />}
      >
        <div className="container">
          <div className="row">
            {  articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={
                      element.description ? element.description : "\n\n\n\n"
                    }
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "in",
  category: "general",
  pageSize: 15,
};

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  pageSize: PropTypes.number,
  apiKey: PropTypes.string.isRequired,
};


export default News;