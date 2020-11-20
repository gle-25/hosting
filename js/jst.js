$(document).ready(function () {
    
   //localStorage.clear();
   var aux = localStorage.getItem("producto"); 
   if(aux===null){
       var pre=[];
       localStorage.setItem("producto",JSON.stringify(pre));
   }
   var guardado=JSON.parse(localStorage.getItem("producto"));
   
   
    $(".b").click(function(){
        
        var valor=$(this).val();
       alert("se añadio al carrito de compras el producto: "+valor);
        var nombre = $("#p"+valor + " h4").text() ;
        var precio = $("#p"+valor + " h5").text() ;
        
       var carrito={"nombre": nombre, "precio":precio};
       guardado.push(carrito);
       
        localStorage.setItem("producto",JSON.stringify(guardado));
         console.log(guardado);
        
        
        
    });
});