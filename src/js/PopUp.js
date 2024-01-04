class PopUp {
        constructor(app, x, y){
                this.app = app;
                this.x = x;
                this.y = y;
                this.r = 50;
                this.fill = "black"
                this.popUp = document.createElementNS(
                        "http://www.w3.org/2000/svg", "circle");
                
                        
        }
        setCords(_x, _y){
                this.x = _x;
                this.y = _y;
        }
        drawPopUp(){
                this.popUp.setAttribute("cx", `${this.x}`);
                this.popUp.setAttribute("cy", `${this.y}`);
                this.popUp.setAttribute("r", `${this.r}`);
                this.popUp.setAttribute("fill", `${this.fill}`);
        }
        showPopUp(_atX, _atY){
                this.setCords(_atX + 100, _atY + 100);
                this.drawPopUp();

                this.app.mainSVG.appendChild(this.popUp);
        }
}

export default PopUp;