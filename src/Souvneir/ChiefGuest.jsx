import chief from "../assets/ChiefGuest/chief.png";

const ChiefGuest = () => {
  return (
    <div id="chief-guest">
      <h1 id="chief-guest-heading">Chief Guest</h1>
      <div className="chief-guest-content">
        <div className="chief-guest-box">
          <img src={chief} alt="*" className="chief-guest-img" />
          <div className="chief-guest-details">
            <h2 className="h2-chief-guest">
              Mr. Anandhan M <br />
              Sr. Staff Engineer
            </h2>
            <p className="p-chief-guest">Qualcomm Technologies, Bangalore</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ChiefGuest };
