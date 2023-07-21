import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
// let {pageSize} = propsprops;
const News = (props) => {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${props.page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)

  }
  useEffect(() => {
    updateNews();
  }, [])

  const fetchMoreData = async () => {
    setPage(page + 1)
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=d093053d72bc40248998159804e0e67d&page=${props.page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };


  return (
    <div>
      <React.Fragment>
        <h2 className="text-center" style={{marginTop:"80px"}}> News Monkey - Top {props.category} Headlines</h2>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}>
          <div className=" container">
            <div className="row my-3">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-4" key={element.url}>
                    <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source} />
                  </div>

                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </React.Fragment>
    </div>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 10
}
export default News;
