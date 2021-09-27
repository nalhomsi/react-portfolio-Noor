import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Introduction</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      <div className="my-2">
        <p>
          I am a student at the University of Austin currently studying data journalism and full stack coding. I specialize in front end design, as well as photojournalism.
          It is my hope to utilize my skills to help Syrian refugees.
        </p>
      </div>
    </section>
  );
}

export default About;
