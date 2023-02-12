import React from "react";
import Links from "./Links";

function About(props) {
  const {bio} = props
  const {links} = props
  let bioParagraph;
  if(bio)
  {
    bioParagraph = <p>{bio}</p>
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {bioParagraph}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
