import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [address, setAddress] = useState("");

  const findNearestStores = e => {
    e.preventDefault();
    const place = {
      address
    };
    axios
      .post("http://localhost:5000/", place)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err.response));
  };

  return (
    <div className="App">
      <form onSubmit={e => findNearestStores(e)}>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
