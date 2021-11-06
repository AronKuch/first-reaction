import React, {useState, useEffect, useReducer} from "react";
import './App.css';
import logo_html5 from "./HTML5.svg";
import logo_R from "./R.svg";
import logo_Apex from "./Apex.png";


//

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
  const [status, setStatus] = useState("working");

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/aronkuch')
    .then((response) => response.json())
    .then(setData);
  }, []);

//       <p>I'm {data.name}, my GitHub is {data.hmtl_url}. I have {data.public_repos} that you know of.</p>


  return (
    <div className="App">
      <Head city = "Chucktown"/>
      <p>I'm {data.name},
          my GitHub is <a href={data.html_url}>{data.html_url}</a>.
          I have {data.public_repos} repos that you know of.</p>
      {props.pictures ? <Pictures /> : <List />}
      <p>Aron is {status}.</p>
      <button onClick={() => setStatus("working")}>
        Work
      </button>
      <button onClick={() => setStatus("learning")}>
        Learn
      </button>
      <button onClick={() => setStatus("chilling")}>
        Chill
      </button>
    </div>
  );
}

export default App;
