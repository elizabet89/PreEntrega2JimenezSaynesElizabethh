let botones=document.querySelectorAll(".btn");
let lista=document.getElementById("lista");
let total=document.getElementById("total");
let btnEliminar=document.querySelectorAll(".eliminar");
let compraTotal=0;

let carritoObjeto=[];

let pintarCarrito=()=>{
  lista.textContent="";
  carritoObjeto.forEach((item)=>{
     
    let li=document.createElement("li");

    let span=document.createElement("span");
    let p=document.createElement("p");
    let cant=document.createElement("p");
    // let total=document.createElement("p")

  
    cant.textContent=item.cantidad;
    p.textContent=item.nombre;
    span.textContent=item.precio*item.cantidad;
    total.textContent= compraTotal +=item.precio
    
    li.appendChild(cant);
    li.appendChild(p);
    li.appendChild(span);
  
  
    lista.appendChild(li);



  
  });
}
let agregarProducto=(e)=>{

 const producto={
      cantidad:1,
      nombre:e.target.dataset.fruta,
      precio:parseInt(e.target.dataset.precio),
    }

    let indice=carritoObjeto.findIndex((elemento)=>elemento.nombre=== producto.nombre);

    if(indice === -1){
        carritoObjeto.push(producto);
 
    }else{
        carritoObjeto[indice].cantidad++;
        
        
      }
      pintarCarrito();

 
    }





    
botones.forEach((item)=>{
  item.addEventListener("click", agregarProducto);  
});

btnEliminar.forEach((prod)=>{
  prod.addEventListener("click",(e)=>{

    
    carritoObjeto.forEach((ite)=>{

 

        let indi=carritoObjeto.findIndex((element)=>element.nombre=== e.target.dataset.fruta);
  
      if(indi !== -1){
        
        if(carritoObjeto[indi].cantidad>0){

          carritoObjeto[indi].cantidad--;
          // total.textContent= ite.precio*carritoObjeto[indi].cantidad;
          pintarCarrito();
        }

   
      }
  
      

   

      })
 
    

  })
})