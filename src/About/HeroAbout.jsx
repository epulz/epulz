import poster from "../assets/About/poster/Poster.jpg";

const HeroAbout = () => {
  return (
    <section id="aboutUs">
      <div id="left">
        <img src={poster} alt="" />
      </div>
      <div id="right">
        <h4>About Us</h4>
        <h1>
          We are very much pleased to provide <br />
          valuable information about our institution
        </h1>
        <hr />
        <p>
          Thanthai Periyar Government Institute of Technology, started in the
          year 1990, is one of the eleven Government Engineering Colleges in
          Tamil Nadu which is approved by All India Council for Technical
          Education (AICTE) and admits students purely on single window system
          of admissions.
        </p>
        <p id="respPara">
          It belongs to Zone 6 of Anna University. A sprawling campus surrounded
          by lush green cover, provides an ideal atmosphere for the students to
          learn and excel in the field of technical education. In addition to
          theoretically reinforcing the fundamental concepts of the Engineering
          College exposes the students to latest trends, keeping in mind with
          industry requirements, through interactive practical sessions, held in
          well equipped laboratories.
        </p>
        <div id="lastText">
          <div id="text1">
            <h3>Bagayam</h3>
          </div>
          <div id="text2">
            <h3>Vellore</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroAbout };
