import SearchDisp from './SearchField';
import ListView from './ListDisplay';
import { getPost } from './Axios';
import { useState, useEffect } from 'react';


function App() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    getPost().then(jsonData => {
      setData(jsonData)
      return jsonData
    }).then(jsonData => {
      setSearch(jsonData)
    })
  }, [])

  return (
    <div>  
        <SearchDisp infos={data} results={setSearch}/>
        <ListView jsonData={search} resetData={data}/>
    </div>
  );
}

export default App;
