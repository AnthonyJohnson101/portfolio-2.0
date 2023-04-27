import React from 'react';
import Selfie from './Resume/selfie.png'
const styles = {
  image: {
    borderRadius:"50%",
    boxShadow: '5px 5px 5px black',
    marginBottom: '1%',
    border: 'solid black 2px'
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    textAlign: "center"
  },
  card: {
    width: "60vw",
    boxShadow: '10px 5px 5px 5px black',
    border: 'solid black 2px',
    padding: '1%'
  },
  background: {
    backgroundColor: "aliceblue"
  }
};

export default function About() {
  return (
    <div style={styles.background}>
      <h1 style={styles.text}>About Me</h1>
      <div style={styles.center}>
        <img src={Selfie} alt='Myself wearing a suit' style={styles.image} ></img>
      </div>
      <div style={styles.center}>
        <div style={styles.card}>
          <p>
            Hi, my name is Tony Johnson. I am a Junior Full-Stack Web Dev. I graduated Michigan State University's Full-Stack Web Development course
            in May of 2023. I am determined to become a master of my new craft. Feel free to reach out to me with any opportunities to refine my skills!
            Check out my projects in the portfolio section and my proficencies and resume in the resume section. If you want to reach out to me, my socials are in the footer, or
            fill out the form in the contact section and I'll get an email. 
          </p>
        </div>
      </div>
    </div>
  );
}
