import { Calculator } from "./Calculator";

class DecCalculator extends Calculator {
    constructor(settings) {
        super(settings);
        console.log( this.getName() );
    }

  changeNumber(root) {
      let active = root.find('.active')
      let i = parseInt(active.text(), 10);

      i++;

      if(i === 10){
          i = 0;
      }

      let span = $('<span>', {class: 'display-number__value--zero active'}).text(i);
      active.after(span);

      active.removeClass('active').slideUp(() => {
        active.remove();

        this.checkNumber();
        this.updateResult();
      });
  }

  /* Method add numbers in two array
  *  @param {array} numberX First number
  *  @param {array} numberY Second number
  *  @return {array}
  */


  add(numberX, numberY) {
      let result = [0,0,0,0,0,0,0,0,0];

      for(let i = numberX.length - 1; i >= 0  ; i--) {
          let carryBit =  numberX[i] + numberY[i] + result[i];
          if( carryBit  >= 10) {
              result[i] = carryBit - 10;
              result[i-1]++ ;
          } else {
              result[i] = carryBit;
          }
      }
      // console.log(result);
      return result;
  }

  updateResult() {
       let root =  this.$calculatorDOMElement;
       let $resultNumber = root.children(".group-number").children(".result-bit");
       for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {

          let active = $resultNumber.eq(j).find(".active");
          let valueResult = parseInt( active.text() );

          // console.log(valueResult, this.resultNumberArray[i]);
          if( this.resultNumberArray[i] !== valueResult ) {

              // active.text(this.resultNumberArray[i]);

              let span = $('<span>', {class: 'display-number__value--zero active'}).text(this.resultNumberArray[i]);


              active.after(span);

              active.removeClass('active').slideUp(() => {
                active.remove();
              })

          }
       }
  }

}


export { DecCalculator }
