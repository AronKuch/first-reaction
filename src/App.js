
import './App.css';
import logo_html5 from "./HTML5.svg";
import logo_R from "./R.svg";
import logo_Apex from "./Apex.png";

function Head(props){
  return(
    <h1>Hello {props.city}, again</h1>
  );
}

function Main(props){
  return(
    <section>
    <p>Here is an abreviated list of programming languages I have played around with at one point or another.</p>
    <ul>
      {props.langs.map((lang) =>
        (<li key = {lang.id}>{lang.name} <img src={lang.logo} alt= {lang.name + " logo"} height = {50} /></li>))}
    </ul>
    </section>
  );
}

// const languages = [
//   "HTML", "CSS", "JavaScript", "Java", "Python", "C", "C++", "R", "MySQL", "PHP", "Apex"
// ]
//
// const langObjects = languages.map((lang, i) => ({id: i, name: lang}));

const langObjects = [
  {id: 1, name: "HTML5", logo: logo_html5},
  {id: 0, name: "R", logo: logo_R},
  {id: 2, name: "Apex", logo: logo_Apex}
]


function App() {
  return (
    <div className="App">
      <Head city = "Chucktown"/>
      <Main langs = {langObjects} />
    </div>
  );
}

export default App;
