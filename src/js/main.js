import Display from "./Display.js";
import Controls from "./Controls.js";

class App{
        constructor(){
                //get all inputs
                this.deposit = document.getElementById( "deposit" ).value;
                this.risk = document.getElementById( "risk" ).value;
                this.reward = document.getElementById( "reward" ).value;
                this.tradesTotal = document.getElementById( "tradesTotal" ).value;

                this.calculateBtn = document.getElementById("calcBtn")
                this.clrBtn = document.getElementById("clrBtn")
                
                this.tradesList = document.getElementById( "tradesList" );
                this.canvas = document.getElementById( "myCanvas" );
                this.context = this.canvas.getContext( "2d" );

                this.display = new Display( this );
                this.controls = new Controls( this );
        }

}


// initializing the app
const app = new App()
console.log("main")