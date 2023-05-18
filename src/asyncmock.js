const productos = [
    {id: 1, nombre: "Cerveza Artesanal Soñada Irish", descripcion:"Cerveza Artesanal Soñada Irish Red 500 Ml", precio: 5999, imagen: "https://res.cloudinary.com/df4wfmkk1/image/upload/e_make_transparent:10/v1673842372/aw6eftywvlzfu30megbg.png"},
    {id: 2, nombre: "Ron Bacardi", descripcion: "Ron Bacardi Blanco Carta Blanca Superior 750ml", precio: 2790, imagen: "https://res.cloudinary.com/df4wfmkk1/image/upload/e_make_transparent:10/v1672184605/ncwmfxsqggnm0ph0esjq.png"},
    {id: 3, nombre: "Vodka Smirnoff", descripcion: "Vodka Smirnoff 700ml Original Clasico", precio: 1255, imagen: "https://res.cloudinary.com/df4wfmkk1/image/upload/e_make_transparent:10/v1672184634/kbttocwgjqgxw7su9h02.png"},
    {id: 4, nombre: "Frangelico Licor", descripcion: "Frangelico Licor 700ml Italiano Avellana", precio: 5400, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672184666/rw92w5mxe9tqocohhw7i.png"},
    {id: 5, nombre: "Gin Monkey 47", descripcion: "Gin Monkey 47 London Dry 500 mL", precio: 11700, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185081/f1r0l36nufhrlthhvahz.png"},
    {id: 6, nombre: "Jack Daniels", descripcion: "Jack Daniel's Old No. 7 750 mL", precio: 10800, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672184780/gt7yeb9c17akzdj9ah4k.png"},
    {id: 7, nombre: "Vino Rutini Cabernet", descripcion: "Vino Rutini Cabernet Malbec 750ml Botella Tinto", precio: 2979, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672184837/pggunuqvt5t1p8g9s1rc.png"},
    {id: 8, nombre: "Chivas Regal 12 Años", descripcion: "Chivas Regal 12 Años Escocia 1 L", precio: 7290, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185332/ynixcryoy1wfvwxalupa.png"},
    {id: 9, nombre: "Champagne Baron B", descripcion: "Champagne Baron B Extra Brut 750ml", precio: 4140, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185290/s28ob26epptoaukjzfqy.png"},
    {id: 10, nombre: "Ron Havana Club", descripcion: "Ron Havana Club Blanco 3 Años 750", precio: 2160, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185727/d6x31secqkt3by6ryznj.png"},
    {id: 11, nombre: "Aberlour Malt escocés", descripcion: "Aberlour Malt escocés 700 mL", precio: 15500, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672184882/gwayrgexiqenqgdsda6u.png"},
    {id: 12, nombre: "Gin Bombay Sapphire", descripcion: "Gin Bombay Sapphire London Dry 750 mL", precio: 11860, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185452/x2bssu8rs2jt0xriwx6r.png"},     
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos)
        }, 2000)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout (() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto)
        }, 2000)
    })
}