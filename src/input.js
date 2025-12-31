import {images} from './images.js'


// gift
let male = document.getElementById("male")
let female = document.getElementById("female")
let adult = document.getElementById("adult")
let child = document.getElementById("child")
let birthday = document.getElementById("birthday")
let random = document.getElementById("random")
let anniversary = document.getElementById("anniversary")
let gift = document.getElementById("gift")
let giftBtn = document.getElementById("giftbtn")

// category
let imageSec = document.getElementById("image-sec")    
let native = document.getElementById("native")
let cosmetics = document.getElementById("cosmetics")
let snacks = document.getElementById("snacks")
let anime = document.getElementById("anime")    



// male color
male.addEventListener("click", () => {
    male.style.color = "green"
    female.style.color = "black"
})

// female color
female.addEventListener("click", () => {
    female.style.color = "green"
    male.style.color = "black"
})

//adult color
adult.addEventListener("click", () => {
    adult.style.color = "green"
    child.style.color = "black"
})

// child color
child.addEventListener("click", () => {
    child.style.color = "green"
    adult.style.color = "black"
})

// birthday color
birthday.addEventListener("click", () => {
    birthday.style.color = "green"
    anniversary.style.color = "black"
    random.style.color = "black"
})

// anniversary color
anniversary.addEventListener("click", () => {
    anniversary.style.color = "green"
    birthday.style.color = "black"
    random.style.color = "black"
})

// random
random.addEventListener("click", () => {
    random.style.color = "green"
    anniversary.style.color = "black"
    birthday.style.color = "black"
})

// gift picker
giftBtn.addEventListener("click", () => {
    // male adult and birthday
    if (male.style.color === "green"
        && adult.style.color === "green"
        && birthday.style.color === "green") {
        gift.textContent = "Costume"
    }
    // female adult and birthday
    if (female.style.color === "green"
        && adult.style.color === "green"
        && birthday.style.color === "green") {
        gift.textContent = "Cosmetics"
    }
    
    
})

// Cosmetics sec
cosmetics.addEventListener("click", () => {
    cosmetics.style.color = "green"
    anime.style.color = "black"
    snacks.style.color = "black"
    native.style.color = "black"
    imageSec.classList.add("img")




    
    imageSec.innerHTML = ""
    let cosmetic = images.filter((el) => {
        
       return el.category === "cosmetics"
    })
    cosmetic.forEach((el) => {
        let image = document.createElement("img") 
        imageSec.appendChild(image)
        image.src = el.src
         image.classList.add("w-[30%]")
     })

    
})

// native sec
native.addEventListener("click", () => {
    native.style.color = "green"
    anime.style.color = "black"
    snacks.style.color = "black"
    cosmetics.style.color = "black"
    imageSec.classList.add("img")




    
    imageSec.innerHTML = ""
    let nativeSec = images.filter((el) => {
        
       return el.category === "Native"
    })
    nativeSec.forEach((el) => {
        let image = document.createElement("img") 
        imageSec.appendChild(image)
        image.src = el.src
         image.classList.add("w-[30%]")
     })

    
})