const modalImagen = document.querySelector('#modal-imagen');

if (modalImagen) {
  // EVENTO show.bs.modal ES EL KEY QUE TIENE EL EVENTO EN CONSOLE SE ENCUENTRA EN boostrap EN MODAL, PROTOTYPE,SHOW
  modalImagen.addEventListener('show.bs.modal', function (event) { // function()Call back QUE DETECTA EL EVENTO Y EJECUTA UNA FUNCION
    // console.log(event.relatedTarget); //CODIGO QUE NOS DICE A QUE LE HEMOS DADO CLICK MOSTRANDO LA ERIQUETA DE ANCLA EN CONSOLA CON EL DATA-BS Y LA IMG DEPENDIENDO DONDE SE DE CLICK EN LA IMAGEN MOSTRARA EL NUMERO DE IMAGEN

    const enlace = event.relatedTarget;
    const rutaImagen = enlace.getAttribute("data-bs-imagen");//PARA ACCEDER AL ATRIBUTO DE LA IMAGEN
    //console.log(rutaImagen);//IDENTIFICA QUE IMAGEN MOSTRAR

    //CONSTRUIR LA IMAGEN EL src ELEMENTOS SE CREAN CON LA ETIQUETA EN MAYUSCULA

    const imagen = document.createElement("IMG");//IMG CREA EL ELEMENTO img
    imagen.src = `img/${rutaImagen}.jpg`;//ESTA OPCION PERMITE QUE YA APAREZCA LA RUTA DE LA IMAGEN EL JPG PERMITE QUE ENCUENTRE ESA IMAGEN
    imagen.classList.add("img-fluid");//AGREGA LOS ESTILOS DE BOOSTRAP img-fluid
    imagen.alt = "imagen galeria";

    //MOSTRAR DONDE QUEREMOS QUE QUEDE LA IMAGEN

    const contenidoModal = document.querySelector(".modal-body");//ACA QUEDARA LA IMAGEN MODAL
    //IMAGEN HIJO DEL CONTENIDO MODAL
    contenidoModal.appendChild(imagen);//AGREGA UN HIJO GRACIAS AL appendChild EN EL modal-body

    console.log(imagen);

  })


  //CUANDO SE CIERRA EL MODAL

  modalImagen.addEventListener("hidden.bs.modal", function () {
    const contenidoModal = document.querySelector(".modal-body");
    contenidoModal.textContent = "";//LIMPIA EL MODAL PARA QUE NO APAREZA LA IMAGEN REPETIDAS VECES CADA VEZ QUE SE HACE CLICK

    // console.log("ocultando modal");

  });
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
