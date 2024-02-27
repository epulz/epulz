/* eslint-disable jsx-a11y/anchor-is-valid */
import souvneir from "../assets/Souvneir/souvneir.jpg";
import file from "../assets/Souvneir  EPULZ 2K24.pdf";

const CoverLetter = () => {
  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.download = file;
    link.href = file;
    link.click();
  };

  return (
    <section id="cover-letter">
      <div className="container">
        <div className="cover-letter-content">
          <h3 id="cover-letter-heading">
            Encouraging people to understand the level to best
          </h3>
          <div id="cover-letter-img-container">
            <img src={souvneir} alt="*" className="cover-letter-img" />
          </div>
          <p id="cover-letter-para">
            Thanthai Periyar Government Institute of Technology is not merely
            another engineering college producing hordes of engineering
            graduates year by year. It is more than a center of learning and
            home to a diverse community of innovators and entrepreneurs.
          </p>
          <a
            id="cover-letter-btn"
            download={file}
            onClick={handleDownload(file)}
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export { CoverLetter };
