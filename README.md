TEC Inteligencia Artificial.
Luis Diego Aguilar Acuña
carnet: 2014063730

FSM_1: Tarea 1, actuador sencillo maquina de estados


##Como correr/ejecutar el programa
### Ejecutar:
node main.js


Aspectos Importantes:

Cada estado tiene una lista de los posibles estados a
    los que puede cambiar  "this.statesToChange = [];"
    en el archivo de state.js  esto se hiso asi para
    cuando se resibe un evento el estado busque entre
    su lista de posibles estados el estado al cual debe
    cambiar.

La creacionn de eventos se realiza con un random y la
    opcion de Sanar se aplica con un contador en el
    programa principal.

Esto genera que:
    cuando se genera una accion que no puede manejar
    el estado actual, la maquina vuelve a su estado
    inicial ("busca el estado que accepte el evento
    entre todos los de la FSM").

Se adjunta un output del programa.

    [Descansando]{"msg":"Herido"}
    [Molesto]{"msg":"Herido"}
    Enojado{"msg":"Herido"}
    [Descansando]{"msg":"Herido"}
    [Molesto]{"msg":"Herido"}
    Enojado{"msg":"Herido"}
    [Descansando]{"msg":"Herido"}
    [Molesto]{"msg":"Herido"}
    Enojado{"msg":"Herido"}
    [Descansando]{"msg":"Herido"}
    [Molesto]{"msg":"Herido"}
    Enojado{"msg":"Herido"}

