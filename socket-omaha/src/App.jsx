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
      <p>wow</p>
    </div>
  );
}

export default App;
