class Display{
        constructor( app ){
                this.app = app;

        }
        logTrades( _trade ){
                let _growth = Math.round( 
                                                        ( ( _trade.newBalance - this.app.deposit ) 
                                                        / this.app.deposit ) * 100 );
                let tradeTemp = `
                <div class="trade">
                        <p class="balance">${ _trade.initBalance }</p>
                        <p class="gain ${ _trade.tradeResult < 0 ? "loss" : "win" }">
                        ${ _trade.tradeResult }</p>
                        <p class="new-balance">
                        ${ _trade.newBalance <= 0 ? 0 : _trade.newBalance }</p>
                        <p class="growth">
                        ${ _growth }
                        </p>
                </div>
                `;
                this.app.tradesList.innerHTML += tradeTemp;
        }
}

export default Display;

