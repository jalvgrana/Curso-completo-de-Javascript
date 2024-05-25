// 125. Callback
// ayuda a actualizar los datos aunque se hayan descargado ya. Ahora se hace más con promesas.

const meses = ['enero', 'febrero', 'marzo', 'abril'];

function carga(nuevo, callback) {
    setTimeout(() => {
        meses.push(nuevo); //añado datos al final
        callback();
    }, 3000);
}

function muestra() {
    setTimeout(() => {
        meses.forEach(mes => {
            console.log(mes)
        });
    }, 1000);
}

muestra()
carga('Mayo', muestra);