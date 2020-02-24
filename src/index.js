
function fetchDogs() {
    return fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => renderDogs(json.message)); //turning it into an array here
}

function renderDogs(array) { //basically the array we fetched on line 4
    //find parent
    const dogContainer = document.querySelector('#dog-image-container')
    //need an element to attach the array 
    //iterate through an array
    array.forEach(dog => {
        let img = document.createElement('img');
        img.src = dog;
        dogContainer.appendChild(img)
    })
}

function fetchBreed(){
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderBreed(json.message));
}

function renderBreed(json){

    //iterate thgrough an array
    const breedUl = document.querySelector('#dog-breeds')
    let li = document.createElement('li')
    const breedList = Object.keys(json)
    breedList.forEach(breed => {
        let li = document.createElement('li')
        li.textContent = breed 
        breedUl.appendChild(li)
        li.addEventListener("click", event => {
            li.style.color = "purple"
        })    
    })

    const breedDropDown = document.querySelector("#breed-dropdown")

    breedDropDown.addEventListener("change", e =>{
        let userInput = e.target.value
        let filteredList = breedList.filter(breed => userInput === breed[0])
        breedUl.innerHTML =  ""

        filteredList.forEach(breed => {
            const li = document.createElement('li')
            li.textContent = breed
            breedUl.appendChild(li)
        })
    })

}

document.addEventListener('DOMContentLoaded', () => {
    fetchDogs()
    fetchBreed()
})