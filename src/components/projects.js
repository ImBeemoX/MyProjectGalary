import React from "react";

import Project from "./project";
import reactlogo from "../logos/React.png";

const Projects = () => {
  return (
    <li className="li">
      <Project
        title="Toy World"
        lang="Swift"
        description="Demo of a swift shopping app"
        image={reactlogo}
      />
      <Project
        title="Colour Switch"
        lang="Swift"
        description="A simple Swift game using SpriteKit"
        image={reactlogo}
      />
      <Project
        title="Scrape opgg"
        lang="Python"
        description="Scrape opgg to get information of players"
        image={reactlogo}
      />
      <Project
        title="Zombie game"
        lang="p5.js"
        description="A simple zombie game"
        image={reactlogo}
      />
      <Project
        title="Personal Expenses"
        lang="Flutter"
        description="An app to track your money transactions"
        image={reactlogo}
      />
      <Project
        title="Yelp"
        lang="ReactNative"
        description="An app used for searching restaurants nearby using Yelp API"
        image={reactlogo}
      />
      <Project
        title="League of legends status"
        lang="Java Android framework"
        description="An app designed for searching league of legends informations"
        image={reactlogo}
      />
    </li>
  );
};

export default Projects;
