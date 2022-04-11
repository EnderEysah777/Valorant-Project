async function loadListing(url){
    //makes a request to the pokemon listing API url
    //gets the data from the request and sends it to displayListing()

    try{
        let response = await fetch(url);//1. Send http request and get response
        let pokemon = await response.json();//2. Get data from response
        displayListing(pokemon);// 3. Do something with the data
     }catch(e){
         console.log(e);//catch and log any errors
     }

}
loadListing("https://pokedextr-api.herokuapp.com/pokemon")

function displayListing(pokemon){
    //receives an array of pokemon objects and displays it on the page in #listing

    let result = document.querySelector('#listing');

    let html = '';// create html string
    for (let Pokemon of pokemon)
        html += `<tr><td><a href="#listing" id="${Pokemon.name}"onclick="getPokemon('${Pokemon.pid}')"class="collection-item">${Pokemon.name}</a></td></tr>`;

    result.innerHTML = html;
}

async function getPokemon(pid){
   //makes a request to the get pokemon detail API url
   //gets the data from the request and sends it to displayPokemon() 
   try{
    let response = await fetch("https://pokedextr-api.herokuapp.com/pokemon/"+ pid);//1. Send http request and get response
    let pokemon = await response.json();//2. Get data from response
    displayPokemon(pokemon);// 3. Do something with the data
 }catch(e){
     console.log(e);//catch and log any errors
 }


}

function displayPokemon(pokemon){
    //receives a pokemon object and displays its data on the page in #result
    
    let result = document.querySelector('#result');

    let html = '';// create html string
    html += `<div id="pokemon-detail" class="card col m12 l10 offset-l1" style="margin-top: 20px">
        <div class="card-image" >
            <img class="teal" src="${pokemon.image}" alt="${pokemon.name} Image">  
        </div>
        <div class="card-content" >
            <span class="card-title"><p>${pokemon.name} #${pokemon.pid}</p></span>
            <p> Type1: ${pokemon.type1}</p>
            <p> Weight: ${pokemon.weight}</p>
            <p> Height: ${pokemon.height}</p>
            <a onclick="catchPokemon(${pokemon.pid})" id="catchBtn" style="position:absolute; right:15px; bottom:80px"  class="btn-floating btn-large waves-effect waves-light red">
            </a>
        </div>
    </div>`;

    result.innerHTML = html;
}

// Bonus Functions

async function catchPokemon(pid){
    const id = getId();//gets the userid from the text field or prompts the user
    //prompts the user to enter a name
    //makes a request to the capture pokemon API url passing the name data in the body
}

async function getMyPokemon(){
    //makes a request to the get captured pokemon API url
    //get the data from the request and sends it to displayMyPokemon()
}

function displayMyPokemon(mypokemon){
    //receives an array of mypokemon objects and displays its data on the page in #myPokeListing
}

async function releasePokemon(box_id){
    const id = getId();//gets the userid from the text field or prompts the user
    //makes a request to the release pokemon API url then call getMyPokemon() to reload the table
}