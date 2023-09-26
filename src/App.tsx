import Nav from "../src/shared/nav/nav";
import Footer from "../src/shared/footer/footer";
import Content from "../src/content/content";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <div className="container text-center" style={{height: "100vh"}}>
        <div className="row">
          <h1>Las mejores películas, solo aqui.</h1>
          <Content />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
