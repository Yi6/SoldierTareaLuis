/**
 * Created by LuisD on 25/02/2017.
 */
"use strict";

const State = require ('./state')
const  Fsm = require ('./fsm')
const eventEmitter = require ('./event-emiter')

var inc = 0;

/**/
class state_Descansando extends State
{
    accepts(event)
    {
        console.log("[Descansando]"+JSON.stringify(event));
        return event.msg === "descansar";
    }
    onEnter(eventEmitter, fsm)
    {
        fsm.owner().descansar();
    }
    onUpdate(eventEmitter, fsm)
    {
        fsm.owner().show();
    }
}

class state_Molesto extends State
{
    accepts(event)
    {
        console.log("Molesto"+JSON.stringify(event));
        return event.msg === "molestar";
    }
    onEnter(eventEmitter, fsm)
    {
        fsm.owner().molestar();
    }
    onUpdate(eventEmitter, fsm)
    {
        fsm.owner().show();
    }
}

//const states = [new state_Descansando(), new state_Molesto()];
const st_Descansando = new state_Descansando();
const st_Molesto = new state_Molesto();
st_Descansando.addStateToChange(st_Molesto);
st_Molesto.addStateToChange(st_Descansando);
const states = [st_Descansando,st_Molesto];



class Soldier
{
    constructor(id)
    {
        this._id = id;
        this._estado = "descansando";
        const  miFsm = new Fsm(this, states);
        eventEmitter.register(miFsm);
    }
    id()
    {
        return this._id;
    }
    descansar()
    {
        this._estado = "descansando";
    }
    molestar()
    {
        this._estado = "molesto";
    }
    show()
    {
        console.log("Estado->"+this.className+"<-");
    }
}

module.exports = Soldier;