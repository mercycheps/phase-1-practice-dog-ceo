console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        const imageContainer = document.getElementById("dog-image-container");
        data.message.forEach(imgUrl => {
            const img = document.createElement("img");
            img.src = imgUrl;
            img.alt = "A dog";
            img.style.width = "250px";
            imageContainer.appendChild(img);
        
        })
    });
});

document.addEventListener("DOMContentLoaded",() => {
const breedURL = "https://dog.ceo/api/breeds/list/all";
})
fetch(breedUrl)
.then (response => response.json())
.then(data => {
    const imageContainer = document.getElementById("dog-image-container");
    data.message.forEach(breedUrl => {
        const img = document.createElement("img")
        img.src = breedUrl;
        img.alt = "A dog";
          
    })

})      


