import { useEffect, useState } from "react";
import Forma from "./Forma";
import Sarasas from "./Sarasas";

const App = () => {

  // const prekes = [
  //   "Bulvės",
  //   "Mėsa",
  //   "Pienas",
  //   "Duona",
  //   "Limonadas",
  // ];

  const [prekes, setPrekes] = useState([
    "Bulvės",
    "Mėsa",
    "Pienas",
    "Duona",
    "Limonadas",
  ]);

  useEffect(() => {
    const prekes_local = JSON.parse(localStorage.getItem("prekes"));
    console.log(prekes_local);
    
    if (prekes_local) {
      setPrekes(prekes_local)
    } 
  }, []);

  const handleAddPreke = (pavadinimas) => {
    // console.log(pavadinimas);
    const prekes_naujas = [pavadinimas, ...prekes];
    localStorage.setItem("prekes", JSON.stringify(prekes_naujas));
    setPrekes(prekes_naujas);
  }

  const handleDeletePreke = (pavadinimas) => {
    console.log("Iškviečiame iš APP komponento: ");
    console.log(pavadinimas);

    const prekes_naujas = prekes.filter((item) => item !== pavadinimas);
    localStorage.setItem("prekes", JSON.stringify(prekes_naujas));
    setPrekes(prekes_naujas);
  }

  return (
    <div>
      <Sarasas prekes={prekes} handleDeletePreke={handleDeletePreke}></Sarasas>
      <Forma handleAddPreke={handleAddPreke}></Forma>
    </div>
  );
};

export default App;
