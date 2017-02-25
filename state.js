"use strict";
/**Contrato de implementacion para un estado*/
module.exports = class State {
  constructor() {
    this.statesToChange = [];
  }

  addStateToChange(State) {
    this.statesToChange.push(State);
  }

  /**Si el estado reconoce el mensaje regresa verdadero.
   */
  accepts(event) {
    return false;
  }

  /**Se llama cada vez que el estado se activa */
  onEnter(eventEmitter, fsm) {
  console.log("OnEnter");
  }

  /**Si el estado esta activo se llama con cada ciclo
   */
  onUpdate(eventEmitter, fsm) {
  }

  /**Se llama cada vez que el estado se desactiva
   */
  onExit(eventEmitter, fsm) {
    console.log("OnExit");
  }
}