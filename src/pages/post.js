import React from 'react'
import { withRouteData, Link } from 'react-static'
//

export default withRouteData(({ post }) => (
  <div>
    <br />
    <h3 className="post--title">{post.title}</h3>
    <p>{post.body}</p>
  </div>
))
