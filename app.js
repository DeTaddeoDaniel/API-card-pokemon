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

        var id = getRandomInt(1, 150);
        console.log(id);

        const res = await fetch('https://pokeapi.co/api/v2/pokemon/'+id);
        const data = await res.json();

        console.log(data.id + ' : ' + data.name);

        pintarCard(data);

    } catch(e){
        console.log(e);
    }

}

// starting page
$(document).ready(fetchData());


// pintar carta
const pintarCard = (pokemon) => {
    // test ingresso
    console.log(pokemon);
    // dove lo metto
    const flex = document.querySelector('.flex');
    // cattura del template
    const template = document.querySelector('#template-card').content;
    // clona template
    const clone = template.cloneNode(true);
    // fare un fragment
    const fragment = document.createDocumentFragment();

    clone.querySelector('.card-body img').setAttribute('src', pokemon.sprites.other.dream_world.front_default);
    
    fragment.appendChild(clone);

    flex.appendChild(fragment);
}