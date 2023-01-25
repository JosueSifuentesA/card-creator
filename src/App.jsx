import Form from "./Form";
import "./root.css";
const App = () => {
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
                  1234 5678 9891 2345
                </h1>
                <div className="textContainer_data">
                  <label className="data_name">Nombre</label>
                  <label className="data_date">01/28</label>
                </div>
              </div>
            </div>
            <div className="cardContainer_cardWhite">
              <span className="cardWhite_cardCVV">123</span>
            </div>
          </div>
        </div>
        <div className="container_formContainer">
          <Form></Form>
        </div>
      </main>
    </>
  );
};

export default App;
