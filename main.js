const eventEmiter = require ('./event-emiter');
const State = require ('./state');
const fsm = require ('./fsm');
const Soldier = require ('./Soldier')
//const Light = require ('./Light');

/**Ciclo principal
*/
setInterval(() => {
  eventEmiter.update();
  eventEmiter.send("update");
}, 100);

const kovalsky = new Soldier("s1");
/*
setInterval(() => {
  eventEmiter.update();
  eventEmiter.send("update");
},500);*/

var timeTrace = "TimeTrace:";
var counter = 0;
var mainCycle = setInterval(myEventEmiter, 1000);



setInterval(() => {
  //eventEmiter.update();
  //eventEmiter.send("Enemigo_DENTRO_del_area");
  eventEmiter.update();
  eventEmiter.send("Herido");

},1000);

function myEventEmiter() {
//Para sanar al Soldado cada 3 updates sanara
  if (counter === 3)
  {
    counter = 0;
    eventEmiter.send("Sanando");
  }
//Random para la creacion de acciones
  else
  {
    counter ++;
    var rand = Math.floor((Math.random() * 10) + 1);
    console.log(rand);
    if (rand < 3){eventEmiter.send("Enemigo_DENTRO_del_area");}
    else if (rand < 6){eventEmiter.send("Enemigo_FUERA_del_area");}
    else{eventEmiter.send("Herido");}
  }




}





