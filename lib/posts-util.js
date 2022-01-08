import fs, { fdatasyncSync } from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPostsData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); // remove file extension
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  
  const postsData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postsData;
}

export function getPostFiles() {
  return fs.readdirSync(postsDirectory);
}

export function GetAllPosts() {
  const postFiles = getPostFiles();
  const allPosts = postFiles.map((postFile) => {
      return getPostsData(postFile)
  })
 const sortedPosts =  allPosts.sort((postA, postB ) => postA.date > postB.date ? -1 : 1)
  return sortedPosts
}

export function getFeaturedPosts() {
    const allPosts =   GetAllPosts()

  const featuredPosts = allPosts.filter(post => post.isFeatured )
    return featuredPosts;
}

