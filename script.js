// Listen for form submission
document.getElementById('infoForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const infoText = document.getElementById('infoText').value.trim();
  if (infoText !== '') {
    addPost(infoText);
    document.getElementById('infoText').value = '';
  }
});

// Function to add a new post
function addPost(message) {
  const postsContainer = document.getElementById('postsContainer');
  const postDiv = document.createElement('div');
  postDiv.className = 'post';
  
  // Create a timestamp for the post
  const timestamp = new Date().toLocaleString();
  
  // Insert the message and timestamp into the post
  postDiv.innerHTML = `<p>${message}</p><small>Posted on: ${timestamp}</small>`;
  
  // Add the new post at the top
  postsContainer.insertBefore(postDiv, postsContainer.firstChild);
}