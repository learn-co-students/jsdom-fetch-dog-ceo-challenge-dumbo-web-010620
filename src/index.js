// console.log('%c HI', 'color: firebrick')


fetch("https://dog.ceo/api/breeds/image/random/4")
.then(resp => resp.json())
.then(json => renderImg(json.message));


function renderImg(image){
    const img = document.querySelector("#dog-image-container");
    image.forEach(e => {
        let element = document.createElement("img");
        element.src = e;
        img.appendChild(element);
    });
}