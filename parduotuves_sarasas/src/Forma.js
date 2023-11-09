import { useState } from "react";

const Forma = (props) => {
  const [pavadinimas, setPavadinimas] = useState("");

  const handleClick = (event) => {
    // console.log(pavadinimas);
    if (pavadinimas) {
      props.handleAddPreke(pavadinimas);
      setPavadinimas("");
    }
  }

  const handleChange = (event) => {
    // console.log(event.target.value);
    setPavadinimas(event.target.value);
  }

  return (
    <form>
      <h3>Pridėti prekę į sąrašą</h3>

      <div className="input-group mb-3">
        <input type="text" className="form-control" value={pavadinimas} onChange={handleChange}/>
        <button className="btn btn-outline-secondary" type="button" onClick={handleClick}>
          pridėti
        </button>
      </div>
    </form>
  );
};

export default Forma;
