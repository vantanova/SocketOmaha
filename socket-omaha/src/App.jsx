import Splash from "./components/Splash";
import Header from "./components/Header/Header";

function App() {
  const callBackendAPI = async () => {
    const response = await fetch("http://localhost:5000/express_backend");
    const body = await response.json();

    console.log(body);

    return body;
  };

  console.log(callBackendAPI());

  return (
    <div>
      <Header></Header>
      <Splash></Splash>
    </div>
  );
}

export default App;
