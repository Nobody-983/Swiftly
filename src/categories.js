// category
import { images } from './images.js'
let imageSec = document.getElementById("image-sec")    
let native = document.getElementById("native")
let cosmetics = document.getElementById("cosmetics")
let snacks = document.getElementById("snacks")
let anime = document.getElementById("anime") 
let all = document.getElementById("all")    
let womenShoes = document.getElementById("women")    
let bags = document.getElementById("bags")    
let menShoes = document.getElementById("men") 
let perfume = document.getElementById("perfume")   


// all category
    all.style.color = "gold"
let allImage = images.filter((el) => {
    return el.featured === "all"
})
imageSec.innerHTML =""
allImage.map((el) => {
    imageSec.classList.add("img")
    let image = document.createElement("img")
        let a = document.createElement("a")
        a.appendChild(image)
        imageSec.appendChild(a)
        a.href = el.link
    image.src = el.src
    imageSec.appendChild(a)
            let p = document.createElement("p")
            p.textContent = el.name
            p.style.color = "brown"
        p.classList.add("name")
            a.appendChild(p)
        image.classList.add("ace")
        image.classList.add("button")
        image.classList.add("test")
         image.classList.add("size-[70%]")
    a.classList.add("size-[100%]")
})

// all sec
all.addEventListener("click", () => {
    cosmetics.style.color = "black"
    anime.style.color = "black"
    snacks.style.color = "black"
    native.style.color = "black"
    all.style.color = "gold"
    menShoes.style.color = "black"
    bags.style.color = "black"
    womenShoes.style.color = "black"
    perfume.style.color = "black"
    imageSec.classList.add("img")
    
    imageSec.innerHTML = ""
    let allsec = images.filter((el) => {
        return el.featured === "all"
    })
    allsec.forEach((el) => {
        let image = document.createElement("img")
        let a = document.createElement("a")
        a.appendChild(image)
        imageSec.appendChild(a)
        a.href = el.link
        image.src = el.src
        imageSec.appendChild(a)
            let p = document.createElement("p")
            p.textContent = el.name
        p.classList.add("name")
            p.style.color = "brown"
            a.appendChild(p)
        image.classList.add("ace")
        image.classList.add("button")
        image.classList.add("test")
         image.classList.add("size-[70%]")
         a.classList.add("size-[100%]")
     })
})


// Cosmetics sec
cosmetics.addEventListener("click", () => {
    cosmetics.style.color = "gold"
    menShoes.style.color = "black"
    bags.style.color = "black"
    womenShoes.style.color = "black"
    anime.style.color = "black"
    snacks.style.color = "black"
    native.style.color = "black"
    perfume.style.color = "black"
    all.style.color = "black"
    imageSec.classList.add("img")
    
    imageSec.innerHTML = ""
    let cosmetic = images.filter((el) => {
       return el.category === "Cosmetics"
    })
    cosmetic.forEach((el) => {
        let image = document.createElement("img")
        let a = document.createElement("a")
        a.appendChild(image)
        imageSec.appendChild(a)
        a.href = el.link
        image.src = el.src
        imageSec.appendChild(a)
            let p = document.createElement("p")
            p.textContent = el.name
            p.style.color = "brown"
        p.classList.add("name")
            a.appendChild(p)
        image.classList.add("ace")
        image.classList.add("button")
        image.classList.add("test")
         image.classList.add("size-[70%]")
         a.classList.add("size-[100%]")
     })
})

// native sec
native.addEventListener("click", () => {
    native.style.color = "gold"
    menShoes.style.color = "black"
    bags.style.color = "black"
    womenShoes.style.color = "black"
    anime.style.color = "black"
    perfume.style.color = "black"
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
        let a = document.createElement("a")
        a.appendChild(image)
        imageSec.appendChild(a)
        a.href = el.link
        image.src = el.src
        imageSec.appendChild(a)
            let p = document.createElement("p")
            p.textContent = el.name
            p.style.color = "brown"
        p.classList.add("name")
            a.appendChild(p)
        image.classList.add("ace")
        image.classList.add("button")
        image.classList.add("test")
         image.classList.add("size-[70%]")
         a.classList.add("size-[100%]")
     })  
})

// Women shoes
womenShoes.addEventListener("click", () => {
    native.style.color = "black"
    perfume.style.color = "black"
    anime.style.color = "black"
    menShoes.style.color = "black"
    bags.style.color = "black"
    womenShoes.style.color = "gold"
    cosmetics.style.color = "black"
    snacks.style.color = "black"
    all.style.color = "black"    
    imageSec.classList.add("img")
    womenShoes.classList.toggle("text-amber-200")
 
    imageSec.innerHTML = ""
    let heels = images.filter((el) => {
        
       return el.category === "Heels"
    })
    heels.forEach((el) => {
        let image = document.createElement("img")
        let a = document.createElement("a")
        a.appendChild(image)
        imageSec.appendChild(a)
        a.href = el.link
        image.src = el.src
        imageSec.appendChild(a)
            let p = document.createElement("p")
            p.textContent = el.name
        p.classList.add("name")
        a.appendChild(p)
            p.style.color = "brown"
        image.classList.add("ace")
        image.classList.add("button")
        image.classList.add("test")
         image.classList.add("size-[70%]")
         a.classList.add("size-[100%]")
     }).join('')
})

