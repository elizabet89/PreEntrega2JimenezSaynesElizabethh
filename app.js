/*----- PRACTICA DE CARRITO DE COMPRAS USANDO UN ARRAY DE OBJETOS====0*/
/=========================================================================/
const container=document.querySelector(".container");
const carrito=document.getElementById("carrito");
const template=document.getElementById("template");
const btns=document.querySelectorAll(".btn");
const fragment=document.createDocumentFragment();
const footer=document.getElementById("footer");
const templateFooter=document.getElementById("templateFooter");
let carritoObjeto=[];

document.addEventListener("click",(e)=>{
 
    if(e.target.dataset.fruta==="frutilla"){
        agregarAlCarrito(e);
    }else if(e.target.dataset.fruta==="manzana"){
        agregarAlCarrito(e);
    }
    else if(e.target.dataset.fruta==="piña"){
        agregarAlCarrito(e);
    }else if(e.target.matches(".agregar")){
        agregar(e);
    }else if(e.target.matches(".quitar")){
    quitar(e);
}

});

const agregarAlCarrito=(e)=>{
//    console.log("le diste click",e.target.dataset.fruta);

   const producto={
       nombre:e.target.dataset.fruta,
       id:e.target.dataset.fruta,
       cantidad:1,
       precio:parseInt(e.target.dataset.precio),
   };

// console.log(producto);

   const indice=carritoObjeto.findIndex((item)=>item.id === producto.id);

   if(indice === -1){
       carritoObjeto.push(producto);

   }else{
       carritoObjeto[indice].cantidad++;
       
    }

   console.log(carritoObjeto);

   pintarCarrito();
}

const pintarCarrito=()=>{
    carrito.textContent="";

    carritoObjeto.forEach((item)=>{
         const clone=template.content.cloneNode(true);
           clone.querySelector(".title").textContent=item.nombre;
           clone.querySelector(".cant").textContent=item.cantidad;
           clone.querySelector(".tota").textContent=item.precio*item.cantidad;

         clone.querySelector(".quitar").dataset.id=item.id;
         clone.querySelector(".agregar").dataset.id=item.id;


           fragment.appendChild(clone);

    });
    carrito.appendChild(fragment);  

    pintarFooter();

};
const pintarFooter =()=>{

    footer.textContent="";
    const total =carritoObjeto.reduce((acc,current)=>acc+current.cantidad*current.precio,0);

    const clone=templateFooter.content.cloneNode(true);
          clone.querySelector("span").textContent=total;

          if(total===0){
              return;
          }else{
                footer.appendChild(clone);
          }
    
}

const agregar=(e)=>{
    console.log(e.target.dataset.id)
    carritoObjeto=carritoObjeto.map((item)=>{

        if(item.id === e.target.dataset.id){
            item.cantidad++;
        }
        return item;


    });
    pintarCarrito();
}

const quitar=(e)=>{
    carritoObjeto=carritoObjeto.filter(item=>{
        if(item.id===e.target.dataset.id){
            if(item.cantidad>0){
                item.cantidad--;
                if(item.cantidad===0)return;
                    return item;
                
            }
        }else{return item}
    });
pintarCarrito();
};

