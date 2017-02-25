/**
 * Created by LuisD on 25/02/2017.
 */
"use strict";

const state = require ('./state')
const  Fsm = require ('./fsm')
const eventEmitter = require ('./event-emiter')

var inc = 0;

/**/
class