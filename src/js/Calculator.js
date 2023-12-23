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
}

export default Calculator;