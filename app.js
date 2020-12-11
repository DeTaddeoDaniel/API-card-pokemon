// generatoren numeri casuali
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

// chiamata API
// async -> espera data in attesa e poi va al successivo
// fetch -> llama al servidor y espera la respuesta
const fetchData = async ()=> {
    
    try{

        var number = getRandomInt(1, 150);
        console.log(number);

        const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+number);
        const data = await res.json();
        console.log(data);

    } catch(error){
        console.log(error)
    }

}

// starting page
$(document).ready(fetchData());