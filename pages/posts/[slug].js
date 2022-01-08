import { Fragment } from "react/cjs/react.production.min";
import PostContent from "../../components/posts/posts-detail/post-content";
import { getPostsData, getPostFiles } from "../../lib/posts-util";
import Head from 'next/head'
function PostDetailPage(props) {



  return (
        <Fragment>
          <Head>
            <title>{props.post.title}</title>
        
          </Head>

        <PostContent post={props.post}></PostContent>;
        </Fragment>

  )

}



export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostsData(slug);
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths(req, res, next) {
  const postFilenames = getPostFiles();
  const slugs = postFilenames.map((filename) => filename.replace(/\.md$/, ""));
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}

export default PostDetailPage;
