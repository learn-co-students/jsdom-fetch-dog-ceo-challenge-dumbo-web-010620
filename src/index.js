console.log('%c HI', 'color: firebrick')

let breeds = [] // irrelevant to Challenge 1

document.addEventListener('DOMContentLoaded', () => {
    // loadImages() // Challenge 1
    loadBreedOptions() // Challenge 2
    test()
})

let imgUrlObj
let breedObj

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch (imgUrl)
        .then(resp => resp.json())
        .then(json => {
            json.message.forEach(image => addImage(image))
            imgUrlObj = json
        })
}

function addImage(dogPicUrl) {
    let container = document.querySelector("#dog-image-container")
    let newImageEl = document.createElement("img")
    newImageEl.src = dogPicUrl
    container.appendChild(newImageEl)
}


function loadBreedOptions() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(resp => resp.json())
        .then(json => {
            breedObj = json.message
            for (const breed in breedObj) {
                addBreed(breed)
            }
        })
}

function addBreed(breed) {
    let container = document.querySelector("#dog-breeds")
    let newBreedEl = document.createElement("li")
    newBreedEl.innerText = breed
    newBreedEl.addEventListener("click", turnRed)
    container.appendChild(newBreedEl)
}


function turnRed(event) {
    console.log(event.target)
    event.target.style.color = 'red'
}

function test () {
    const breedLiObject = document.querySelector("#dog-breeds")
    console.log(breedLiObject)
    // for (const li in breedLiObject) { 
    //     console.log(breedLiObject[li]) 
    // }
}




    



// ------------------------------------------------------------------------------------------------------------------------------------------

// PROBLEM WITH loadBreedOptions

// json.message.forEach(breed => addBreed(breed)) 
// Uncaught (in promise) TypeError: json.message.forEach is not a function at index.js:38

// SOLUTION
// for (const property in object) {
//     console.log(`${property}: ${object[property]}`);
//   }


// ------------------------------------------------------------------------------------------------------------------------------------------

// BELOW IS ME NOT KNOWING HOW TO DO STUFF, SO I LOOKED AT THE SOLUTION AND FOLLOWED ALONG WITH CHALLENGE 1. THEN DID CHALLENGE 2 ON MY OWN :)
// let data = function fetchImage() {
    //     fetch("https://dog.ceo/api/breeds/image/random/4")
    //         .then(resp => resp.json())
    //         .then(json => renderImages(json))
    // }
    
    // data = data()
    // console.log(data)
    
    
    // function renderImages(json) {
        
        //     json.forEach(element => console.log(element))
        
        // const imageContainer = document.querySelector("#dog-image-container")
        // const newImageElement = document.createElement('?')
        
        
// }

// ------------------------------------------------------------------------------------------------------------------------------------------
