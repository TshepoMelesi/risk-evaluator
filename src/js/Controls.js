class Controls{
        constructor(app){
                this.app = app;

                // handle Calculate Button
                this.app.calculateBtn.addEventListener('click', event => {
                        this.app.mainSVG.innerHTML = ""
                        this.app.trades = [];
                        this.app.tradesList.innerHTML = '';
                        this.app.calculate();

                       this.app.intervals.draw(this.app.mainSVG)
                       this.app.intervals.drawIntervals()
                })

                // handle Clear Button
                this.app.clearBtn.addEventListener('click', event => {
                        this.app.trades = [];
                        this.app.tradesList.innerHTML = '';
                })

        }
}

export default Controls;