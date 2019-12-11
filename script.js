/**Agperez javascript source*/
var menuActual = null;
var posicionTopLogo = '30%';
var timer;

/**
 * Función encargada de mostrar el menú desplegable al hacer click en el botón correspondiente
 * @param {menuId} menuId ID del div conteniendo las opciones del menú desplegable
 */
function mostrarSub(menuId) 
{
  if (menuActual != null)
  {
    document.getElementById(menuActual).classList.remove('show');
  }
  menuActual=menuId;
  document.getElementById(menuId).classList.toggle("show");
}

function actualizarIframe(pagina)
{
  document.getElementById('contenidos').src = pagina;
}

function responsiveButton() 
{
  var menu = document.getElementById("responsiveStandard");
  if (menu.className === "barraMenu") 
  {
    menu.className += " responsive";
  } 
  else 
  {
    menu.className = "barraMenu";
  }
} 

function cerrarResponsive()
{
  var menu = document.getElementById("responsiveStandard");
  if(menu.className != "barraMenu")
  {
    menu.className="barraMenu";
  }
}

function cerrarMenus()
{
  var busMenu = document.getElementsByClassName('contenedorBoton-content');
    for (var i = 0; i < busMenu.length; i++)
    {
      var menuAbierto = busMenu[i];
      if (menuAbierto.classList.contains('show')) 
      {
        menuAbierto.classList.remove('show');
        cerrarResponsive();
      }
    }
}

function abrirPopUp()
{
	document.getElementById("popUp").style.display = "block";
}

/**Eventos**/

/**
 * Funcion encargada de tomar el evento de cerrar el popup abierto y cerrar la lista desplegable de la barra superior.
 * @param {e} evento Variable de evento.
 */
window.onclick = function(e) 
{
  if (e.target.matches('.cerrarPopUp') || e.target.matches('.ventanaPopUp'))
  {
    document.getElementById("popUp").style.display = "none";
	movimientoLogo();
  }
  if (!e.target.matches('.dropContenedor')) 
  {
    cerrarMenus();
  }
  if (e.target.matches('.contenidos'))
  {
	  cerrarMenus();
  }  
} 

/*window.onload = abrirPopUp;*/
