export async function getPostItem(id) {
  const response = await fetch(`https://gorest.co.in/public-api/posts/${id}`);
  return await response.json();
}
