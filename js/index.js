

    $(document).ready(function() {
      console.log("hola");
      $("#botonenviar").click((e)=>{
        e.preventDefault();
         console.log("click");
         var email = $("#email").val();
         var nombre = $("#nombre").val();
             $("#nombre-2").val(nombre);
             $("#email-2").val(email);

         console.log(email);

         $(".mensaje").slideDown();
      })


      $("#salir").click(function(){
        $(".mensaje").slideUp();
      });


      var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
function mostrar() {
div = document.getElementById('plato');
div.style.display = '';
}

function cerrar() {
div = document.getElementById('plato');
div.style.display = 'none';
}
});
