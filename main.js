const eventEmiter = require ('./event-emiter');
const State = require ('./state');
const fsm = require ('./fsm');
const Soldier = require ('./Soldier')
//const Light = require ('./Light');

/**Ciclo principal

setInterval(() => {
  eventEmiter.update();
  eventEmiter.send("update");
}, 100);

 **/





const kovalsky = new Soldier("s1");


var mainCycle = setInterval(myEventEmiter, 1000);


function myEventEmiter() {
  eventEmiter.update();
 // eventEmiter.send("update",1);

  var rand = Math.floor((Math.random() * 10) + 1);
  console.log(rand);
  if (rand > 5){
    eventEmiter.send("descansar");
  }else{eventEmiter.send("molestar");}

}





