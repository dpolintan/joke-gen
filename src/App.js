import "./App.css";
import { useState } from "react";

function App() {
  const [setUp, setSetUp] = useState(null);
  const [delivery, setDelivery] = useState(null);

  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://jokeapi-v2.p.rapidapi.com/joke/Any",
    params: {
      type: "twopart",
      format: "json",
      idRange: "0-150",
      blacklistFlags: "nsfw,racist",
    },
    headers: {
      "X-RapidAPI-Key": "e937be31eamshe23e10bfa93ab50p12d0a4jsne54ed687ddd9",
      "X-RapidAPI-Host": "jokeapi-v2.p.rapidapi.com",
    },
  };

  const getJoke = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setSetUp(response.data.setup);
        setDelivery(response.data.delivery);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  const disabledDelivery = true;

  const showDelivery = () => {
    disabledDelivery = false;
  };

  return (
    <div className="App">
      {
        <button className="primary-button" onClick={getJoke}>
          Click For Joke
        </button>
      }
      {setUp}
      {<button onClick={showDelivery}>Click For Joke</button>}
      <div hidden={disabledDelivery}>{delivery}</div>
    </div>
  );
}

export default App;
