import Hero from "../../components/home-page/hero";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-post";
import { GetAllPosts } from "../../lib/posts-util";
import Head from 'next/head'

function ALLPostsPage(props) {
  return(
    <Fragment>
      <head>
        <title>
          All my posts
        </title>
        <meta name = 'description' content= 'A list of all my posts'/>
      </head>
    <AllPosts posts = {props.posts}/>
    </Fragment>
  )
}
export default ALLPostsPage;

export function getStaticProps() {
  const featuredPosts = GetAllPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800
  }
}

