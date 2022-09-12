




let currentPokemon; 
let currentPokemonImg; 



async function loadPokemon() {
    let url  = 'https://pokeapi.co/api/v2/pokemon/1'; 
    let response = await fetch(url);
        currentPokemon = await response.json();
        console.log('loaded Pokemon', currentPokemon); 


        renderPokemonCard(); 
        loadStats(); 
        loadDescription(); 
}


function renderPokemonCard() {
    document.getElementById('pokemon-name').innerHTML = currentPokemon['name']; 
    document.getElementById('current-pokemon-img').src =  currentPokemon['sprites']['other']['official-artwork']['front_default'];
}

function loadStats() {
    let hp = currentPokemon['stats'][0]['base_stat']; 
    let attack = currentPokemon['stats'][1]['base_stat']; 
    let defense = currentPokemon['stats'][2]['base_stat'];
    let specialattack = currentPokemon['stats'][3]['base_stat']; 
    let specialdefense = currentPokemon['stats'][4]['base_stat']; 
    let speed = currentPokemon['stats'][5]['base_stat']; 
    let maxhp = 255; 
    let maxattack = 190; 
    let maxdefense = 230; 
    let maxspecialattack = 180; 
    let maxdefensespecialdefense = 230; 
    let maxspeed = 200;
    let percenthp = hp / maxhp * 100; 
    let percentattack = attack / maxattack * 100; 
    let percentdefense = defense / maxdefense * 100; 
    let percentspecialattack = specialattack / maxspecialattack * 100; 
    let percentspecialdefense = specialdefense / maxdefensespecialdefense * 100; 
    let percentspeed = speed / maxspeed * 100; 
    document.getElementById('stats').innerHTML =`
    <span class="stats-name"> HP </span> 
    <div class="progress">
    <div class="progress-bar bg-success" role="progressbar" style="width: ${percenthp}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${hp}</div>
    </div>
    <span class="stats-name"> Attack </span>  <div class="progress">
     <div class="progress-bar bg-danger" role="progressbar" style="width: ${percentattack}%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${attack}</div>
     </div>
     <span class="stats-name">Defense </span> <div class="progress">
    <div class="progress-bar bg-info" role="progressbar" style="width: ${percentdefense}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">${defense}</div>
     </div>
     <span class="stats-name">special-attack </span> <div class="progress">
    <div class="progress-bar bg-specialattack" role="progressbar" style="width: ${percentspecialattack}%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">${specialattack}</div>
     </div>
     <span class="stats-name">special-defense </span> <div class="progress">
    <div class="progress-bar bg-specialdefense" role="progressbar" style="width: ${percentspecialdefense}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${specialdefense}</div>
     </div>
     <span class="stats-name">speed </span> <div class="progress">
    <div class="progress-bar bg-warning" role="progressbar" style="width: ${percentspeed}%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">${speed}</div>
  </div>
   `; 
}


async function loadDescription() {
    let urlDescription  = 'https://pokeapi.co/api/v2/pokemon-species/1/';  // allows to retrieve the specific data
    let response = await fetch(urlDescription);
        currentDescription = await response.json();
        console.log('loaded PokemonDescription', currentDescription); 
 
        document.getElementById('pokemon-description').innerHTML = currentDescription['flavor_text_entries'][11]['flavor_text']; 
}n