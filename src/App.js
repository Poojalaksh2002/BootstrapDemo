import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-between vh-100">
      <div className="container-text p-4">
        <h1 className="heading text-center">Calling on the Name of the Lord</h1>
        <p className="paragraph text-center mt-4">
          Calling on the Name of the Lord to set our mind on the spirit-1
          Cor.12:3;Rom.8:6; 10:12-13
        </p>
      </div>

      <div>
        <h6 className="counter">5</h6>
      </div>

      <div className="d-flex justify-content-between vw-100">
        <button className="btn btn-dark bg-black btn-hover-blue btn-back ">
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className="btn btn-dark bg-black btn-hover-blue btn-continue ">
          Continue
        </button>
        <button className="exit btn btn btn-danger ">Exit</button>
      </div>
    </div>
  );
}

export default App;
