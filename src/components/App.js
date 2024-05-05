// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  const [dogData, setDogData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDogData(data.message);
        setIsLoaded(true);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(dogData);
  return (
    <div>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        <img src={dogData} alt="A Random Dog"></img>
      )}
    </div>
  );
}

export default App;
