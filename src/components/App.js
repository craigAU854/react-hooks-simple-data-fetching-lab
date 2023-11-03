import React, { useEffect, useState } from "react";

function App() {
    const[image, setImage] = useState(null);

    useEffect(() => 
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then((results) => {
        const image= results.message
        setImage(image)
    }, [])
    )
    if(!image) {
        return <p>Loading...</p>
    }

    return(
        <div id="Random-img">
        <img src={image} alt="A Random Dog"></img>
        </div>
    )
    }


export default App