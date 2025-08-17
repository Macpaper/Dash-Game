const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

ctx.fillStyle = "green"
ctx.fillRect(0, 0, canvas.width, canvas.height)

ctx.fillStyle = "blue"
ctx.fillRect(300, 400, 150, 350)

let x = 100
let y = canvas.height / 2
let up = false
let down = false

// Class - a blueprint for creating "Enemy" objects
// You can create as many "Enemy" objects as you want
// Each "Enemy" object has its own this.x and this.y variables.
// "Enemy" objects DO NOT SHARE this.x and this.y values
class Enemy {
    constructor() {
        this.x = canvas.width + Math.random() * 500
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 20 + 15
    }
}

let enemies = []

for (let i = 0; i < 10; i++) {
    let enemy1 = new Enemy() 
    enemies.push(enemy1)
}


function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    enemies.forEach(e => {
        ctx.fillStyle = "purple"
        ctx.beginPath()
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2)
        ctx.fill()
        e.x -= 15
        if (e.x < 0) {
            e.x = canvas.width + Math.random() * 500
        }
    })

    ctx.fillStyle = "red"
    ctx.beginPath()
    ctx.arc(x, y, 25, 0, Math.PI * 2)
    ctx.fill()

    if (up) {
        y -= 5
    }
    if (down) {
        y += 5
    }
}

setInterval(gameLoop, 17)

document.addEventListener("keydown", function(e) {
    console.log(e)
    if (e.key.toLowerCase() == "w") {
        up = true
    }
    if (e.key.toLowerCase() == "s") {
        down = true
    } 
})

document.addEventListener("keyup", function(e) {
    if (e.key.toLowerCase() == "w") {
        up = false
    }
    if (e.key.toLowerCase() == "s") {
        down = false
    } 
})