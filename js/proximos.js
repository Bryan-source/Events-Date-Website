
var proximos = [];
var eventos;
var hoy;

//Muesra eventos en pantalla.
function mostrarEventos(arreglo, nombreid){
  var html = "";
  for(var j = 0; j < arreglo.length; j++){
    html += `
            <div class="col-md-8 offset-md-2">
              <div class="card bg-light mb-3 rounded-lg border-dark text-center">
                <div class="card-body">
                <h2><a class="card-title text-info" href="detalle.html?id=${arreglo[j].id}">${arreglo[j].nombre}</a> </h2><hr>
                  <p class="card-text text-muted">${arreglo[j].fecha}</p>
                  <p class="card-text">${arreglo[j].descripcion}</p>
                </div>
              </div>
            </div>`
  }
  document.getElementById(nombreid).innerHTML = html;
}

$(document).ready(function () {

  $.ajax({
    url: "info.json"
  }).done(function (respuesta) {
    hoy = respuesta.fechaActual;
    eventos = respuesta.eventos;

    //Eventos proximos
    for (var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha > hoy ){
        proximos.push(eventos[i]);
      }
    }

    //Ordenar eventos proximos
    proximos = proximos.sort(function(x,y){
      if (x.fecha < y.fecha){
        return -1;
      }
      return 1;
    }); 

    mostrarEventos(proximos, "proximos")
  });
});

