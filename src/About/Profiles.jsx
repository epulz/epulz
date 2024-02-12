import iron from "../assets/About/profiles/iron.jpg";
import cap from "../assets/About/profiles/cap.jpg";
import superman from "../assets/About/profiles/super.jpg";
import dr from "../assets/About/profiles/dr.jpg";

const Profiles = () => {
  return (
    <section id="profile">
      <h1 id="staffHeading">Department Staffs</h1>
      <div class="gallery">
        <div class="box">
          <img src={iron} alt="*" />
          <div class="details">
            <h2>karthi</h2>
            <p>HOD</p>
          </div>
        </div>

        <div class="box">
          <img src={cap} alt="*" />
          <div class="details">
            <h2>sridhar</h2>
            <p>professor</p>
          </div>
        </div>

        <div class="box">
          <img src={superman} alt="*" />
          <div class="details">
            <h2>ragu</h2>
            <p>editor</p>
          </div>
        </div>

        <div class="box">
          <img src={dr} alt="*" />
          <div class="details">
            <h2>sam</h2>
            <p>principal</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Profiles };
