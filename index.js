let message = document.querySelector("#message")

function addMovie(event) {
    event.preventDefault();
    let inputField = document.querySelector('input');
    const movie = document.createElement('li');

    const movieTitle = document.createElement("span");
    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);

    const movieList = document.querySelector("ul");
    movieList.appendChild(movie);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    deleteButton.addEventListener('click', deleteMovie);
    movie.appendChild(deleteButton)
}

const form = document.querySelector('form')
form.addEventListener('submit', addMovie)

function deleteMovie(event) {
    event.target.parentNode.remove()
    revealMessage()
    message.textContent = `${event.target.parentNode.childNodes[0].textContent} Deleted!`
}

function crossOffMovie(event) {
    event.target.classList.toggle('checked')
    if (event.target.classList.contains('checked')) {
        message.textContent = `${event.target.textContent} watched!`
    } else {
        message.textContent = `${event.target.textContent} Movie added back!`
    }
    revealMessage()
}

function revealMessage() {
    message.classList.remove('hide')
    setTimeout(() => { message.classList.add('hide') }, 3000);
}

// function addHideButton() {
//     message.classList.add('hide')
// }
