console.log('%c HI', 'color: firebrick')
// dog fetching from imageURL
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"


// -------------------Dogs -------------------
const fetchDogs = () => {
    return fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderDogs(json.message))
}

const renderDogs = (dogsArray) => {
    const dogContainer = document.querySelector("#dog-image-container")

    dogsArray.forEach(dog => {
        let img = document.createElement("img")
        img.src = dog
        dogContainer.appendChild(img)
    })
}

// -----------------Breeds -------------------
const fetchBreed = () => {
    return fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => renderBreed(json.message))
}

const renderBreed = (object) => {
    const breedUl = document.querySelector("#dog-breeds")
    const breedsList = Object.keys(object)

    breedsList.forEach(breed => {
        let li = document.createElement("li")
        li.textContent = breed
        breedUl.appendChild(li)

        li.addEventListener("click", event => {
            li.style.color = "blue"
        })
    })
    // --------------- scoping to match all breed list by alphabet letter -----------
    const breedDropDown = document.querySelector("#breed-dropdown")

    breedDropDown.addEventListener("change", event=> {
        let userInput = event.target.value
        let filteredList = breedsList.filter(breed => userInput === breed[0])
        breedUl.innerHTML = ""

        filteredList.forEach(breed => {
            const li = document.createElement("li")
            li.textContent = breed
            breedUl.appendChild(li)
        })
    })

}

// Challenge 4
// Once we are able to load all of the dog breeds onto the page, add JavaScript so that the user can filter breeds that start with a particular letter using a dropdown.

// For example, if the user selects 'a' in the dropdown, only show the breeds with names that start with the letter a. For simplicity, the dropdown only includes the letters a-d. However, we can imagine expanding this to include the entire alphabet



document.addEventListener("DOMContentLoaded", () => {
    fetchDogs()
    fetchBreed()
})