import { useState } from "react";
import Form from "./Form";
import "./root.css";
const App = () => {
  const [data1, setData1] = useState({
    month: "--",
    year: "--",
    cvc: "---",
    name: "------------",
    number: "*** *** *** ***",
  });

  const recieveDataForm = (data) => {
    const newData = { ...data1 };
    newData.name = data.name;
    newData.number = data.number;
    newData.cvc = data.cvc;
    newData.year = data.year;
    newData.month = data.month;
    setData1(newData);
  };

  return (
    <>
      <main className="container">
        <div className="container_header">
          <div className="container_cardContainer">
            <div className="cardContainer_cardFront">
              <div className="cardFront_circleContainer">
                <div className="cardFront_bigCircle"></div>
                <div className="cardFront_smallCircle"></div>
              </div>
              <div className="cardFront_textContainer">
                <h1 className="textContainer_numberCard">
                  {data1.number.substring(0, 4)} {data1.number.substring(4, 8)}{" "}
                  {data1.number.substring(8, 12)}{" "}
                  {data1.number.substring(12, 16)}
                </h1>
                <div className="textContainer_data">
                  <label className="data_name">{data1.name}</label>
                  <label className="data_date">
                    {data1.month}/{data1.year}
                  </label>
                </div>
              </div>
            </div>
            <div className="cardContainer_cardWhite">
              <span className="cardWhite_cardCVV">{data1.cvc}</span>
            </div>
          </div>
        </div>
        <div className="container_formContainer">
          <Form dataFunction={recieveDataForm}></Form>
        </div>
      </main>
    </>
  );
};

export default App;
