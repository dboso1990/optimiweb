// ==/UserScript==

// Define la URL que quieres verificar
const targetUrl = "https://puntosventa.jpsenlinea.go.cr/JPSEnLinea/nuevostiempos/buy/pv";
const targetUrl2 = "https://puntosventa.jpsenlinea.go.cr/JPSEnLinea/lotto/buy";
const targetUrl3 = "https://puntosventa.jpsenlinea.go.cr/JPSEnLinea/tresmonazos/buy";
const targetUrl4 = "https://puntosventa.jpsenlinea.go.cr/JPSEnLinea/PaymentReward";



// Variable para controlar si se ha mostrado la alerta
let alerted = false;
let alertedA = false;
let alertedF = false;


function checkUrl() {
    if ((window.location.href === targetUrl ||  window.location.href === targetUrl2 ||  window.location.href === targetUrl3 ||  window.location.href === targetUrl4) && !alerted) {
       
       
       var totalizar = document.getElementsByClassName('btn btn-primary-active regular-text-bold col-5 ');
             
        if (totalizar && !alertedA) {
            
            for (var i = 0; i < totalizar.length; i++) {
                 
                 
                 
                 if(totalizar[i].textContent.trim() === 'Aceptar') {
                 
                
                totalizar[i].focus();
                alertedA = true;
               
               
                 
                    }
                }
        }
        
        
        
       var focalizar = document.getElementsByClassName('select2-selection__rendered')[0];
             
        if (focalizar && !alertedF) {
            
            
                 if(focalizar.textContent.trim() === 'Extranjero' || focalizar.textContent.trim() === 'F\u00edsica') {
                 
                
                document.getElementById('user').focus();
                alertedF = true;
               
               
                 
                    }
                }
                
        
       
       
       
       

        var Pagado = document.getElementsByClassName('title-fonts-important text-center')[0];
        if (Pagado) {
         
  console.log(Pagado.textContent);
           
            if (Pagado.textContent.trim() === "Pago exitoso") { // Usa triple igual y compara el texto limpio
                 window.scrollTo({ top: (document.documentElement.scrollHeight * 0.16), behavior: 'smooth' });
                var elementos = document.getElementsByClassName('btn btn-primary-active btn-block regular-text-medium-bold mt-3 ');
           

                for (var i = 0; i < elementos.length; i++) {
                 
                 
                 
                 if(elementos[i].textContent.trim() === 'Imprimir') {
                 
                console.log(elementos[i].textContent.trim());
                elementos[i].click();
                console.log("Impresion");
               
               
                 
                 }
                  if(elementos[i].textContent.trim() === 'Nueva Apuesta') {
                 
                console.log(elementos[i].textContent.trim());
                elementos[i].click();
                
                 

                 
                 }
                 alertedA = false;
                 alertedF = false;

                }

               

            } else {
                console.log("No texto de pago exitoso");
                
            }
        }
    } else if (window.location.href !== targetUrl && window.location.href !== targetUrl2  && window.location.href !== targetUrl3 && window.location.href !== targetUrl4) {
        alerted = false; // Resetea el estado si la URL cambia
         alertedA = false;
         alertedF = false;
    }
}

// Ejecuta la funciÃ³n `checkUrl` cada segundo
setInterval(checkUrl, 100);
