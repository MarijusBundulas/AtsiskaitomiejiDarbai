const express = require('express')
const { TwingEnvironment, TwingLoaderFilesystem } = require("twing");
const path = require("path");

const app = express()
const port = 3333
app.use(express.static('static'))

let loader = new TwingLoaderFilesystem(path.join(__dirname, "templates"));
let twing = new TwingEnvironment(loader);

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
    "nuoroda6": {
      "pavadinimas": 'ADIDAS FORUM BOLD W',
      "kaina": '84.99',
      "aprasymas": 'Pasisemk įkvėpimo iš krepšinio parketo dizaino ir rinkis Forum Bold kedus iš naujos adidas kolekcijos!',
      "paveiksliukas": "https://sizeer.lt/media/cache/gallery/rc/fxxfnkro/adidas-forum-bold-w-moterims-kedai-balta-id1806.jpg",
    },
  };

app.get('/prekes', (req, res) => {

  twing
  .render("index.html", {

    prekes:prekes
    //  preke1pav:prekes["nuoroda1"].pavadinimas,
    //  preke1img:prekes["nuoroda1"].paveiksliukas,
    //  preke2pav:prekes["nuoroda2"].pavadinimas,
    //  preke2img:prekes["nuoroda2"].paveiksliukas,
    //  preke3pav:prekes["nuoroda3"].pavadinimas,
    //  preke3img:prekes["nuoroda3"].paveiksliukas,
    //  preke4pav:prekes["nuoroda4"].pavadinimas,
    //  preke4img:prekes["nuoroda4"].paveiksliukas,
    //  preke5pav:prekes["nuoroda5"].pavadinimas,
    //  preke5img:prekes["nuoroda5"].paveiksliukas,
    //  preke6pav:prekes["nuoroda6"].pavadinimas,
    //  preke6img:prekes["nuoroda6"].paveiksliukas,

  })
  .then((output) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(output);
    return res.end();
  });
});



app.get('/prekes/:preke', (req, res) => {

    twing
    .render("prekes.html", {

        pavadinimas:prekes[req.params.preke].pavadinimas,
        kaina:prekes[req.params.preke].kaina,
        aprasymas:prekes[req.params.preke].aprasymas,
        paveiksliukas:prekes[req.params.preke].paveiksliukas,

    })

    .then((output) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(output);
        return res.end();
      });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })