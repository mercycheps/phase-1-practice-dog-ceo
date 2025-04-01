console.log('%c HI', 'color: firebrick')
// fetching images of dogs
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
    // fetching breed of dogs
    const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(breedUrl)
.then (response => response.json())
.then(data => {
    const imageContainer = document.getElementById("dog-image-container");
   console.log(data)
   for (let i in data.message){
    console.log(i);
   }
})
});
// Funtion of breed list
 function renderBreeds(breeds) {
    breedList.innerHTML = "";
    breeds.forEach(breed => {
        const li = document.createElement("li");
            li.textContent = breed;
            li.style.cursor = "pointer";
            li.addEventListener("click", () => {
                li.style.color = "blue";
            });
            breedList.appendChild(li);

    });
 }
 // Event listener to filter breed
 breedDropdown.addEventListener("change", (event) => {
    const selectedLetter = event.target.value;
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        const filteredBreeds = Object.keys(data.message).filter(breed => breed.startsWith(selectedLetter));
        renderBreeds(filteredBreeds);
    })

 })


 







    


