class Controls{
        constructor(app){
                this.app = app
                console.log("controls")
                this.app.calcBtn.addEventListener('click', event => {
                        console.log("calculate")
                })
                this.app.clrBtn.addEventListener('click', event => {
                        console.log("clear")
                })

        }
}

export default Controls