import React from 'react'
import { Link } from 'react-router-dom'
const NewsItem = (props) => {

  return (
    <div className="card" style={{ boxShadow: '8px 5px 8px #ADADAD' }}>
      <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '85%', zIndex: '1' }}>{props.source.name}</span>
      <img src={props.urlToImage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <p className='card-text'><small className='text-muted'>By {props.author} on {props.date}</small></p>
        <Link rel="noreferrer" to={props.url} target='_blank' className="btn btn-sm btn-primary">Read More </Link>
      </div>
    </div>
  )

}

export default NewsItem;