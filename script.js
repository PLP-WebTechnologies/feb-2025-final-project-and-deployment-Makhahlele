let likeCounts = [0, 0];

function likePost(index) {
  likeCounts[index]++;
  document.getElementById(`likeCount${index}`).textContent = likeCounts[index];
}
