import React from 'react'
import { withRouteData } from 'react-static'
import PostItem from '../containers/postItem'

export default withRouteData(({ posts }) => (
  <div>
    <ul>
      {posts.map(post => (
        <li key={post.id} className="post--item">
          <PostItem key={post.id} post={post} />
        </li>
      ))}
    </ul>
  </div>
))
