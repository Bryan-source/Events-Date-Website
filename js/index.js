
var pasados = [];
var proximos = [];
var eventos;
var hoy;

//Muestra eventos en pantalla
function mostrarEventos(arreglo, nombreid){
  var html = "";
  for(var j = 0; j < 2; j++){
    html += `
            <div class="col-6">
              <div class="card bg-light mb-3 rounded-lg border-dark">
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

    //Eventos pasados
    for (var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha < hoy ){
        pasados.push(eventos[i]);
      }
    }
    //Eventos Futuros
    for (var i = 0; i < eventos.length; i++){
      if (eventos[i].fecha > hoy ){
        proximos.push(eventos[i]);
      }
    }
    //Ordenar eventos
    pasados = pasados.sort(function(x,y){
      if (x.fecha < y.fecha){
        return 1;
      }
      return -1;
    }); 

    proximos = proximos.sort(function(x,y){
      if (x.fecha < y.fecha){
        return -1;
      }
      return 1;
    }); 
    
    mostrarEventos(proximos, "proximos");
    mostrarEventos(pasados, "pasados");
    
  });
});
