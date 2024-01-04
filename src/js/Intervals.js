class Intervals{
        constructor(app, bigPad = 50, color = 'purple', thickness = '2'){
                this.app = app
                
                this.bPad = bigPad
                this.sPad = this.bPad / 2
                this.color = color
                this.t = thickness
                this.intStrike = 10

                this.app.axisHeight = this.app.height - this.bPad - this.sPad
                this.app.axisWidth = this.app.width - this.bPad - this.sPad
        }
        drawLine(x1, y1, x2, y2, svgToDisplayOn){
                let D = `M ${x1},${y1} L ${x2},${y2}`
                let path = document.createElementNS(
                        "http://www.w3.org/2000/svg",
                        'path'
                )
                path.setAttribute("d", D)
                path.setAttribute("stroke", this.color)
                path.setAttribute("stroke-width", this.t)
                
                svgToDisplayOn.appendChild(path)
        }
        
        draw(svgToDisplayOn){
                let xAxis = this.drawLine(this.bPad - this.intStrike , this.app.height - this.bPad,
                                                                this.app.width - this.sPad, this.app.height - this.bPad, 
                                                                svgToDisplayOn)
                let yAxis = this.drawLine(this.bPad, this.sPad, 
                                                                this.bPad, this.app.height - this.bPad + this.intStrike , 
                                                                svgToDisplayOn)
        }
        drawIntervals(){
                // X interval strikes
                // x cords will be variable
                // y cords = y1 will be height - bPad, y2 = y1 + intStrike
                
                // the drawable length of X
                let xLen = this.app.width - this.bPad - this.sPad

                // how many intervals to draw
                let xInterval = Math.floor(xLen / this.app.tradesTotal)

                // loop through the total number of trades
                for( let i = 0; i <= this.app.tradesTotal; i++){
                        let line = this.drawLine( i * xInterval + this.bPad, 
                                this.app.height - this.bPad, i * xInterval + this.bPad, 
                                this.app.height - this.bPad +  this.intStrike / 2, this.app.mainSVG)
                }

                // y interval a bit tricky
                // get all the trade balances
                let tradeBalances = []
        
        }
}

export default Intervals