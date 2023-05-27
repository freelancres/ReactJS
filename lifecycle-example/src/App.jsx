// import DataComponent from "./DataComponent";
import React, { useState, useEffect, useContext, createContext } from 'react';

// Create new context
const DataContext = createContext();

// DataProvider
const DataProvider = ({children}) => {
  const [data, setData] = useState(null);
  useEffect(
    () => { 
      const fetchData = async () => {
        try {
          const reponse = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
          );
          const jsonData = await reponse.json();
          setData(jsonData);

        } catch (error) {
          console.log(error);
        }

      }

      fetchData();
    },
    []
  );

// Provide the data value to the consuming components
  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;


}

const DataComponent = () => {
  const data = useContext(DataContext);

  return (
    <div>
      {data ? (
        <div>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>Loading data ...</p>
      )}
    </div>
  );
}

const App = () => {
  return (
    <div >
      <header >
        Life Cycle
      </header>
      <br />
      <DataProvider>
        <DataComponent />
      </DataProvider>
          
    </div>
  );
}

export default App;
