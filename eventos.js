const targetUrlt =  "https://puntosventa.jpsenlinea.go.cr/JPSEnLinea/nuevostiempos/buy/pv";
const targetUrll =  "https://puntosventa.jpsenlinea.go.cr/JPSEnLinea/lotto/buy";
const targetUrlm =  "https://puntosventa.jpsenlinea.go.cr/JPSEnLinea/tresmonazos/buy";
const targetUrlp =  "https://puntosventa.jpsenlinea.go.cr/JPSEnLinea/PaymentReward";
var id;



document.addEventListener('keydown',  function(event) {
     // Obtenemos el ID del elemento activo
    var elementoActivo =  document.activeElement.id;
     // Verificamos si la tecla presionada es 'Enter' y si el elemento activo es 'user'
    if ((event.code ===  'NumpadEnter' ||  event.code ===  'Enter') &&  elementoActivo ===  'user' &&  (window.location.href ===  targetUrlt ||  window.location.href ===  targetUrlm)) {
         // Enfocamos el elemento con ID 'Name'
         window.scrollTo({
             top:  (document.documentElement.scrollHeight *  0.19),
             behavior:  'smooth'
        });
         document.getElementsByClassName('btn btn-primary-active btn-block regular-text-medium-bold w-100 ')[0].focus();
         id =  document.getElementById('user').value.replace('-', '').toString();;
        var tipoid =  document.getElementsByClassName('select2-selection__rendered')[0].textContent.trim();
        if (tipoid ===  'Extranjero') {
             const url =  'https://api.hacienda.go.cr/fe/ae?identificacion=' + id;
            fetch(url) .then(response =>  {
                if (!response.ok) {
                    throw new Error(`Error en la solicitud:  $ {
                        response.status
                    }`);
                }
                return response.json();
            }) .then(data =>  {
                 const nombre =  data.nombre.toString();
                 document.getElementById('Name').value =  nombre.toString();
                 document.getElementById('Name').focus();
            }) .
            catch(error =>  {
                 document.getElementById('Name').value =  '';
            });
        }
    }
    if ((event.code ===  'NumpadEnter' ||  event.code ===  'Enter') &&  elementoActivo ===  'user' &&  window.location.href ===  targetUrlp) {
         // Enfocamos el elemento con ID 'Name'
         id =  document.getElementById('user').value.replace('-', '').toString();
        var tipoid =  document.getElementsByClassName('select2-selection__rendered')[0].textContent.trim();
        if (tipoid ===  'Extranjero') {
             const url =  'https://api.hacienda.go.cr/fe/ae?identificacion=' + id;
            fetch(url) .then(response =>  {
                if (!response.ok) {
                    throw new Error(`Error en la solicitud:  $ {
                        response.status
                    }`);
                }
                return response.json();
            }) .then(data =>  {
                 const nombre =  data.nombre.toString();
                 document.getElementById('Name').value =  nombre.toString();
                
                  document.getElementById('Name').focus();
            }) .
            catch(error =>  {
                 document.getElementById('Name').value =  '';
            });
        } document.getElementById('barcodeInput').select();
    }
    if ((event.code ===  'NumpadEnter' ||  event.code ===  'Enter') &&  elementoActivo ===  'user' &&  window.location.href ===  targetUrll) {
         // Enfocamos el elemento con ID 'Name'
         window.scrollTo({
             top:  (document.documentElement.scrollHeight *  0.07),
             behavior:  'smooth'
        });
         document.getElementsByClassName('custom-control-input')[0].focus();
         id =  document.getElementById('user').value.replace('-', '').toString();;
        var tipoid =  document.getElementsByClassName('select2-selection__rendered')[0].textContent.trim();
        if (tipoid ===  'Extranjero') {
             const url =  'https://api.hacienda.go.cr/fe/ae?identificacion=' + id;
            fetch(url) .then(response =>  {
                if (!response.ok) {
                    throw new Error(`Error en la solicitud:  $ {
                        response.status
                    }`);
                }
                return response.json();
            }) .then(data =>  {
                 const nombre =  data.nombre.toString();
                 document.getElementById('Name').value =  nombre.toString();
             
                 document.getElementById('Name').focus();
            }) .
            catch(error =>  {
                 document.getElementById('Name').value =  '';
           
                 document.getElementById('Name').focus();
            });
        }
    } // Verificamos si la tecla presionada es 'Enter' y si el elemento activo es 'user'
    if (event.code ===  'NumpadAdd' &&  elementoActivo ===  'user') {
        var cid =  document.getElementById('user');
         cid.focus();
         cid.value =  id.replace('-', '').replace('-', '').replace('-', '').replace('-', '').replace('-', '').replace('-', '').replace('-', '').replace('-', '').replace('-', '').replace('-', '').toString();
         cid.focus();
    }
    if ((event.code ===  'Pause' ||  event.code ===  'Escape') &&  window.location.href ===  targetUrll &&  elementoActivo !=  'user') {
         // Enfocamos el elemento con ID 'Name'
         document.getElementsByClassName('custom-control-input')[0].click();
         document.getElementsByClassName('btn btn-primary-active btn-block regular-text-medium-bold ')[1].click();
    }
    if ((event.code ===  'NumpadEnter' ||  event.code ===  'Enter') &&  window.location.href ===  targetUrll &&  elementoActivo !=  'user') {
         // Enfocamos el elemento con ID 'Name'
         document.getElementsByClassName('btn btn-primary-active btn-block regular-text-medium-bold ')[1].click();
         id =  document.getElementById('user').value.replace('-', '').toString();
            window.scrollTo({
             top:  (document.documentElement.scrollHeight *  0.19),
             behavior:  'smooth'
        });
    }
    if ((event.code ===  'NumpadEnter' ||  event.code ===  'Enter') &&  (window.location.href ===  targetUrlt ||  window.location.href ===  targetUrlm) &&  elementoActivo !=  'user' &&  elementoActivo !=  'Reventados-quantity' &&  elementoActivo !=  'Tiempos-quantity') {
         // Enfocamos el elemento con ID 'Name'
         const elementos =  document.getElementsByClassName('btn btn-primary-active btn-block regular-text-medium-bold ');
        var boton =  'Agregar N\u00famero'; // Itera sobre los elementos y verifica si alguno contiene el texto 'pagar'
        const elementoEncontrado =  Array.from(elementos).find(el =>  el.textContent.includes(boton)); // Muestra el elemento encontrado en la consola
        elementoEncontrado.click();
        id =  document.getElementById('user').value.replace('-', '').toString();
    } // Verificamos si la tecla presionada es 'Enter' y si el elemento activo es 'user'
    if ((event.code ===  'NumpadEnter' ||  event.code ===  'Enter') &&  (elementoActivo ===  'Tiempos-quantity' ||  elementoActivo ===  'Reventados-quantity')) {
         // Enfocamos el elemento con ID 'Name'
         window.scrollTo({
             top:  (document.documentElement.scrollHeight *  0.24),
             behavior:  'smooth'
        });
         // Encuentra todos los elementos con la clase 'tu-clase'
        const elementos =  document.getElementsByClassName('btn btn-primary-active btn-block regular-text-medium-bold ');
        var boton =  'Agregar N\u00famero'; // Itera sobre los elementos y verifica si alguno contiene el texto 'pagar'
        const elementoEncontrado =  Array.from(elementos).find(el =>  el.textContent.includes(boton)); // Muestra el elemento encontrado en la consola
        elementoEncontrado.focus();
        id =  document.getElementById('user').value.replace('-', '');
    }
    if ((event.code ===  'Pause' ||  event.code ===  'Escape') &&  elementoActivo ===  'Tiempos-quantity') {
         // Enfocamos el elemento con ID 'Name'
         document.getElementsByClassName('custom-control-input')[0].click();
         document.getElementsByClassName('form-control text-center')[1].focus();
         document.getElementsByClassName('form-control text-center')[1].select();
         window.scrollTo({
             top:  (document.documentElement.scrollHeight *  0.60),
             behavior:  'smooth'
        });
    }
    if ((event.code ===  'Pause' ||  event.code ===  'Escape') &&  elementoActivo ===  'Reventados-quantity') {
         // Enfocamos el elemento con ID 'Name'
         document.getElementsByClassName('custom-control-input')[1].click();
         document.getElementsByClassName('form-control text-center')[2].focus();
         document.getElementsByClassName('form-control text-center')[2].select();
         window.scrollTo({
             top:  (document.documentElement.scrollHeight *  0.80),
             behavior:  'smooth'
        });
    }
    if (event.code ===  'NumpadAdd' &&  elementoActivo !=  'user') {
         // Enfocamos el elemento con ID 'Name'
        var elementos =  document.getElementsByClassName('btn btn-primary-active btn-block regular-text-medium-bold ');
        for (var i =  0;
         i <  elementos.length;
         i++) {
            if (elementos[i].textContent.trim() ===  'Pagar') {
                 elementos[i].click();
            }
        }
        window.scrollTo({
             top:  (document.documentElement.scrollHeight *  0.80),
             behavior:  'smooth'
        });
    }
});
document.addEventListener('click',  function(event) {
     // Obtén el elemento en el que se hizo clic
    var clickedElement =  event.target;
     // Obtén las clases del elemento
    var classes =  clickedElement.className;
        
     // Muestra las clases en la consola
    if (classes == 'btn m-1 btn-outline-dark flip-in-hor-bottom btn-lg' ||  classes ==  'btn m-1 btn-outline-dark flip-in-hor-bottom' ||  classes ==  'btn m-1 btn-dark jello-horizontal') {
        var boton =  document.getElementById('Tiempos-quantity');
         boton.focus();
         boton.select();
    }
    
   //console.log(clickedElement.textContent.trim());
    
    
        if (clickedElement.textContent.trim() === 'Aceptar') {
            
        
        alertedA = false;
        
    }
    
        if (clickedElement.textContent.trim() === 'Cancelar') {
            
        
        alertedA = false;
        
    }
    
    
      if (clickedElement.textContent.trim() === 'Venta de Nuevos Tiempos' || clickedElement.textContent.trim() === 'Venta de Lotto' || clickedElement.textContent.trim() === 'Venta de Tres Monazos' || clickedElement.textContent.trim() === 'Cambio de Premios') {
            
        
        alertedF = false;
        
    }
    
    
    
});