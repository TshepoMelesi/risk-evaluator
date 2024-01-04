import Calculator from "./Calculator.js";
import Display from "./Display.js";
import Controls from "./Controls.js";
import Intervals from "./Intervals.js";
import PopUp from "./PopUp.js";

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
                this.width  = Math.round(this.mainSVG.getBoundingClientRect().width);
                this.height = Math.round(this.mainSVG.getBoundingClientRect().height);


                // get the description spans
                this.risked =document.getElementById("risked")
                this.deposited =document.getElementById("deposited")
                this.winrate =document.getElementById("winrate")
                this.winning =document.getElementById("rewarded")
                this.roi =document.getElementById("roi")
                this.totTrades =document.getElementById("totTrades")

                // an array of processed trades
                this.trades = [];
                this.intervalsArr = [];

                // axis height and width, points
                this.axisHeight = 0;
                this.axisWidth = 0;
                this.points = [];
                this.drawnPoints = []

                // check if canvas is displaying
                this.isDisplay = false;
                this.isPoly = false;

                // set mouse coordinates
                this.mouseX = 0;
                this.mouseY = 0;

                // other classes
                this.pop = new PopUp(this, 50, 50);
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
                let _reward = 0
                let _risk = 0

                for( let i = 0; i < this.tradesTotal; i++ ){

                        let _ran = this.calculator.isWin() ? "win" : "loss";
                        _ran === "win" ? _wins++ : null; // increment losses
                        _risk = Math.round( ( this.risk / 100 ) * this.deposit );
                        _reward = Math.round( ( this.reward / 100 ) * this.deposit );

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
                let _rate = Math.round ( ( _wins / this.tradesTotal ) * 100 );
                this.winRate.innerHTML = _rate;
                this.winrate.innerHTML = _rate;
                this.deposited.innerHTML = this.deposit;
                this.winning.innerHTML = _reward;
                this.risked.innerHTML = _risk;
                return this.trades
        }

}

// initializing the app
const app = new App();