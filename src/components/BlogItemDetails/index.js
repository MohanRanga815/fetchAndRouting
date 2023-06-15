// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogListData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogListData()
  }

  getBlogListData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)

    const data = await response.json()

    const newUpdatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({blogListData: newUpdatedData, isLoading: false})
  }

  renderBlogItemDetailsCard = () => {
    const {blogListData} = this.state
    const {title, imageUrl, content, avatarUrl, author} = blogListData

    return (
      <div className="blog-item">
        <h1 className="title">{title}</h1>
        <div className="author-con">
          <img src={avatarUrl} className="avatar" alt={author} />
          <p className="para">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="image" />
        <p className="content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="blog-con">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" width={50} height={50} color="#00bfff" />
          </div>
        ) : (
          this.renderBlogItemDetailsCard()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
