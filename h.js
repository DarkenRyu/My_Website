
const commentInput = document.getElementById("com");
const submitButton = document.getElementById("comsub");
const commentList = document.getElementById("iList");


function loadComments() {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    commentList.innerHTML = ''; 
    savedComments.forEach((comment, index) => {
        const newComment = document.createElement("li");
        newComment.textContent = comment;

  
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn"); // Add class for styling
        deleteButton.addEventListener("click", function() {
         
            const password = prompt("Enter password to delete the comment:");
            if (password === "llezirk123") {
                deleteComment(index);  comment
            } else {
                alert("Incorrect password!");
            }
        });

        newComment.appendChild(deleteButton); 
        commentList.appendChild(newComment);
    });
}

// Function to save comments to Local Storage
function saveComments() {
    const comments = Array.from(commentList.children).map(item => item.textContent.replace('Delete', '').trim());
    localStorage.setItem("comments", JSON.stringify(comments));
}

// Function to delete a comment
function deleteComment(index) {
    const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
    savedComments.splice(index, 1); // Remove the comment from the array
    localStorage.setItem("comments", JSON.stringify(savedComments)); // Save the updated list
    loadComments(); // Reload the list after deletion
}

// Add click event listener to the submit button
submitButton.addEventListener("click", function () {
    const commentText = commentInput.value.trim();
    if (commentText !== "") {
        const newComment = document.createElement("li");
        newComment.textContent = commentText;

        // Create a delete button for the new comment
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn"); // Add class for styling
        deleteButton.addEventListener("click", function() {
            // Prompt for password before deleting
            const password = prompt("Enter password to delete the comment:");
            if (password === "krizell123") {
                deleteComment(Array.from(commentList.children).indexOf(newComment));
            } else {
                alert("Incorrect password!");
            }
        });

        newComment.appendChild(deleteButton);
        commentList.appendChild(newComment);
        commentInput.value = ""; // Clear the text area
        saveComments(); // Save to Local Storage
        loadComments(); // Refresh the list from Local Storage
    } else {
        alert("Please enter a comment before submitting!");
    }
});

// Load comments when the page loads
window.addEventListener("load", loadComments);