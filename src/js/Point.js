import PopUp from "./PopUp.js";

class Point{
        constructor(app, x, y, r = 10, color = "black", color2 = "yellow", fill = true, stroke = false){
                this.app = app;
                this.point = document.createElementNS(
                        "http://www.w3.org/2000/svg","circle");
                this.isFill = fill;
                this.isStroke = stroke;
                this.cx = x;
                this.cy = y;
                this.r =  r * (1 - (1 / 100) * this.app.tradesTotal);
                this.fill = color;
                this.stroke = color2;

        }
        draw(svgToDisplayOn){
                this.point.setAttribute("cx", this.cx)
                this.point.setAttribute("cy", this.cy)
                this.point.setAttribute("r", `${this.r}`)
                
                if(this.isFill){
                        this.point.setAttribute("fill", `${this.fill}`)
                }
                if(this.isStroke){
                        this.point.setAttribute("stroke", `${this.stroke}`)
                }
                this.point.setAttribute("className", "point")

                svgToDisplayOn.appendChild(this.point)

                this.point.addEventListener("mouseenter", () => {
                        //this.app.isDisplay = true
                       // this.app.pop.showPopUp(this.cx, this.cy)
                })
                this.point.addEventListener("mouseleave", () => {
                        //this.app.isDisplay = false
                })
        }
}

export default Point