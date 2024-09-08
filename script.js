document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('commentForm');
    const commentList = document.getElementById('commentList');
    const commentInput = document.getElementById('commentInput');

    commentForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const commentText = commentInput.value.trim();
        if (commentText) {
            const li = document.createElement('li');
            li.textContent = commentText;
            commentList.appendChild(li);

            commentInput.value = ''; // Clear the input
        }
    });
});
