const Sarasas = (props) => {
  console.log(props.prekes);

  const li_elementai = props.prekes.map((item) => <li>{item}</li>)

  return (
    <div>
      <h1>Nupirkti parduotuvėje</h1>
      <ul>
        {li_elementai}
      </ul>
    </div>
  );
};

export default Sarasas;
