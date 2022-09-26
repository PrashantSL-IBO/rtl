import "./App.css";
function App() {
  return (
    <div className="App">
      <form>
        <div id="nameLabel">
          <label>Name</label>
          <input placeholder="Enter Your Name" type="text" />
        </div>
        <div data-testid="ageLabel">
          <label>Age</label>
          <input placeholder="Enter Your Age" type="Number" value={7} />
        </div>
        <div>
          <label>Phone Number</label>
          <input placeholder="Enter Your Phone Number" type="Number" />
        </div>
        <div>
          <label>City Name</label>
          <input placeholder="Enter Your City Name" type="text" />
        </div>
      </form>
    </div>
  );
}

export default App;
