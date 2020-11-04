//Mostrar evento en pantalla
function mostrarEventos(evento, nombreid){
  var html = "";
    html += `
            <div class="col-md-8 offset-md-2">
              <div class="card bg-light mb-3 rounded-lg border-dark text-center">
                <div class="card-body">
                  <h2 class="card-title text-info">${evento.nombre}</h2> <hr>
                  <h3 class="card-text text-muted">Invitados: ${evento.invitados}</h3>
                  <p class="card-text text-muted">Lugar: ${evento.lugar}</p>
                  <p class="card-text text-muted">Fecha: ${evento.fecha}</p>
                  <p class="card-text text-muted">${evento.descripcion}</p>
                  <h2 class="card-text">Precio: ${evento.precio}$</h2>

                </div>
              </div>
            </div>`
  document.getElementById(nombreid).innerHTML = html;
}

$(document).ready(function () {
  
    $.ajax({
      url: "info.json"
    }).done(function(data){
      eventos = data.eventos;
      var id = location.search.match(/id=(\d)*/)[1]; //El [1] determina la posición del id en el URL no en el jSON.
      
      eventoId = eventos.find(function (element) {
        return element.id == id
      })

     mostrarEventos(eventoId, "evento");
    });

});
