export async function getComments(postId) {
  const response = await fetch(`https://gorest.co.in/public-api/posts/${postId}/comments`);
  const commentsData = await response.json();
  return { commentsData };
}
