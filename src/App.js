
import './App.css';

function Head(props){
  console.log(props);
  return(
    <h1>Hello {props.city}, again</h1>
  );
}

function Main(){
  return(
    <p>Here's new text to share with the world</p>
  );
}


function App() {
  return (
    <div className="App">
      <Head city = "Beantown"/>
      <Main />
    </div>
  );
}

export default App;
