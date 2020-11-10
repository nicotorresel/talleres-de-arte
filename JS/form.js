function mensaje() {
    alert("Querido artista, recibimos su solicitud\ny la estaremos respondiendo a la\nbrevedad");

}

function consulta() {
    setTimeout(() => {
        var usigUrl = "http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion=";
        var location = document.getElementById("direccion").value;
        fetch(usigUrl + location)  //pedimos la ubicacion al servidor
            .then(data => data.json()) //parseamos la respuesta a un JSON
            .then(res => {
                if (res.direccionesNormalizadas && res.direccionesNormalizadas.length) {
                    var loader = document.getElementById('address_input_loader');
                    var addressInputCard = document.getElementById('address_input_card');
                    addressInputCard.removeChild(loader);
                    res.direccionesNormalizadas.forEach((address) => {
                        var addressContainer = document.createElement('div');
                        var label = document.createTextNode(address.direccion);
                        addressContainer.appendChild(label);
                        addressInputCard.appendChild(addressContainer);
                    })
                } else {
                    var addressInputCard = document.getElementById('address_input_card');
                    var addressContainer = document.createElement('div');
                    var label = document.createTextNode('No se encontraron resultados');
                    addressContainer.appendChild(label);
                    addressInputCard.appendChild(addressContainer);
                }
            })
            .catch(error => {
                var addressInputCard = document.getElementById('address_input_card');
                var addressContainer = document.createElement('div');
                var label = document.createTextNode('No se encontraron resultados');
                addressContainer.appendChild(label);
                addressInputCard.appendChild(addressContainer); 
            })
    }, 2000)
    var addressInput = document.getElementById('address_input');
    if (addressInput) {
        var inputCard = document.createElement('div');
        inputCard.setAttribute('id', 'address_input_card');
        var loaderDiv = document.createElement('div');
        loaderDiv.setAttribute('id', 'address_input_loader');
        if (!document.getElementById('address_input_loader')) {
            var loaderLabel = document.createTextNode('Cargando...');
            loaderDiv.appendChild(loaderLabel);
            inputCard.appendChild(loaderDiv);
            addressInput.appendChild(inputCard);
        }
    }
};

