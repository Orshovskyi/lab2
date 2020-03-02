class figure{
    color;
    radius;
    left = 50;
    top = 50;
    bishop = document.querySelector('.bishop');
    rotate = 0;
    constructor(){
        this.radius = 50;
    }
    setColor(colour){
        this.color = colour;
        this.changeColor();
    }
    changeColor(){
            this.bishop.style.color = this.color;
    }
    moveLeft(){
        this.left++;
        this.bishop.style.left = this.left + 'px';

    }
    moveUp(){
        this.top++;
        this.bishop.style.top = this.top + 'px';

    }
    moveRight(){
        this.left--;
        this.bishop.style.left = this.left + 'px';

    }
    moveDown(){
        this.top--;
        this.bishop.style.top = this.top + 'px';

    }
    enlarge(){
        this.radius++;
        this.bishop.querySelector('i').style.fontSize = (this.radius) + 'px';
    }
    reduce(){
        this.radius--;
        this.bishop.querySelector('i').style.fontSize = (this.radius) + 'px';

    }
    rotateClockwise(){
        this.rotate++;
        this.bishop.style.transform = "rotate("+this.rotate +"deg)"
    }
    rotateCounterclockwise(){
        this.rotate--;
        this.bishop.style.transform = "rotate("+this.rotate +"deg)"
    }
}
let figureBishop = new figure();
document.body.onkeydown = function (ev)
{
    var e = window.event || ev,
        p = 'px', K = e.keyCode;
    if (K == 39) {figureBishop.moveLeft()}
    if (K == 40) {figureBishop.moveUp()}
    if (K == 37) {figureBishop.moveRight()}
    if (K == 38) {figureBishop.moveDown()}
    if (K == 107) {figureBishop.enlarge()} //+
    if (K == 109) {figureBishop.reduce()}  //-
    if (K == 106) {figureBishop.rotateCounterclockwise()}
    if (K == 111) {figureBishop.rotateClockwise()}
};
document.getElementById('changeColorButton').addEventListener('click', () =>{
    figureBishop.setColor( document.getElementById('colorField').value);
})