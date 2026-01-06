import { images } from './images.js'
import anim from './categories.js'

requestAnimationFrame(() => {
    
    anim()
})
// input sec
let input = document.getElementById("input")
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




let imageSec = document.getElementById("image-sec")    


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
        && birthday.style.color === "green")
    {
        imageSec.innerHTML = ""
        all.style.color = "black"
        cosmetics.style.color = "black"
        anime.style.color = "black"
        snacks.style.color = "black"
        native.style.color = "black"
    
    let men = images.filter((el) => {
       return el.category === "Anime" || el.category==="Native"
    })
        
    men.forEach((el) => {
        let image = document.createElement("img") 
        imageSec.appendChild(image)
        image.src = el.src
         image.classList.add("ace")
         image.classList.add("size-[70%]")
     })
    }
    // female adult and birthday
    if (female.style.color === "green"
        && adult.style.color === "green"
        && birthday.style.color === "green")
    {
        imageSec.innerHTML = ""
        all.style.color = "black"
        cosmetics.style.color = "black"
        anime.style.color = "black"
        snacks.style.color = "black"
        native.style.color = "black"
    

        
    let women = images.filter((el) => {
       return el.category === "cosmetics" || el.category==="snack"
    })
        
    women.forEach((el) => {
        let image = document.createElement("img") 
        imageSec.appendChild(image)
        image.src = el.src
         image.classList.add("ace")
        image.classList.add("size-[70%]")
         image.classList.add("button")
        
     })       
    }
})

// Filter
input.addEventListener("input", (el) => {
    let inputVal = input.value
    console.log(inputVal);
    imageSec.innerHTML = ""
    let inp = images.filter((el) => {    
    return console.log(inputVal === el.alt);
    })
    inp.forEach((el) => {
        let image = document.createElement("img") 
        imageSec.appendChild(image)
        image.src = el.src
         image.classList.add("size-[70%]")
         image.classList.add("ace")
     })
})