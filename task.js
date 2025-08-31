document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('inptxt');
    const button = document.getElementById('botum');
    const list = document.getElementById('tasks');

    button.addEventListener('click', function() {
        const text = input.value.trim(); // Get the text and remove leading/trailing whitespace

        if (text !== '') { // Ensure the input is not empty
            const newListItem = document.createElement('li');
            newListItem.textContent = text;
            list.appendChild(newListItem);
            input.value = ''; // Clear the input field
        }
    });
});