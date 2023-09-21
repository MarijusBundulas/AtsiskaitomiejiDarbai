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
    return isvedimas;
};

const objektas = produktoObjektas(
    "Masinėlė", 
    100, 
    "https://www.audi.lt/content/dam/nemo/models/misc/pdf/my-2023/preislisten/image-883x496/883x496_preisliste_a4-limousine_s4-limousine_a4-avant_s4-avant_a4-avant-g-tron_a4-allroad-quattro.jpg",
    1, 
    "Graži raudona mašinėlė", 
    0.15
);
document.getElementById("isvedimas").innerHTML = "<h2> Gustas Siurkus, Marijus Bundulas, Aidas Salvis, Rokas Rumeika </h2>" + produktoIsvedimas(objektas);
