const Forma = () => {
  return (
    <form>
      <h3>Pridėti prekę į sąrašą</h3>

      <div className="input-group mb-3">
        <input type="text" className="form-control" />
        <button className="btn btn-outline-secondary" type="button">
          pridėti
        </button>
      </div>
    </form>
  );
};

export default Forma;
