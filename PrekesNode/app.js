const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('static'));



const prekes = {
  "nuoroda1": {
    "pavadinimas": "NEW BALANCE 574",
    "kaina": "98.99",
    "aprasymas": "NEW BALANCE KEDAI SKIRTI LAISVALAIKIUI",
    "paveiksliukas": "https://sizeer.lt/media/cache/gallery/rc/qzgo1jf7/new-balance-530-vyrams-begimo-tamsiai-melyna-mr530smt.jpg",
  },
  "nuoroda2": {
    "pavadinimas": "New Balance 530",
    "kaina": "98.99",
    "aprasymas": "NEW BALANCE KEDAI SKIRTI BEGIMUI",
    "paveiksliukas": "https://sizeer.lt/media/cache/gallery/rc/ymx7lhnz/new-balance-574-moterims-kedai-rusvai-gelsva-wl574pc.jpg",
  },
  "nuoroda3": {
    "pavadinimas": "CONVERSE CHUCK TAYLOR ALL STAR LIFT CANVAS LOW TOP",
    "kaina": "76.49",
    "aprasymas": "Užkariauk miestą su inkariukais All Star Lift! Šis stilingas modelis sužavės kiekvieną nebanalių sprendimų gerbėją.",
    "paveiksliukas": "https://sizeer.lt/media/cache/gallery/rc/ij0npzyg/converse-chuck-taylor-all-star-lift-canvas-low-top-moterims-kedai-juoda-560250c.jpg",
  },
 "nuoroda4": {
    "pavadinimas": "S.NOW JOB SIZEER CAP-BLACK",
    "kaina": "22.99",
    "aprasymas": "Kepurė su snapeliu “S.NOW JOB” yra ribotos unisex SNOW JOB by Sizeer kolekcijos dalis.",
    "paveiksliukas" : "https://sizeer.lt/media/cache/gallery/rc/r3jathly/s-now-job-sizeer-cap-black-unisex-kepures-su-snapeliu-juoda-si123cap50001.jpg",
  },
  "nuoroda5": {
    "pavadinimas": "FILA RAY TRACER TR 2",
    "kaina": "62.99",
    "aprasymas": "Ugly shoes yra išskirtinė tendencija, sukurta tiems, kurie nori išsiskirti. Visiems 90-ųjų masyvių, didelių formų mėgėjams prekės ženklas Fila siūlo Ray Tracer TR 2 modelį.",
    "paveiksliukas": "https://sizeer.lt/media/cache/gallery/rc/bg5hzngz/fila-ray-tracer-tr-2-moterims-turistiniai-batai-daugiaspalve-5rm02455119.jpg",
  },
};



app.get('/prekes', (req, res) => {
 
  let pagr = `<!DOCTYPE html> 
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <base href="http://localhost:3000/">
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
        <title> Pagrindinis </title>
    </head>
    <body>

      <h1 class="text-center display-1">Kedai</h1>
      <div class='row container-fluid'>
          <a href='/prekes/nuoroda1' class="col"> <img src ="${prekes["nuoroda1"].paveiksliukas}" width="200" height="200"> <h3>Kedai1</h3> </a>
          <a href='/prekes/nuoroda2' class="col"> <img src ="${prekes["nuoroda2"].paveiksliukas}" width="200" height="200"> <h3>Kedai2</h3> </a>
          <a href='/prekes/nuoroda3' class="col"> <img src ="${prekes["nuoroda3"].paveiksliukas}" width="200" height="200"> <h3>Kedai3</h3> </a>
          <a href='/prekes/nuoroda4' class="col"> <img src ="${prekes["nuoroda4"].paveiksliukas}" width="200" height="200"> <h3>Kedai4</h3> </a>
          <a href='/prekes/nuoroda5' class="col"> <img src ="${prekes["nuoroda5"].paveiksliukas}" width="200" height="200"> <h3>Kedai5</h3> </a>
      </div>
        
    </body>
    </html>`
  res.send(pagr);
});



app.get('/prekes/:preke', (req, res) => {
  if (prekes[req.params.preke]) {
    let html = `<!DOCTYPE html> 
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <base href="http://localhost:3000/">
          <link rel="stylesheet" href="style.css">
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
          <title> ${req.params.preke} </title>
      </head>
      <body>

        <h1> ${prekes[req.params.preke].pavadinimas} </h1> 
        <p> ${prekes[req.params.preke].kaina} </p>
        <p> ${prekes[req.params.preke].aprasymas} </p>
        <img src ="${prekes[req.params.preke].paveiksliukas}">
          
      </body>
      </html>`
    res.send(html);

  };

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});