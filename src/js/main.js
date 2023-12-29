import Calculator from "./Calculator.js";
import Display from "./Display.js";
import Controls from "./Controls.js";
import Intervals from "./Intervals.js";

class App{
        constructor(){
                //get all inputs
                this.deposit = Number( document.getElementById( "deposit" ).value );
                this.risk = Number( document.getElementById( "risk" ).value );
                this.reward = Number( document.getElementById( "reward" ).value );
                this.tradesTotal = Number( document.getElementById( "tradesTotal" ).value );

                //get statistics holders
                this.possibleTrades = document.getElementById("possibleTrades");
                this.possibleTrades.innerHTML = this.tradesTotal
                this.winRate = document.getElementById("winRate");

                // calculate and clear  buttons
                this.calculateBtn = document.getElementById( "calcBtn" );
                this.clearBtn = document.getElementById( "clrBtn" );
                
                this.tradesList = document.getElementById( "tradesList" );
                this.mainSVG = document.getElementById( "myCanvas" );

                // width and height of the svg to display on
                this.width  = Math.round(this.mainSVG.getBoundingClientRect().width)
                this.height = Math.round(this.mainSVG.getBoundingClientRect().height)

                // an array of processed trades
                this.trades = [];
                this.intervalsArr = []

                // other classes
                this.calculator = new Calculator( this );
                this.display = new Display( this );
                this.intervals = new Intervals(this);
                this.controls = new Controls( this );

                // instant initiations
                this.intervals.draw(this.mainSVG);
        }
        setInputs(){
                // if there are any changes in the inputs
                // this function will assign their values in these variables
                this.deposit = Number( document.getElementById( "deposit" ).value );
                this.risk = Number( document.getElementById( "risk" ).value );
                this.reward = Number( document.getElementById( "reward" ).value );
                this.tradesTotal = Number( document.getElementById( "tradesTotal" ).value );
        }
        calculate(){
                this.setInputs(); // get any new input values before calculating
                let _wins = 0
                let _balance = this.deposit;
                this.possibleTrades.innerHTML= this.tradesTotal; 

                for( let i = 0; i < this.tradesTotal; i++ ){

                        let _ran = this.calculator.isWin() ? "win" : "loss";
                        _ran === "win" ? _wins++ : null; // increment losses
                        let _risk = Math.round( ( this.risk / 100 ) * this.deposit );
                        let _reward = Math.round( ( this.reward / 100 ) * this.deposit );

                        if ( _balance <= 0 ) {
                                this.possibleTrades.innerHTML = i;
                                return;
                        }
                        let _trade = {
                                initBalance: _balance,
                                tradeResult: _ran === "win" ? `+${ _reward }` : `-${ _risk}`,
                                newBalance: _ran === "win" ? 
                                _balance += _reward : _balance -= _risk,
                        }; // trade format

                        // push each trades into the processed trades list
                        this.trades.push(_trade);
                        // display each trade
                        this.display.logTrades(_trade);
                }

                // display won trades
                this.winRate.innerHTML = Math.round ( ( _wins / this.tradesTotal ) * 100 );
        }

}

// initializing the app
const app = new App();