function confirmar(){

 var Formularios = document.getElementsByName('formu')[0];                 
 var elementos = Formularios.elements;
 var botton =document.getElementById('boton');

 var validarNombre =function(e)
 {
if (Formularios.nombre.value == 0) 
{
alert("completa la opcion de Nombre porfavor");

}
 };

var validarCorreo =function(e)
 {
if (Formularios.email.value == 0) 
{
alert("completa la opcion de Correo porfavor");

}
 };

var validarNumero =function(e)
 {
if (Formularios.telefono.value == 0) 
{
alert("completa el llenado del Numero Telefonico porfavor");

}
 };

var validarRadio =function(e)
{
if (Formularios.Tipo[0].checked == true|| Formularios.Tipo[1].checked == true || Formularios.Tipo[2].checked == true || Formularios.Tipo[3].checked == true || Formularios.Tipo[4].checked == true || Formularios.Tipo[5].checked == true ) 
{

}
else
{
alert('Oye te pido que selecciones una opcion que viene aqui en seleccionar idioma, si no deseas en ninguno de estos idiomas selecciona la opcion de ninguno de estos (._.)');
preventDefault();
}
};

 function validar (e)
{
validarNombre();
validarCorreo();
validarNumero();
validarRadio();
};

Formularios.addEventListener("click",validar());

}
