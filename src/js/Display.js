import Point from "./Point.js";

class Display{
        constructor( app ){
                this.app = app;

                this.poly = document.createElementNS(
                        "http://www.w3.org/2000/svg", "polyline"
                )
                this.poly.setAttribute("id", "poly")

                this.app.isPoly = true
        }
        logTrades( _trade ){
                let _growth = Math.round( 
                                                        ( ( _trade.newBalance - this.app.deposit ) 
                                                        / this.app.deposit ) * 100 );
                let tradeTemp = `
                <div class="trade">
                        <p class="balance">${ _trade.initBalance }</p>
                        <p class="gain ${ _trade.tradeResult < 0 ? "loss" : "win" }">
                        ${ _trade.tradeResult }</p>
                        <p class="new-balance">
                        ${ _trade.newBalance <= 0 ? 0 : _trade.newBalance }</p>
                        <p class="growth">
                        ${ _growth }
                        </p>
                </div>
                `;
                this.app.tradesList.innerHTML += tradeTemp;
        }
        point(x, y, svgToDisplayOn){
                let newPoint = new Point(this.app, x, y)
                newPoint.draw(svgToDisplayOn)
                this.app.drawnPoints.push(newPoint)

        }
        drawPoints(_arr){
               _arr.forEach((val) => {
                this.point(val.x, val.y + this.app.intervals.bPad, this.app.mainSVG)
               })

               this.drawLine(this.app.drawnPoints)
        }
        drawLine(_arr){
                let _points = ""
                let Data = []
                _arr.forEach(val => {
                        Data.push(val.cx, Math.floor(val.cy))
                })

                _points = Data.join(" ")

                this.poly.setAttribute("points", _points)
                this.poly.setAttribute("fill", "none")
                this.poly.setAttribute("stroke", "black")
                this.poly.setAttribute("stroke-width", "2")
                this.app.mainSVG.appendChild(this.poly);

        }
}

export default Display;

