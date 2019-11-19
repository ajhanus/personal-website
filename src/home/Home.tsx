import React from 'react';
import '../styles/_style.scss';
import { Navbar } from '../components/Navbar';
import { CalchubLink } from '../components/CalchubLink';
import { SectionTitle } from '../components/SectionTitle';
// import { TaxiWrapper } from '../taxi/TaxiEnvironment';

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="home-name">AJ Hanus</div>
      <Navbar />
      <div className="profile-header">
        <div className="profile-bio">
          <h3>Computer Engineer</h3>
          <h3>Full Stack Developer</h3>
          <h3><CalchubLink white={ true }/> Cofounder</h3>
        </div>
      </div>
      <div className="container-margins">
        <section>
          <SectionTitle title="About Me" />
          <div className="about-me">
            Hello! My name is AJ Hanus and I am an undergraduate in Computer 
            Engineering. I'm currently looking for a full-time job in frontend website development.
            However, I am also passionate about artificial intelligence and virtual reality.
            I am currently a senior and have had various jobs throughout the 
            software industry. I have worked for a startup in San Francisco, 
            Garmin, spent a summer as a research undergrad, and interned for The Boeing Company. I am also a
            cofounder of <a href="https://www.calchub.co" target="_blank">Calchub.co</a>. I am a member of Delta Tau Delta 
            fraternity, the Iowa State Sailing Club, and the Out of the Darkness on-campus organization. 
            In my free time, you'll find me either doing yoga, playing board games, kite boarding,
            or throwing frisbee. Thanks for reading and feel free to email me at hanusaj@gmail.com.
          </div>
        </section>
        {/* <section>
          <TaxiWrapper />
        </section> */}
      </div>
    </div>
  );
}

export default Home;
