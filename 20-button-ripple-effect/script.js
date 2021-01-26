const buttons = document.querySelectorAll(".ripple");
console.log("buttons: ", buttons);

buttons.forEach((button) => {
	button.addEventListener("click", (event) => {
		const x = event.clientX;
		console.log("x: ", x);
		const y = event.clientY;
		console.log("y: ", y);

		const buttonTop = event.target.offsetTop;
		const buttonLeft = event.target.offsetLeft;

		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;

		const circle = document.createElement("span");

		circle.classList.add("circle");
		circle.style.top = yInside + "px";
		circle.style.left = xInside + "px";

		button.appendChild(circle);

		setTimeout(() => {
			circle.remove();
		}, 500);
	});
});
