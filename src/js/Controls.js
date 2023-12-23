class Controls{
        constructor(app){
                this.app = app
                console.log("controls")
                this.app.calculateBtn.addEventListener('click', event => {
                        this.app.calculate()

                       this.app.trades = []
                })
                this.app.clearBtn.addEventListener('click', event => {
                        console.log("clear")
                })

        }
}

export default Controls