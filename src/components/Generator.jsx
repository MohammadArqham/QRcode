import  React,{ useState } from "react";
import QRCode from "react-qr-code";
import "./Generator.css";

const Generator = () => {
    const [value,setValue] = useState("hello");

    const setQrCode = (text) =>{
        setValue(text);
    }
  return (
    <>
    <div className="container">
      <div>
        

        <QRCode
          value={value}
          size={300}
          fgColor="#2b3b35"
        />
        <input placeholder="Enter Qr Code Value" type="text" onChange={(e)=> setQrCode(e.target.value) } />
      </div>
     
    </div>
  </>
  )
}

export default Generator