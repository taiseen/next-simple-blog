
// const baseURL = 'http://localhost:3000'

const baseURL = 'https://next-simple-blog-bd.vercel.app'


// getStatic--Props  <==  function use this approach...
// getStatic--Paths  <==  function use this approach...
export const getPost = async (id) => {

    const endPoint = '/api/post';

    const res = await fetch(baseURL + endPoint);
    const posts = await res.json();

    if (id) return posts.find(post => post.id == id);

    return posts;
}