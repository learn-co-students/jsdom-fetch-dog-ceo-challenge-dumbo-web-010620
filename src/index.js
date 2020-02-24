



function showDogs(json){
    json.forEach(e => {
        let dc = document.getElementById("dog-image-container")
        let img = document.createElement("img")
        img.src = e
        dc.appendChild(img)
        
    })

}


function fetchDog(){
    return fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json => showDogs(json.message));   
}

    //console.log(json)
function fetchBreed(){
    return fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(json => showBreeds(json.message))

}

    function showBreeds(json){
    let breedArray = Object.keys(json)
    console.log(breedArray)
    breedArray.forEach(breed => {
    let db = document.getElementById("dog-breeds")
    let li = document.createElement("li")
    
    li.innerHTML = breed
    db.appendChild(li)

    li.addEventListener("click", event => {
        console.log(li.style.color = "red")
    })  
    
})
    


    let dogDrop = document.getElementById("breed-dropdown")
        dogDrop.addEventListener("change", event => {
            let userChoice = event.srcElement.value
            let dogBreedList = document.querySelector("#dog-breeds")
            dogBreedList.innerHTML = ""
            
            
            let fd = breedArray.filter(e => userChoice === e[0])
            fd.forEach(dog => {
                let li = document.createElement("li")
                li.innerHTML = dog
                console.log(li)
                dogBreedList.appendChild(li)
            })
            
            
        })
        
    }



    
document.addEventListener("DOMContentLoaded", () => {
    fetchDog()
    fetchBreed()
    
}) //end of doceventlistener
