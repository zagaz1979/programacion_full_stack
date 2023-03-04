// Sesión 4 - strings (Con cadenas de caracteres)

let str = "Hola soy un texto";
console.log(str);

let str_dbl = "Hola soy un texto con comillas dobles";
let str_sin = 'Hola soy un texto con comillas simples';
console.log(str_dbl);
console.log(str_sin);

let str_comillas = "El otro dia me dijo literalmente \"Ve a sacar la basura\" ";
console.log(str_comillas);

let str_comillas_simples = 'El otro dia me dijo literalmente "Ve a sacar la basura" ';
console.log(str_comillas_simples);

let str_comillas_dobles = "El otro dia me dijo literalmente 'Ve a sacar la basura' ";
console.log(str_comillas_dobles);

let str_comillas_simples_2 = 'El otro dia me dijo literalmente \'Ve a sacar la basura\' ';
console.log(str_comillas_simples_2);

/////////// Comillas invertidas - (backticks)
// Esto se utiliza en Angular, React, Vue, Svelte

let str_backticks = `Esto es un string con backticks`;
console.log(str_backticks);

let nombre = "Cesar";
let saludo = `Hola ${nombre} bienvenido`;
console.log(saludo);

// Plantillas html
let plantilla = `
    <html>
        <head>
            <title>Hola mundo</title>
        </head>
        
        <body>
            <h1>Hola ${nombre} bienvenido</h1>
        </body>
    </html>
`;

console.log(plantilla)

////// Introducción de variables en html
let libros = ["Empieza por el porque", "El hombre que vendio su ferrari", "El poder de Cristo"];
