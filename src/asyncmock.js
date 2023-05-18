const productos = [
    {id: "1", nombre: "Vino Rutini Cabernet", descripcion:"Vino Rutini Cabernet Malbec 750ml Botella Tinto", precio: 2979, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672184837/pggunuqvt5t1p8g9s1rc.png", idCat: "1" },
    {id: "2", nombre: "Vino blanco Torrontés Cafayate", descripcion:"Vino blanco Torrontés Cafayate Cosecha Tardía bodega Etchart 750 ml", precio: 621, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185200/g9w7rstdr3tddwfgawrs.png", idCat: "1" },
    {id: "3", nombre: "Vino Tinto Trumpeter", descripcion:"Vino Tinto Trumpeter Malbec 750ml Botella Rutini Winesl", precio: 1620, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185233/lsjhbywiuv3lyizwizil.png", idCat: "1" },
    {id: "4", nombre: "Alambrado Blanc De Blancs", descripcion:"Espumante Alambrado Blanc De Blancs 750ml", precio: 1404, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1673844126/uvrfhjvgwz3mmzjapllx.png", idCat: "2" },
    {id: "5", nombre: "Champagne Baron B", descripcion:"Champagne Baron B Extra Brut 750ml", precio: 4140, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185290/s28ob26epptoaukjzfqy.png", idCat: "2" },
    {id: "6", nombre: "Champagne Chandon", descripcion:"Champagne Chandon Brut Nature 750ml", precio: 2340, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185425/celo7pdbm98iwvel9cdh.png", idCat: "2" },
    {id: "7", nombre: "Jack Daniels", descripcion:"Jack Daniel's Old No. 7 750 mL.", precio: 10080, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672184780/gt7yeb9c17akzdj9ah4k.png", idCat: "3" },
    {id: "8", nombre: "Chivas Regal 12 Años", descripcion:"Chivas Regal 12 Años Escocia 1 L.", precio: 7290, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185332/ynixcryoy1wfvwxalupa.png", idCat: "3" },
    {id: "9", nombre: "Ballantine's escocés", descripcion:"Ballantine's escocés 750 mL", precio: 6480, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185168/pmplzvkgdwyfbyl6syql.png", idCat: "3" },
    {id: "10", nombre: "Gin Monkey 47", descripcion:"Gin Monkey 47 London Dry 500 mL", precio: 11700, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185081/f1r0l36nufhrlthhvahz.png", idCat: "4" },
    {id: "11", nombre: "Gin Bombay Sapphire", descripcion:"Gin Bombay Sapphire London Dry 750 mL", precio: 11860, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185452/x2bssu8rs2jt0xriwx6r.png", idCat: "4" },
    {id: "12", nombre: "Gin Beefeater 24", descripcion:"Gin Beefeater 24 London Dry 750 mL", precio: 7830, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185502/zb9u8mwkcebk76wyfdag.png", idCat: "4" },
    {id: "13", nombre: "Frangelico Licor", descripcion:"Frangelico Licor 700ml Italiano Avellana", precio: 5400, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672184666/rw92w5mxe9tqocohhw7i.png", idCat: "5" },
    {id: "14", nombre: "Licor Amarula 750ml", descripcion:"Licor Amarula 750ml", precio: 7290, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185530/houactokweyhzy5jreir.png", idCat: "5" },
    {id: "15", nombre: "Grappa Valleviejo", descripcion:"Grappa Valleviejo 930ml Clasica Nacional", precio: 1251, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185560/p5u4zjhmo763lsecmuyc.png", idCat: "5" },
    {id: "16", nombre: "Vodka Wyborowa", descripcion:"Vodka Wyborowa 750ml Origen Polonia", precio: 1278, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185617/ayvb3thvfscxsgfb7ew5.png", idCat: "6" },
    {id: "17", nombre: "Vodka Skyy", descripcion:"Vodka Skyy 750 Ml Clasico Original Importado", precio: 1350, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185643/s2osmmp0agnmdfickenc.png", idCat: "6" },
    {id: "18", nombre: "Absolut Vodka Apeach", descripcion:"Absolut Vodka Apeach Melocoton 750 Ml Importado", precio: 2483, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185665/y533pdncibgwlgb5wdjc.png", idCat: "6" },
    {id: "19", nombre: "Ron Bacardi", descripcion:"Ron Bacardi Blanco Carta Blanca Superior 750ml", precio: 2790, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672184605/ncwmfxsqggnm0ph0esjq.png", idCat: "7" },
    {id: "20", nombre: "Ron Santa Teresa", descripcion:"Ron Santa Teresa Gran Reserva 750ml", precio: 5094, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185696/ju3obnfntozimjqjqcmo.png", idCat: "7" },
    {id: "21", nombre: "Ron Santa Teresa", descripcion:"Ron Santa Teresa 1796 750ml Solera", precio: 11430, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185756/phciyp9teuza8g0dmcds.png", idCat: "7" },
    {id: "22", nombre: "Jameson", descripcion:"Jameson Irlanda 1 L", precio: 4860, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185815/sgonmtmr5oxmrek9lvnh.png", idCat: "8" },
    {id: "23", nombre: "Anis Ricard", descripcion:"Anis Ricard Pastis De Marsella 750ml", precio: 2760, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185845/ns3pq2qa0ird4tbjucyj.png", idCat: "8" },
    {id: "24", nombre: "Campari", descripcion:"Campari Aperitivo 750 Ml Botella", precio: 1260, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185870/gf4spgipay5o36hnfnlw.png", idCat: "8" },
    {id: "25", nombre: "Cerveza Artesanal Soñada Irish", descripcion:"Cerveza Artesanal Soñada Irish Red 500 Ml", precio: 5999, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672183993/vhujkk94ijt5ecb8vplt.png", idCat: "9" },
    {id: "26", nombre: "Cerveza Budweiser", descripcion:"Cerveza Budweiser American Adjunct Lager rubia 710 mL", precio: 441, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185904/zkqghmjsz59ujmixxktc.png", idCat: "9" },
    {id: "27", nombre: "Cerveza Corona", descripcion:"Cerveza Corona Porron 710 Ml Botella", precio: 486, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185950/uek7ugpagqhcudarvchx.png", idCat: "9" },
    {id: "28", nombre: "Cerveza Guinness", descripcion:"Cerveza Guinness Extra Stout 473 Ml", precio: 368, imagen: "http://res.cloudinary.com/df4wfmkk1/image/upload/v1672185979/am6fnqlq912lr5egqkfa.png", idCat: "9" },   
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout (() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto)
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoria.

 export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout (() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria)
        }, 100)
    })
 }