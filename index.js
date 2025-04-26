// Function to fetch data from the API using async/await
async function fetchPosts() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/posts'; // API endpoint for posts

    try {
        const response = await fetch(apiUrl, { // Fetch data from API
            headers: { 
                'Accept-Language': 'en'
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch posts.');
        }
        const posts = await response.json(); // Parse the response to JSON
        displayPosts(posts); // Call function to display posts
    } catch (error) {
        console.error('Error fetching posts:', error);
        alert('An error occurred while fetching posts.');
    }
}

// Function to display posts on the page
function displayPosts(posts) {
    const postList = document.getElementById('post-list');
    postList.innerHTML = ''; // Clear the list before adding new posts

    // Loop through each post in the array
    posts.forEach(post => {
        // Create new <li> element
        const li = document.createElement('li');
        
        // Create <h1> element for the title
        const h1 = document.createElement('h1');
        h1.textContent = post.title; // Add title text to h1
        
        // Create <p> element for the body
        const p = document.createElement('p');
        p.textContent = post.body; // Add body text to p
        
        // Append h1 and p to the <li>
        li.appendChild(h1);
        li.appendChild(p);
        
        // Append <li> to the <ul>
        postList.appendChild(li);
    });
}

// Fetch and display posts when the page loads
window.onload = fetchPosts; // Call fetchPosts on page load
