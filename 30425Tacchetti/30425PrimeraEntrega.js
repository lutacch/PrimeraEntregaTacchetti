let menu;

alert(
  "Hola, soy tu conversor de gramos y mililitros a tazas y estoy aqui para ayudarte a cocinar mas facil."
);

do {
  menu = "¿Que medida desea convertir el dia de hoy?";
  menu = Number(
    prompt("Opcion 1: Gramos \n Opcion 2: Mililitros \n Opcion 3: Salir. ")
  );
  switch (menu) {
    case 1:
      gramosUno();
      break;
    case 2:
      mililitrosDos();
      break;
    case 3:
      nuevoArray(
        alert(
          "Ayudanos a mejorar, ¿cuales son las harinas que mas utilizas para cocinar?"
        )
      );
      break;
  }
} while (menu > 3);

function gramosUno(solucionGramos) {
  productoConversion = [
    { nombre: "Harina de Trigo", pesoTaza: 110 },
    { nombre: "Azucar", pesoTaza: 225 },
    { nombre: "Azucar Impalpable", pesoTaza: 110 },
    { nombre: "Cacao", pesoTaza: 125 },
  ];

  let menu2;
  do {
    menu2 = "Elija entre los siguientes productos";
    menu2 = Number(
      prompt(
        "Opcion 1: Harina de Trigo \n Opcion 2: Azucar \n Opcion 3: Azucar Impalpable \n Opcion 3: Cacao "
      )
    );
    switch (menu2) {
      case 1:
        productoConversion[0];
        break;
      case 2:
        productoConversion[1];
        break;
      case 3:
        productoConversion[2];
        break;
      case 4:
        productoConversion[3];
        break;
    }
  } while (menu2 > 4);
}
gramosUno(solucionGramos);

{
  productoConversion[0];
  let gramos0 = Number(prompt("¿Cuantos gramos desea convertir?"));
  let cup0 = 1;
  const trigo = productoConversion[0].pesoTaza;

  function solucionGramos(gramos0, cup0, trigo) {
    const resultado1 = gramos0 * cup0;
    const resultado2 = resultado1 / trigo;
    alert(
      "Tu conversión de " +
        productoConversion[0].nombre +
        " a tazas es igual a " +
        resultado2
    );
  }
  solucionGramos(gramos0, cup0, trigo);
}

{
  productoConversion[1];

  let gramos1 = Number(prompt("¿Cuantos gramos desea convertir?"));
  let cup1 = 1;
  const azucar = productoConversion[1].pesoTaza;

  function solucionGramos(gramos1, cup1, azucar) {
    const resultado5 = gramos1 * cup1;
    const resultado6 = resultado5 / azucar;
    alert(
      "Tu conversión de " +
        productoConversion[1].nombre +
        " a tazas es igual a " +
        resultado6
    );
  }
  solucionGramos(gramos1, cup1, azucar);
}

{
  productoConversion[2];

  let gramos2 = Number(prompt("¿Cuantos gramos desea convertir?"));
  let cup2 = 1;
  const azucarImpalpable = productoConversion[2].pesoTaza;

  function solucionGramos(gramos2, cup2, azucarImpalpable) {
    const resultado6 = gramos2 * cup2;
    const resultado7 = resultado6 / azucarImpalpable;
    alert(
      "Tu conversión de " +
        productoConversion[2].nombre +
        " a tazas es igual a " +
        resultado7
    );
  }
  solucionGramos(gramos2, cup2, azucarImpalpable);
}

{
  productoConversion[3];

  let gramos3 = Number(prompt("¿Cuantos gramos desea convertir?"));
  let cup3 = 1;
  const cacao = productoConversion[3].pesoTaza;

  function solucionGramos(gramos3, cup3, cacao) {
    const resultado8 = gramos3 * cup3;
    const resultado9 = resultado8 / cacao;
    alert(
      "Tu conversión de " +
        productoConversion[3].nombre +
        " a tazas es igual a " +
        resultado9
    );
  }
  solucionGramos(gramos3, cup3, cacao);
}

function mililitrosDos(solucionMililitros) {
  let ml = Number(prompt("¿Cuantos mililitros desea convertir?"));
  let cup = 1;
  let b = 250;

  function solucionMililitros(ml, cup, b) {
    const resultado3 = ml * cup;
    const resultado4 = resultado3 / b;
    alert("Tu conversión de mililitros a tazas es igual a " + resultado4);
  }
  solucionMililitros(ml, cup, b);
}
mililitrosDos(solucionMililitros);

function nuevoArray(tiposHarina) {
  tiposHarina = [];
  let agregarHarina = "";

  while (agregarHarina != "salir") {
    agregarHarina = prompt(
      "Si usted no encontro el tipo de harina que buscaba, ingreselo aqui, para finalizar escriba: salir."
    );
    tiposHarina.push(agregarHarina);
  }
  alert(
    "Gracias por su ayuda!. Estas son las harinas que usted sugirio: " +
      tiposHarina
  );
}
nuevoArray(tiposHarina);
