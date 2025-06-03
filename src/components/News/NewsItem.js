/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Component } from 'react'
import Img from '../Assets/work-in-process.jpg'

import '../../App.css'

export class NewsItem extends Component {

    render() {
        let { title, description, imageurl, url, author, date, source } = this.props
        return (
            <>
                <div className="my-3">
                    <div className="card dark">
                        <div className="cards">
                            <img src={!imageurl ? Img : imageurl} className="card_img card-img-top" alt="Image Not Available" />
                        </div>
                        <div className="card-body">
                            <p className="card-text">{description}...</p>
                            <p class="card-text"><small class="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                            <h5 className="card-title">{title} <span class="badge bg-info position-absolute rounded-pill text-dark top-0 translate-middle" style={{ left: "80%", zIndex: 1 }}>{source}</span></h5>
                            <a href={url} target="_blank" className="btn btn-primary btn-sm" rel="noreferrer">Read More</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
