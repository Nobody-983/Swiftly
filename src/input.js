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
    male.style.color = "gold"
    female.style.color = "black"
})

// female color
female.addEventListener("click", () => {
    female.style.color = "gold"
    male.style.color = "black"
})

//adult color
adult.addEventListener("click", () => {
    adult.style.color = "gold"
    child.style.color = "black"
})

// child color
child.addEventListener("click", () => {
    child.style.color = "gold"
    adult.style.color = "black"
})

// birthday color
birthday.addEventListener("click", () => {
    birthday.style.color = "gold"
    anniversary.style.color = "black"
    random.style.color = "black"
})

// anniversary color
anniversary.addEventListener("click", () => {
    anniversary.style.color = "gold"
    birthday.style.color = "black"
    random.style.color = "black"
})

// random
// random.addEventListener("click", () => {
//     random.style.color = "gold"
//     anniversary.style.color = "black"
//     birthday.style.color = "black"
// })

// gift picker
giftBtn.addEventListener("click", () => {
    // male adult and birthday
    if (male.style.color === "gold"
        && adult.style.color === "gold"
        && birthday.style.color === "gold")
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
        let a = document.createElement("a")
        a.appendChild(image)
        imageSec.appendChild(a)
        a.href = el.link
        image.src = el.src
        image.classList.add("ace")
        image.classList.add("button")
        image.classList.add("test")
         image.classList.add("size-[70%]")
         a.classList.add("size-[100%]")
     })
    }
    // female adult and birthday
    if (female.style.color === "gold"
        && adult.style.color === "gold"
        && birthday.style.color === "gold")
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
        let a = document.createElement("a")
        a.appendChild(image)
        imageSec.appendChild(a)
        a.href = el.link
        image.src = el.src
        image.classList.add("ace")
        image.classList.add("button")
        image.classList.add("test")
         image.classList.add("size-[70%]")
         a.classList.add("size-[100%]")
        
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
        let a = document.createElement("a")
        a.appendChild(image)
        imageSec.appendChild(a)
        a.href = el.link
        image.src = el.src
        image.classList.add("ace")
        image.classList.add("button")
        image.classList.add("test")
         image.classList.add("size-[70%]")
         a.classList.add("size-[100%]")
     })
})