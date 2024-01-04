class Controls{
        constructor(app){
                this.app = app;

                // handle Calculate Button
                this.app.calculateBtn.addEventListener('click', event => {
                        this.app.drawnPoints = []
                        this.app.mainSVG.innerHTML = ""
                        this.app.trades = [];
                        this.app.tradesList.innerHTML = '';
                        let tradesArr = this.app.calculate();

                       this.app.intervals.draw(this.app.mainSVG)
                       this.app.intervals.drawIntervals()

                       //console.log(tradesArr.length)
                       this.app.points = this.app.calculator.calcPoints(
                                                                tradesArr, 
                                                                this.app.axisHeight, 
                                                                this.app.axisWidth)
                        this.app.display.drawPoints(this.app.points)
                })

                // handle Clear Button
                this.app.clearBtn.addEventListener('click', event => {
                        this.app.trades = [];
                        this.app.tradesList.innerHTML = '';
                })

                this.app.mainSVG.addEventListener("mousemove", e => {
                        this.app.mouseX = Math.floor(
                                e.x - this.app.mainSVG.getBoundingClientRect().x)
                        this.app.mouseY = Math.floor(
                                e.y - this.app.mainSVG.getBoundingClientRect().y)

                        if(this.app.isDisplay){
                                console.log("moving")
                        }
                })

        }
}

export default Controls;