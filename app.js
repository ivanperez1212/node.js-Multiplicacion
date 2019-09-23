const {crearArchivo, listartabla} = require(`./Multiplicar/multiplicacion`)
const argumentos = require(`yargs`)
    .command(`listar`,`Imprime en la terminar la tabla de multiplicar`,{
        base:{
            demand: true,
            alias: 'b'
        },
        limite:{
            alias: '1',
            default: 10
        }
    })
    .help()
    .argv;
let base = " ";
let comandos = argumentos._[0];

switch (comandos) {
    case `listar`:
        listartabla(argumentos.base,argumentos.limite);
        break;

    default:
        console/log(`No se Reconoce el comando ${comandos}`)
        break;
}
/*crearArchivo(base)
.then(respuesta => console.log(`archivo creado: ${respuesta}`))
.catch(error => console.log(error));*/
