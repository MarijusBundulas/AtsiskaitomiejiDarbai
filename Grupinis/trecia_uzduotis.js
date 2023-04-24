function produktoObjektas (pavadinimas, kaina, paveiksliukas, kiekis, aprasymas, nuolaida = 0.0) {
    return {
        "name": pavadinimas,
        "price": kaina,
        "image": paveiksliukas,
        "amount": kiekis,
        "description": aprasymas,
        "discount": nuolaida
    };
};

function produktoIsvedimas(produktoObj) {
    if (produktoObj.amount == 0)
        return "Isparduota";
    let isvedimas = "<img  width='300' height='200' src=" + produktoObj.image + ">" +
        "<br>name:" + produktoObj.name;

    if (produktoObj.discount == 0) {
        isvedimas += "<br>price: " 
        isvedimas += produktoObj.price;
    }
    else {
        isvedimas += "<br>price: "; 
        isvedimas += produktoObj.price - (produktoObj.price * produktoObj.discount);
    }
        

    isvedimas += "<br>amount: " + produktoObj.amount;
    isvedimas += "<br>description: " + produktoObj.description;
    isvedimas += "<br><br>";
    return isvedimas;
};

const produktas1 = produktoObjektas(
    "Bakanierius",
    300, // kaina
    "https://thumb.knygos-static.lt/AF7hMdEAZ08HqcKAozcwP5HN_ZA=/fit-in/0x800/images/books/6975/1462874719_modproduct4ddf522cacf5fb1.jpg", // nuotraukele
    50, // kiekis
    "bakanierius, karybu piratas, peleda krc", //aprasymas
    0.1 // nuolaida
)


const produktas2 = produktoObjektas(
    "Šaldyta pelė",
    2,
    "https://staktosvoras.lt/wp-content/uploads/2020/10/762.jpg",
    1,
    "Sviežiai šaldytos pelytės",
    0
)


const produktas3 = produktoObjektas(
    "Ausines",
    400, //kaina
    "https://cdn.shopify.com/s/files/1/0670/1077/products/MW75S2_Hero_800x800_61a84578-4026-4bc0-8724-c48ab6b36229_1020x.png?v=1665504739", // nuotrauka
    15, //kiekis
    "Active Noise-Cancelling Wireless Headphones", //aprasymas
    0.2 //nuolaida
)

let output = ""
output += produktoIsvedimas(produktas1) + "<br><br>"
output += produktoIsvedimas(produktas2) + "<br><br>"
output += produktoIsvedimas(produktas3) + "<br><br>"

document.getElementById("isvedimas").innerHTML = "<h2> Gustas Siurkus, Marijus Bundulas, Aidas Salvis, Rokas Rumeika </h2>" + output; //isvedam