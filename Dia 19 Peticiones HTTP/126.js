// 126. Promesas

const descarga = new Promise((resolve, reject) => {
    const confirmacion = true;
    if (confirmacion) {
        resolve('Tu descarga de datos ha sido correcta')
    } else {
        reject('Ha ocurrido un error en tu descarga')
    }
})

//así me da muchos datos
//console.log(descarga)

//asi me da solo la frase de confirmacion que puse sobre la descarga
descarga.then(confir => {
    console.log(confir)
})