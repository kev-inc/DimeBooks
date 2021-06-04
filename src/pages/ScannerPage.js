import axios from "axios";
import { useState } from "react";
import BarcodeScannerComponent from "react-webcam-barcode-scanner";

export default function ScannerPage() {
  const [id, setId] = useState("");
  const [running, setRunning] = useState(true);
  const [result, setResult] = useState({});
  const handleScan = async (data) => {
    const id = data.text;
    setId(id);
    const url = `https://openlibrary.org/isbn/${id}.json`;
    setRunning(false);
    axios.get(url).then((resp) => {
      setResult(resp.data);
    });
  };
  const closeModal = () => {
    setRunning(true);
    setId("");
    setResult({});
  };
  return (
    <div>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (running && result) handleScan(result);
        }}
      />
      <p>{running ? "Running" : "Paused"}</p>
      <p>{id}</p>
      {!running && <DetailsModal data={result} close={closeModal} />}
    </div>
  );
}

function DetailsModal(props) {
  const { data, close } = props;
  return (
    <div class="modal is-active">
      <div class="modal-background"></div>
      <div class="modal-content box">
        {data === {} ? (
          "Loading"
        ) : (
          <div>
            <div>{data.title}</div>
            <div>{data.subtitle}</div>
            {data.covers &&
              data.covers.map((url, index) => (
                <img
                  src={`https://covers.openlibrary.org/b/id/${url}.jpg`}
                  alt=""
                />
              ))}
          </div>
        )}
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        onClick={close}
      ></button>
    </div>
  );
}
