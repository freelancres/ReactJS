import React, {
    createContext,
    useContext,
    useState
} from 'react';

// Create a new context

const AppContext = createContext();

const ParentComponent = ({children}) => {
    const [count, setCount] = useState(0);
   
    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
      setCount(count - 1);
    };


    return (
        <AppContext.Provider value={{ count, increment, decrement }}>{children}</AppContext.Provider>
    )
    
}

const ChildComponent = () => {
    const { count, increment, decrement } = useContext(AppContext);

    return (
        <div>
        <h2>Child Component</h2>
        <p>Count: {count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
}

const ColoredComponent = () => {
    const { count } = useContext(AppContext);
    return count < 0 ? (
      <div
        style={{
          backgroundColor: "red",
          padding: "20 20",
          height: "50px",
          width: "50px",
        }}
      ></div>
    ) : (
      <div
        style={{
          backgroundColor: "blue",
          padding: "20 20",
          height: "50px",
          width: "50px",
        }}
      ></div>
    );
}


const Counter = () => {
  return (
    <div>
          <h1>Counter</h1>
          <ParentComponent>
              <ColoredComponent />
              <ChildComponent />
        </ParentComponent>
    </div>
  );
}

export default Counter