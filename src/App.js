import { useState } from "react";
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


  return (
    <div>
      <Sarasas prekes={prekes}></Sarasas>
      <Forma></Forma>
    </div>
  );
};

export default App;
