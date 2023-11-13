import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import "./Scanner.css";
const Scanner = () => {
  const [scannerResut, SetScannerResult] = useState(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 300,
        height: 300,
      },
      fps: 5,
    });
    const success = (result) => {
      scanner.clear();
      SetScannerResult(result);
    };
    const error = (err) => {};
    scanner.render(success, error);
  }, []);

  return (
    <div className="scConatiner">
      <div>
        <h1>QR code scanner</h1>
        {scannerResut ? (
          <div></div>
        ) : (
          <div className="reader" id="reader"></div>
        )}
        <h1>{scannerResut}</h1>
      </div>
    </div>
  );
};

export default Scanner;
