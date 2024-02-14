import iron from "../assets/About/profiles/iron.jpeg";
import cap from "../assets/About/profiles/cap.jpg";
import dr from "../assets/About/profiles/dr.jpeg";

const Profiles = () => {
  return (
    <section id="profile">
      <h1 id="staffHeading">Department Staffs</h1>
      <div class="gallery">
        <div class="box">
          <img src={cap} alt="*" />
          <div class="details">
            <h2>Dr.P.K.Palani,B.E.,(HONS).,M.E.,Ph.D.,</h2>
            <p>Principal</p>
          </div>
        </div>

        <div class="box">
          <img src={iron} alt="*" />
          <div class="details">
            <h2>Dr.J.Sreerambabu,Ph.D.,PDF.,</h2>
            <p>Vice Principal</p>
          </div>
        </div>

        <div class="box">
          <img src={dr} alt="*" />
          <div class="details">
            <h2>Dr.S.Letitia,M.E.,Ph.D.,</h2>
            <p>HOD</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Profiles };
