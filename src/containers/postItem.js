import React from 'react'
import { withRouteData, Link } from 'react-static'
//
import logoImg from '../logo.png'

export default withRouteData(({ post }) => (
  <div>
    <Link to={`/post/${post.id}/`}>
       <h3 className="post--item-title">{ post.title }</h3>
    </Link>
    <p>{ post.body }</p>
  </div>
))