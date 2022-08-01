let button = document.getElementById("button");
let image = document.getElementById("image");
let pokeNumber = document.getElementById("number");
let pokeName = document.getElementById("name");


const changePokemon = async () => {
	let randomNumber = Math.ceil(Math.random() * 150) + 1; // 1 and 151

	let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

	let data = await fetch(requestString);//Wait until the fetch is finished before moving on
	console.log(data);

	let response = await data.json();
	console.log(response);

	image.src = response.sprites.front_default;
	pokeNumber.textContent = `#${response.id}`;
	pokeName.textContent = response.name;
};//Async Used to make it clear that the code contains unsynchronized code

changePokemon();
button.addEventListener("click", changePokemon);
