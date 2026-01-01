// category
import { images } from './images.js'
let imageSec = document.getElementById("image-sec")    
let native = document.getElementById("native")
let cosmetics = document.getElementById("cosmetics")
let snacks = document.getElementById("snacks")
let anime = document.getElementById("anime") 
let all = document.getElementById("all")    


// all category
    all.style.color = "green"
let allImage = images.filter((el) => {
    return el.src
})
imageSec.innerHTML =""
allImage.map((el) => {
    imageSec.classList.add("img")
    let image = document.createElement("img") 
        imageSec.appendChild(image)
        image.src = el.src
         image.classList.add("ace")
         image.classList.add("size-[70%]")
})

// all sec
all.addEventListener("click", () => {
    cosmetics.style.color = "black"
    anime.style.color = "black"
    snacks.style.color = "black"
    native.style.color = "black"
    all.style.color = "green"
    imageSec.classList.add("img")

    imageSec.innerHTML = ""
    let allsec = images.filter((el) => {
       return el
    })
    allsec.forEach((el) => {
        let image = document.createElement("img") 
        imageSec.appendChild(image)
        image.src = el.src
         image.classList.add("ace")
         image.classList.add("size-[70%]")
     })
})


// Cosmetics sec
cosmetics.addEventListener("click", () => {
    cosmetics.style.color = "green"
    anime.style.color = "black"
    snacks.style.color = "black"
    native.style.color = "black"
    all.style.color = "black"
    imageSec.classList.add("img")
    
    imageSec.innerHTML = ""
    let cosmetic = images.filter((el) => {
       return el.category === "cosmetics"
    })
    cosmetic.forEach((el) => {
        let image = document.createElement("img") 
        imageSec.appendChild(image)
        image.src = el.src
         image.classList.add("ace")
         image.classList.add("size-[70%]")
     })
})

// native sec
native.addEventListener("click", () => {
    native.style.color = "green"
    anime.style.color = "black"
    snacks.style.color = "black"
    cosmetics.style.color = "black"
    all.style.color = "black"
    imageSec.classList.add("img")

 
    imageSec.innerHTML = ""
    let nativeSec = images.filter((el) => {  
       return el.category === "Native"
    })
    nativeSec.forEach((el) => {
        let image = document.createElement("img") 
        imageSec.appendChild(image)
        image.src = el.src
         image.classList.add("ace")
         image.classList.add("size-[70%]")
     })  
})

// snacks
snacks.addEventListener("click", () => {
    native.style.color = "black"
    anime.style.color = "black"
    snacks.style.color = "green"
    cosmetics.style.color = "black"
    all.style.color = "black"    
    imageSec.classList.add("img")
 
    imageSec.innerHTML = ""
    let snack = images.filter((el) => {
        
       return el.category === "snack"
    })
    snack.forEach((el) => {
        let image = document.createElement("img") 
        imageSec.appendChild(image)
        image.src = el.src
         image.classList.add("ace")
         image.classList.add("size-[80%]")
     })
})

// Anime
function anim() {
    anime.addEventListener("click", () => {
        cosmetics.style.color = "black"
        anime.style.color = "green"
        snacks.style.color = "black"
        native.style.color = "black"
        all.style.color = "black"
        imageSec.classList.add("img")
    
        imageSec.innerHTML = ""
        let animes = images.filter((el) => {
           return el.category === "Anime"
        })
        animes.forEach((el) => {
            let image = document.createElement("img") 
            imageSec.appendChild(image)
            image.src = el.src
             image.classList.add("size-[70%]")
             image.classList.add("ace")
         })
    })
}

export default anim
