import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';

// Importing External files....
import Navbar from '../Layout/Navbar'
import NewsNavbar from './NewsNavbar'


export class News extends Component {
    static defaultProps = {
        category: "general",
    }

    static propTypes = {
        category: PropTypes.string,
        pagesize: PropTypes.number // Added propTypes for pagesize
    }

    capitalizeFirstLetter = (string) =>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0 // Initialize totalResults
        }
        document.title = `DailyNews | ${this.capitalizeFirstLetter(this.props.category)}`
    }

    componentDidMount() {
        this.fetchArticles(); // Call fetchArticles method
    }

    fetchArticles = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=9c9127ca69df4013b412efdfe47eaa13&page=${this.state.page}&pagesize=${this.props.pagesize}`;
        this.setState({ loading: true });
        try {
            const data = await fetch(url);
            const parsedData = await data.json();
            this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false });
        } catch (error) {
            console.error("Error fetching articles:", error);
            this.setState({ loading: false }); // Reset loading state on error
        }
    }

    handleNextClick = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize))) {
            this.setState({ page: this.state.page + 1 }, this.fetchArticles); // Fetch articles after updating page
        }
    }

    handlePrevClick = async () => {
        if (!(this.state.page - 1 < 1)) {
            this.setState({ page: this.state.page - 1 }, this.fetchArticles); // Fetch articles after updating page
        }
    }

    render() {
        return (
            <>
            <Navbar/>
            <NewsNavbar/>
                <div className="container">
                    <h1 className="text-center">Top-HeadLines for {this.capitalizeFirstLetter(this.props.category)} Categories</h1>
                    {this.state.loading && <Spinner />}
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageurl={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
                <div className="container d-flex justify-content-between my-5">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-primary" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pagesize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}> Next&rarr;</button>
                </div>
            </>
        )
    }
}

export default News;
