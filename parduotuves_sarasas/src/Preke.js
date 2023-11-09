const Preke = (props) => {
  const handleDelete = (event) => {
    console.log("Iškviečiame iš prekės komponento:")
    console.log(props.pavadinimas);

    props.handleDeletePreke(props.pavadinimas);
  };

  return (
    <li>
      {props.pavadinimas}&nbsp;
      <b onClick={handleDelete} style={{ color: "red", cursor: "pointer" }}>
        &times;
      </b>
    </li>
  );
};

export default Preke;
