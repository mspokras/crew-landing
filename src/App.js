import "./App.scss";
import bigLogo from "./assets/icons/logo-big.svg";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Staffing Now!</h1>
          <p>
            With our recruitment tech. capability, we focus on delivering
            talents that help our clients perform, and grow.
          </p>
          <a
            className="order-now-btn"
            href="https://calendly.com/d/4bq-dqt-mbp?primary_color=141a7f"
          >
            <button className="button-contact">
              <span>Order Now</span>
            </button>
          </a>
        </div>
        <img src={bigLogo} alt="header" />
      </header>
      <main>
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/d/4bq-dqt-mbp?primary_color=141a7f"
          style={{ minWidth: "320px", height: "630px" }}
        ></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