// snacks
snacks.addEventListener("click", () => {
    native.style.color = "black"
    menShoes.style.color = "black"
    perfume.style.color = "black"
    bags.style.color = "black"
    womenShoes.style.color = "black"
    anime.style.color = "black"
    snacks.style.color = "gold"
    cosmetics.style.color = "black"
    all.style.color = "black"    
    imageSec.classList.add("img")
    snacks.classList.toggle("text-amber-200")
 
    imageSec.innerHTML = ""
    let snack = images.filter((el) => {
        
       return el.category === "Snacks"
    })
    snack.forEach((el) => {
        let image = document.createElement("img")
        let a = document.createElement("a")
        a.appendChild(image)
        imageSec.appendChild(a)
        a.href = el.link
        image.src = el.src
        imageSec.appendChild(a)
            let p = document.createElement("p")
            p.textContent = el.name
        p.classList.add("name")
        a.appendChild(p)
            p.style.color = "brown"
        image.classList.add("ace")
        image.classList.add("button")
        image.classList.add("test")
         image.classList.add("size-[70%]")
         a.classList.add("size-[100%]")
     }).join('')
})


// bags
bags.addEventListener("click", () => {
    perfume.style.color = "black"
    bags.style.color = "gold"
    menShoes.style.color = "black"
    womenShoes.style.color = "black"
    anime.style.color = "black"
    snacks.style.color = "black"
    native.style.color = "black"
    cosmetics.style.color = "black"
    all.style.color = "black"
    imageSec.classList.add("img")

 
    imageSec.innerHTML = ""
    let bag = images.filter((el) => {  
       return el.category === "Bags"
    })
    bag.forEach((el) => {
        let image = document.createElement("img")
        let a = document.createElement("a")
        a.appendChild(image)
        imageSec.appendChild(a)
        a.href = el.link
        image.src = el.src
        imageSec.appendChild(a)
            let p = document.createElement("p")
            p.textContent = el.name
        p.classList.add("name")
        a.appendChild(p)
            p.style.color = "brown"
        image.classList.add("ace")
        image.classList.add("button")
        image.classList.add("test")
         image.classList.add("size-[70%]")
         a.classList.add("size-[100%]")
     })  
})

// men shoes
menShoes.addEventListener("click", () => {
    menShoes.style.color = "gold"
    bags.style.color = "black"
    womenShoes.style.color = "black"
    anime.style.color = "black"
    snacks.style.color = "black"
    perfume.style.color = "black"
    native.style.color = "black"
    cosmetics.style.color = "black"
    all.style.color = "black"
    imageSec.classList.add("img")

 
    imageSec.innerHTML = ""
    let men = images.filter((el) => {  
       return el.category === "Men Shoes"
    })
    men.forEach((el) => {
        let image = document.createElement("img")
        let a = document.createElement("a")
        a.appendChild(image)
        imageSec.appendChild(a)
        imageSec.appendChild(a)
            let p = document.createElement("p")
        p.textContent = el.name
            p.style.color = "brown"
        p.classList.add("name")
            a.appendChild(p)
        a.href = el.link
        image.src = el.src
        image.classList.add("ace")
        image.classList.add("button")
        image.classList.add("test")
         image.classList.add("size-[70%]")
         a.classList.add("size-[100%]")
     })  
})
// perfume
perfume.addEventListener("click", () => {
    perfume.style.color = "gold"
    menShoes.style.color = "black"
    bags.style.color = "black"
    womenShoes.style.color = "black"
    anime.style.color = "black"
    snacks.style.color = "black"
    native.style.color = "black"
    cosmetics.style.color = "black"
    all.style.color = "black"
    imageSec.classList.add("img")

 
    imageSec.innerHTML = ""
    let perf = images.filter((el) => {  
       return el.category === "perfume"
    })
    perf.forEach((el) => {
        let image = document.createElement("img")
        let a = document.createElement("a")
        a.appendChild(image)
        imageSec.appendChild(a)
        imageSec.appendChild(a)
            let p = document.createElement("p")
        p.textContent = el.name
            p.style.color = "brown"
        p.classList.add("name")
            a.appendChild(p)
        a.href = el.link
        image.src = el.src
        image.classList.add("ace")
        image.classList.add("button")
        image.classList.add("test")
         image.classList.add("size-[70%]")
         a.classList.add("size-[100%]")
     })  
})


// Anime
function anim() {
    anime.addEventListener("click", () => {
        cosmetics.style.color = "black"
    perfume.style.color = "black"
        anime.style.color = "gold"
        menShoes.style.color = "black"
        bags.style.color = "black"
        womenShoes.style.color = "black"
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
        let a = document.createElement("a")
        a.appendChild(image)
            imageSec.appendChild(a)
            let p = document.createElement("p")
            p.textContent = el.name
            p.style.color = "brown"
            a.appendChild(p)
        p.classList.add("name")
        a.href = el.link
        image.src = el.src
        image.classList.add("ace")
        image.classList.add("button")
        image.classList.add("test")
         image.classList.add("size-[70%]")
         a.classList.add("size-[100%]")
         })
    })
}

export default anim
