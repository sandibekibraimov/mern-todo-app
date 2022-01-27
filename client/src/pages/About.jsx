import React from 'react';
import Header from '../components/Header';

import { FaReact, FaCss3, FaNodeJs } from 'react-icons/fa';
import { SiRedux, SiExpress, SiMongodb } from 'react-icons/si';

const About = () => {
  return (
    <div>
      <Header />
      <div className='about'>
        <h1>About app</h1>
        <p>This app developed by Sandibek Ibraimov.</p>
        <p>Below is the list of technology used:</p>
        <h3>Front end</h3>
        <ul>
          <li>
            <span>
              <FaReact />
            </span>
            <p>React</p>
          </li>
          <li>
            <span>
              <SiRedux />
            </span>
            <p>Redux</p>
          </li>
          <li>
            <p>Axios</p>
          </li>
          <li>
            <p>React-router</p>
          </li>
          <li>
            <p>Redux-thunk</p>
          </li>
          <li>
            <p>React-icons</p>
          </li>
          <li>
            <span>
              <FaCss3 />
            </span>
            <p>CSS3</p>
          </li>
        </ul>
        <h3>Back end</h3>
        <ul>
          <li>
            <span>
              <SiExpress />
            </span>
            <p>Express</p>
          </li>
          <li>
            <span>
              <FaNodeJs />
            </span>
            <p>Node.js</p>
          </li>
          <li>
            <p>Mongoose</p>
          </li>
          <li>
            <p>dotenv</p>
          </li>
          <li>
            <span>
              <SiMongodb />
            </span>
            <p>mongoDb</p>
          </li>
          <li>
            <p>nodemon</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
