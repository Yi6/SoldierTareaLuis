const eventEmiter = require ('./event-emiter');
const state = require ('./state');
const fsm = require ('./fsm');

//const Light = require ('./Light');

/**Ciclo principal

setInterval(() => {
  eventEmiter.update();
  eventEmiter.send("update");
}, 100);

 **/

var luis = {
  id : function(){return 1;}
}

var Happy = new state();
var Sad = new state();

Happy.addStateToChange(Sad);
Sad.addStateToChange(Happy);

var bipolarMachine = new fsm(luis,[Happy,Sad]);





/*

var mainCycle = setInterval(myEventEmiter, 1000);


function myEventEmiter() {
  eventEmiter.update();
 // eventEmiter.send("update",1);

  var rand = Math.floor((Math.random() * 10) + 1);
  if (rand > 5){
    eventEmiter.send("happy",1);
  }else{eventEmiter.send("sad",1);}

}


*/


