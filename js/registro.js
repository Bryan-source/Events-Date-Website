function limpiarAdvertencia(){
  var errores = document.getElementsByClassName("error");
  for(var i = 0; i < errores.length; i++){
    errores[i].innerText = "";
  }
}

function validar(formulario) {
  
  limpiarAdvertencia()

  //Validación nombre
  if (formulario.nombres.value.trim().length == 0) {
  
    document.getElementById("errornombre").innerText = "Campo obligatorio";
    formulario.email.focus();
  
    return false;
    
  }
  //Validación email
  if (formulario.email.value.trim().length == 0) {
        
    document.getElementById("errorEmail").innerText = "Campo obligatorio";
    
    formulario.email.focus();
    return false;
    
  }
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!re.test(formulario.email.value)) {
    document.getElementById("errorEmail").innerText = "El email no es válido asegúrate de que tenga un formato como este: ejemplo@email.com ";
    formulario.email.focus();
    return false; 
  }
  //Validación contrasena
  if (formulario.contrasena.value.trim().length == 0) {
        
    document.getElementById("errorContrasena").innerText = "Campo obligatorio";
    formulario.contrasena.focus();
    return false;
    
  }

  if (formulario.contrasena.value.trim().length < 7) {

    document.getElementById("errorContrasena").innerText = "La contraseña debe tener al menos 7 caracteres";
    formulario.contrasena.focus();
    return false;
  }

  //Validar confirmación
  if (formulario.confirmacion.value.trim().length == 0) {
        
    document.getElementById("errorConfirmacion").innerText = "Campo obligatorio";
    
    formulario.confirmacion.focus();
    return false;
    
  }

  if (formulario.confirmacion.value.trim() != formulario.contrasena.value.trim()) {
        
    document.getElementById("errorConfirmacion").innerText = "Tu confirmación y la contraseña no coinciden";
    
    formulario.confirmacion.focus();
    return false;
    
  }

  //Validar tipo
  if (formulario.tipo.value == "-1") {
        
    document.getElementById("errorTipo").innerText = "Elige una opción";
    return false;
    
  }

  //Varlidar términos y condiciones
  if (!formulario.acepto.checked) {

    alert("Debes aceptar los términos y condiciones");
    
    return false;
    
  }
  alert("Datos enviados");

  return true;
}

