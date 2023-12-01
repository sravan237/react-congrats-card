const element = (
  // Write your code here.
  <div className="bg-container">
    <div>
      <h1 className="heading">Congratulations</h1>
    </div>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="profile-image"
      />
      <h1 className="name">Kiran V</h1>
      <p className="institute">
        Vishnu Institute of Computer Education and Technology,
        <br /> Bhimavaram
      </p>
      <img
        src="
https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="profile-image"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
