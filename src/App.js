
import './App.css';

function Head(props){
  return(
    <h1>Hello {props.city}, again</h1>
  );
}

function Main(props){
  return(
    <section>
    <p>Here are some programming languages I have played around with at one point or another.</p>
    <ul>
      {props.langs.map((lang) =>
        (<li key = {lang.id}>{lang.name}</li>))}
    </ul>
    </section>
  );
}

const languages = [
  "HTML", "CSS", "JavaScript", "Java", "Python", "C", "C++", "R", "MySQL", "PHP", "Apex"
]

const langObject = languages.map((lang, i) => ({id: i, name: lang}));

function App() {
  return (
    <div className="App">
      <Head city = "Chucktown"/>
      <Main langs = {langObject} />
    </div>
  );
}

export default App;
