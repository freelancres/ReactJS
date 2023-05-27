import React, {useState, useEffect} from 'react'

const DataComponent = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    'https://jsonplaceholder.typicode.com/posts/1'
                );
                const jsonData = await response.json();
                setData(jsonData);
            
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };
        // Call the fetch data function when the component mount
        fetchData();
    }, [])
    return (
        <div>
            {
                data ? (
                    <div>
                        <h1>{data.title}</h1>
                        <p>{data.body }</p>
                    </div>
                ):(
                    <p>Loading data ...</p>
                )
          }
        </div>
    );
};

 export default DataComponent;
