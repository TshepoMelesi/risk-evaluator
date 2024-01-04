class Calculator{
        constructor( app ){
                this.app = app;

        }
        isWin(){
               let _random = Math.floor(Math.random() * 101);
                
               if( _random < 50){
                        return true;
               } else{
                        return false;
               }
        }
        calcPoints(_arr, height, width){
                let balances = []
                let points = []
                //console.log(_arr.length)
                _arr.forEach(_obj => {
                        balances.push(_obj.initBalance)
                })
                let min_balance = Math.min(...balances)
                let max_balance = Math.max(...balances)
                let x_scaling_factor = width / _arr.length
                let scaling_factor = Number(
                                                        (height / (max_balance - min_balance)).toFixed(2))
                
                points = balances.map( (val, idx) => {
                        return {
                                y: height - (val - min_balance) * scaling_factor 
                                        - this.app.intervals.sPad, 
                                x: idx * (x_scaling_factor) + this.app.intervals.bPad}
                })
                let _roi = balances[this.app.tradesTotal - 1] - balances[0]
                let _roi_message = _roi < 0 ? `<u>loose</u> $${ _roi * -1 }` : `<u>make</u> $${ _roi }`;

                this.app.roi.innerHTML = _roi_message
                this.app.totTrades.innerHTML = this.app.tradesTotal

                return points
        }
}

export default Calculator;