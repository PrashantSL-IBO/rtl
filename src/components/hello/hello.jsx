import React, { useState } from "react";

const Hello = () => {
  const [login, setLogin] = useState(false);
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Form</h1>
        <div id="nameLabel">
          <label>Name</label>
          <input placeholder="Enter Your Name" type="text" />
        </div>
        <div data-testid="ageLabel">
          <label>Age</label>
          <input placeholder="Enter Your Age" type="Number" value={7} />
        </div>
        <div>
          <label title="Phone Number">Phone Number</label>
          <input placeholder="Enter Your Phone Number" type="Number" />
        </div>
        <div>
          <label title="City">City</label>
          <input placeholder="Enter Your City Name" type="text" />
        </div>
        <button onClick={() => setLogin(!login)}>
          {login ? <h1>Logout</h1> : <h1>LogIn</h1>}
        </button>
      </form>
    </>
  );
};

export default Hello;
