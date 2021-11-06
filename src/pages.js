import React from "react";
import {Link, useLocation} from "react-router-dom";

function Footer(){
  return(
    <nav>
      <Link to="about">About Us</Link><br />
      <Link to="events">Events</Link><br />
      <Link to="contact">Contact Us</Link><br />
    </nav>
  );
}

export function Home(){
  return(
    <div>
      <h1>[Company Website]</h1>
      <Footer />
    </div>
  );
}

export function About(){
  return(
    <div>
      <h1>[About Us]</h1>
      <Footer />
    </div>
  );
}

export function Events(){
  return(
    <div>
      <h1>[Upcoming Events]</h1>
      <Footer />
    </div>
  );
}

export function Contact(){
  return(
    <div>
      <h1>[Contact Us]</h1>
      <Footer />
    </div>
  );
}

export function BadPage(){
  let pathname = useLocation().pathname.substring(1);
  return(
    <div>
      <h1>Bad Page, 404 style</h1>
      <p>We're so sorry you've landed at <strong>{pathname}</strong> <br />
      Sometihng must have gone wrong. Better luck next time.<br />
      In the mean time, try one of these links?</p>
      <Footer />
    </div>
  );
}
