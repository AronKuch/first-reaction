import React, {useState, useEffect} from "react";
import './App.css';
import logo_html5 from "./HTML5.svg";
import logo_R from "./R.svg";
import logo_Apex from "./Apex.png";
import {Checkbox} from "./Checkbox.js";
import {Routes, Route} from "react-router-dom";
import {Home, About, Events, Contact, BadPage, History, Location} from "./pages"

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

function GitHub() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.github.com/users/aronkuch')
    .then((response) => response.json())
    .then(setData)
    .then(setLoading(false))
    .catch(setError);
  }, []);
  if (loading) return <h3>Loading...</h3>;
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  if (!data) return null;
  return(
  <p>I'm {data.name}, my GitHub is <a href={data.html_url}>{data.html_url}</a>. I have {data.public_repos} repos that you know of.</p>
  );
}


function App(props) {
  const [status, setStatus] = useState("working");


  return (
    <div className="App">
      <Head city = "Chucktown"/>
      <GitHub />
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
      </button><br /> <br />
      <Checkbox />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
          <Route path="history" element={<History />}/>
          <Route path="location" element={<Location />}/>
          </Route>
          <Route path="/events" element={<Events />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="*" element={<BadPage />}/>
        </Routes>

      </div>
    </div>
  );
}

export default App;
