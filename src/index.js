function fetchDogs() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => renderDogs(json.message)); //turning it into an array here
}

function renderDogs(array) { //basically the array we fetched on line 4
    //find parent
    const dogContainer = document.querySelector("#dog-image-container") 
    //need an element to attach the array 
    //iterate through an array
    array.forEach(dog => {
        let img = document.createElement("img");
        img.src = dog;
        dogContainer.appendChild(img)
    }) 
}

function fetchBreed() {
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => renderBreed(json.message))
}

function renderBreed(object) {
    //find a parent element
    const breedUl = document.querySelector("#dog-breeds")
    //create an element
    //iterate through an array but this time the array is in an object
    const breedList = Object.keys(object) //return value is an array
    breedList.forEach(breed => {
        let li = document.createElement("li")
        li.textContent = breed
        breedUl.appendChild(li)

        li.addEventListener("click", event => {
            li.style.color = "orange";
        })
    })

    const breedDropDown = document.querySelector("#breed-dropdown") 
    breedDropDown.addEventListener("change", event => {
        let userInput = event.srcElement.value
        let filteredList = breedList.filter(breed => userInput === breed[0])
        breedUl.innerHTML = " "

        filteredList.forEach(breedli => {
            const li = document.createElement('li')
            li.textContent = breedli
            breedUl.appendChild(li)
        })

    })




}




document.addEventListener("DOMContentLoaded", () => {
    fetchDogs()
    fetchBreed()
})