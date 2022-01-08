import Hero from "../components/home-page/hero";
import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";


function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>Jeffs Blog</title>
        <meta name='description' content='all about web programming consulting'/>
      </Head>
      <Hero />
      <FeaturedPosts posts={props.posts}></FeaturedPosts>
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 1800
  }
}

export default HomePage;
