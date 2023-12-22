import Calculator from "./Calculator.js";
import Display from "./Display.js";
import Controls from "./Controls.js";

class App{
        constructor(){
                //get all inputs
                this.deposit = Number(document.getElementById( "deposit" ).value);
                this.risk = Number(document.getElementById( "risk" ).value);
                this.reward = Number(document.getElementById( "reward" ).value);
                this.tradesTotal = Number(document.getElementById( "tradesTotal" ).value);

                this.calculateBtn = document.getElementById("calcBtn");
                this.clearBtn = document.getElementById("clrBtn");
                
                this.tradesList = document.getElementById( "tradesList" );
                this.canvas = document.getElementById( "myCanvas" );
                this.context = this.canvas.getContext( "2d" );

                this.trades = []

                this.calculator = new Calculator( this );
                this.display = new Display( this );
                this.controls = new Controls( this );
        }
        setInputs(){
                this.deposit = Number(document.getElementById( "deposit" ).value);
                this.risk = Number(document.getElementById( "risk" ).value);
                this.reward = Number(document.getElementById( "reward" ).value);
                this.tradesTotal = Number(document.getElementById( "tradesTotal" ).value);
        }
        calculate(){
                this.setInputs();
                for( let i = 0; i < this.tradesTotal; i++ ){
                        let ran = this.calculator.isWin() ? "win" : "loss";
                        let _risk = Math.round((this.risk / 100) * this.deposit);
                        let _reward = Math.round((this.reward / 100) * this.deposit);
                        let _trade = {
                                initBalance: this.deposit,
                                tradeResult: ran === "win" ? `+${ _reward }` : `-${ _risk }`,
                                newBalance: ran === "win" ? 
                                this.deposit += _reward : this.deposit -= _risk
                        };
                        this.trades.push(_trade)
                }
                console.clear()
                console.table(this.trades)
        }

}


// initializing the app
const app = new App()