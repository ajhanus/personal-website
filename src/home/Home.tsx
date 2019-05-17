import React from 'react';
import '../styles/_style.scss';
import { Navbar } from '../components/Navbar';
import { CalchubLink } from '../components/CalchubLink';
import { SectionTitle } from '../components/SectionTitle';

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="home-name">AJ Hanus</div>
      <Navbar />
      <div className="profile-header">
        <div className="profile-bio">
          <h3>Computer Engineer</h3>
          <h3>Data Analyst</h3>
          <h3><CalchubLink white={ true }/> Cofounder</h3>
        </div>
      </div>
      <div className="container-margins">
        <section>
          <SectionTitle title="About Me" />
          <div className="about-me">
            Hello! My name is AJ Hanus and I am an undergraduate in Computer 
            Engineering. 
            I am currently a seniors and have had various jobs throughout the 
            software industry. I have worked for a startup in San Francisco, 
            Gramin, spent a summer in as a research undergrad, and will be 
            interning at Boeing later this year. I am also a cofounder of 
            Calchub.co, and I am passionate about data analytics and machine 
            learning. I am a member of Delta Tau Delta fraternity, the Iowa State 
            Sailing Club, and the Out of the Darkness on-campus organization. 
            In my free time, you'll find me either doing yoga, playing board games, 
            or throwing frisbee.
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
