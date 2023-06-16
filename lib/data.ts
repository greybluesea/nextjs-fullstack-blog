type Post = {
  id: string;
  title: string;
  description: string;
  date: Date;
};

let posts: Post[] = [];

export const getAll = () => posts;

export const addPost = (post: Post) => posts.push(post);

export const getPost = (postId: Post["id"]) => {
  const targetPost = posts.find((each) => each.id === postId);
  if (!targetPost) throw new Error("no such post found");
  return targetPost;
};

export const deletePost = (postId: Post["id"]) => {
  posts = posts.filter((post) => post.id !== postId);
};

export const updatePost = (post: Post) => {
  const targetPost = posts.find((each) => each.id === post.id);
  if (!targetPost) throw new Error("no such post found");
  const postIndex = posts.indexOf(targetPost);
  posts.splice(postIndex, 1, post);
};
