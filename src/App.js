import logo from "./logo.svg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-between vh-100 ">
      <div className="fs-1 fs-xs-1 fs-sm-2 fs-md-5">
        <h1 className="text-center">Calling on the Name of the Lord</h1>
        <p className="text-center">
          Calling on the Name of the Lord to set our mind on the spirit-1
          Cor.12:3;Rom.8:6; 10:12-13
        </p>
      </div>

      <div>
        <h4>5</h4>
      </div>

      <div className="d-flex justify-content-around vw-100">
        <button className="btn btn-dark bg-black btn-hover-blue">
          <FontAwesomeIcon icon={faBackward} />
        </button>
        <button className="btn btn-dark bg-black btn-hover-blue">
          Continue
        </button>
        <button className="exit btn btn-danger">Exit</button>
      </div>
    </div>
  );
}

export default App;
