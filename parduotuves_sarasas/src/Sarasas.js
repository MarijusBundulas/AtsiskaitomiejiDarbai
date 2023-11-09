import Preke from "./Preke";

const Sarasas = (props) => {
  console.log(props.prekes);

  const prekes = props.prekes.map((item, index) => <Preke pavadinimas={item} key={index} handleDeletePreke={props.handleDeletePreke}></Preke>);

  return (
    <div>
      <h1>Nupirkti parduotuvėje</h1>
      <ul>
        {prekes}
      </ul>
    </div>
  );
};

export default Sarasas;
