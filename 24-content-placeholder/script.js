const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2000);

function getRandomNumber() {
	return Math.floor(Math.random() * 99) + 1;
}

function getData() {
	header.innerHTML =
		'<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="img content"/>';
	title.innerHTML = "Lorem ipsum dolor sit amet";
	excerpt.innerHTML =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis";
	profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg" alt="profile_img"/>`;
	name.innerText = `Tins Pham`;
	date.innerHTML = "28 Jan, 2021";

	animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg"));
	animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));
}
