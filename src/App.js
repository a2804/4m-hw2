
import './App.css';
import AboutUs from "./pages/AboutUs";

function App(props) {

  const text = {
    title: "hello",
    subtitle: "lorem lorem lorem"
  }

  return (
    <>
      <AboutUs aboutus={text}/>
    </>
  );
}

export default App;
