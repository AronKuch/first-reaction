
import './App.css';
import logo_html5 from "./HTML5.svg";
import logo_R from "./R.svg";
import logo_Apex from "./Apex.png";

function Head(props){
  return(
    <h1>Hello {props.city}, again</h1>
  );
}

function Pictures(){
  const langObjects = [
    {id: 1, name: "HTML5", logo: logo_html5},
    {id: 0, name: "R", logo: logo_R},
    {id: 2, name: "Apex", logo: logo_Apex}
  ]

  return(
    <section>
    <p>Here is an abreviated list of programming languages I have played around with at one point or another.</p>
    <ul>
      {langObjects.map((lang) =>
        (<li key = {lang.id}>{lang.name} <img src={lang.logo} alt= {lang.name + " logo"} height = {50} /></li>))}
    </ul>
    </section>
  );
}

function List(props){
  const languages = [
    "HTML", "CSS", "JavaScript", "Java", "Python", "C", "C++", "R", "MySQL", "PHP", "Apex"
  ]
  const langListAsObjects = languages.map((lang, i) => ({id: i, name: lang}));

  return(
    <section>
     <p>Here are some programming languages I have played around with at one point or another.</p>
     <ul>
       {langListAsObjects.map((lang) =>
         (<li key = {lang.id}>{lang.name}</li>))}
     </ul>
     </section>
   );
}

function App(props) {
  return (
    <div className="App">
      <Head city = "Chucktown"/>
      {props.pictures ? <Pictures /> : <List />}
    </div>
  );
}

export default App;
