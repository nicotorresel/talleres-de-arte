function mensaje () { 
alert("Querido artista, recibimos su solicitud\ny la estaremos respondiendo a la\nbrevedad");
    
}
function consulta(){   
    var input = document.getElementById("direccion");
    var usigUrl = "http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=";
	var location = document.getElementById("direccion").value;
    fetch(usigUrl + location)  //pedimos la ubicacion al servidor
    .then(data => data.json() ) //parseamos la respuesta a un JSON
    .then(res => {
        console.log(res)
    }) 
};

