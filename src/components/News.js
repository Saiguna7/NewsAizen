import React, { Component } from "react";
import Newsitem from "./Newsitem";
// import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static deafaultProps = {
    country: "in",
    pagesize: 8,
    category:'general'
  };
  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category:PropTypes.string
  };
  capfirstletter=(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    }
    document.title=`${this.capfirstletter(this.props.category)}-NewsAizen`;
  }
  async componentDidMount(page) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=49e80c7b88734bee82e0821cc42d2d37&page=${page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }
  handleprevclick = async () => {
    const { page } = this.state;
    if (page > 1) {
      await this.componentDidMount(page - 1);
      this.setState({
        page: page - 1,
      });
    }
  };
  handlenextclick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      const { page } = this.state;
      await this.componentDidMount(page + 1);
      this.setState({
        page: page + 1,
      });
    }
  };
  render() {
    const { mode } = this.props;
    return (
      <div
        className="container my-3"
        style={{ color: mode === "dark" ? "white" : "black" }}
      >
        <h1 className="text-center" style={{margin: '35px'}}>NewsAizen - Top {this.capfirstletter(this.props.category)} Headlines</h1>
        {/* {this.state.loading && <Spinner />} */}
        {/* <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    mode={mode}
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imgurl={element.urlToImage}
                    newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                  />
                </div> */}
                <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <Newsitem
                    mode={mode}
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imgurl={element.urlToImage}
                    newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        {/* another method {this.state.page>1 && (<button  type="button" className="btn btn-dark" onClick={this.handleprevclick}
        >&larr; Previous</button>)}  */}
        <div className="container d-flex justify-content-between">
          {!this.state.loading && (
            <>
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.handleprevclick}
                style={{
                  visibility: this.state.page > 1 ? "visible" : "hidden",
                }}
              >
                &larr; Previous
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={this.handlenextclick}
                style={{
                  visibility:
                    this.state.page + 1 >
                    Math.ceil(this.state.totalResults / this.props.pageSize)
                      ? "hidden"
                      : "visible",
                }}
              >
                Next &rarr;
              </button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default News;
