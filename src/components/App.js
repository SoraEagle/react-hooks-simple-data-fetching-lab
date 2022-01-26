// create your App component here
import React, {useState, useEffect} from "react";

function App(){
    const [image, setImage] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    // useEffect
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
          .then((response) => response.json())
          .then((data) => {
              console.log(data.message);
            setImage(data.message);
            setIsLoaded(true);
          });

          return(
              <div>
          <p>Loading...</p>
          </div>
          );
      }, []); //Only render the fetch request ONCE!

      if (!isLoaded) return <p>Loading...</p>;

    return(
        <img src={image} alt="A Random Dog" />
    );
}

export default App;