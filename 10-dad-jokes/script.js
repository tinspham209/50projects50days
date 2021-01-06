const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const url = "https://icanhazdadjoke.com";

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

function generateJoke() {
	const config = {
		headers: {
			Accept: "application/json",
		},
	};

	fetch(url, config)
		.then((res) => res.json())
		.then((data) => {
			jokeElement.innerHTML = data.joke;
		})
		.catch((error) => console.log("error: ", error));
}
