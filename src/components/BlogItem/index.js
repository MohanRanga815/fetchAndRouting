import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogDetails

  return (
    <li className="blog-item">
      <Link to={`/blogs/${id}`} className="blog-link">
        <div className="item-container">
          <img src={imageUrl} alt={`item${id}`} className="image" />
          <div className="inner">
            <div className="info">
              <p className="topic">{topic}</p>
              <h1 className="title">{title}</h1>
            </div>
            <div className="img-container">
              <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
              <p className="author">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
