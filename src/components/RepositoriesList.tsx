import React, { useState } from "react";
import { useActions } from "../hooks/useActions";
import {useTypedSelector} from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();
  const { data, loading, error } = useTypedSelector(
    (state) => state.repositories
  );

  console.log(data);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    searchRepositories(term);
  };
  return (
    <form onSubmit={onSubmit}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
      <button>Search</button>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map(data=><div>{data}</div>)}
    </form>
  );
};

export default RepositoriesList;
