export async function getPostList(page = 1) {
  const response = await fetch(`https://gorest.co.in/public-api/posts?page=${page}`);
  return await response.json();
}
