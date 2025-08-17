export default class Enemy {
    constructor() {
        this.x = 2000 + Math.random() * 500;
        this.startX = this.x
        this.y = Math.random() * 1000
    }
    update() {
        this.x -= 15
        if (this.x <= 0) {
            this.x = 2000 + Math.random() * 500
            this.y = Math.random() * 1000
        }
    }
    draw(ctx) {
        ctx.fillStyle = "red"
        ctx.beginPath()
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2)
        ctx.fill()
    }
}