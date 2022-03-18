
function calcularModa (lista){
    const listaCount = {};

    lista.map(
        function(element){
            if (listaCount[element]) {
                listaCount[element] += 1;
            } else {
                listaCount[element] = 1;
            }
        }
    );

    const lista2 = Object.entries(listaCount).sort(
        function (a,b){
            /** 
             * a[1] - b[1] < 0 -> return number negative
             * a[1] - b[1] > 0 -> return number positive
             * a[1] - b[1] = 0 -> return 0
            */
            return a[1] - b[1];
        }
    );

    const moda = lista2[lista2.length-1]
    console.log(moda)
}
