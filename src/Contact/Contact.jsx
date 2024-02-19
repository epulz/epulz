/* eslint-disable jsx-a11y/iframe-has-title */
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-body">
      <h1 id="mainHeading">Contact Us</h1>
      <div id="contact-main">
        <div id="contact-left">
          <div id="address">
            <span id="icon">
              <i className="ri-map-pin-2-fill" />
            </span>
            <div id="value">
              <h1>Address</h1>
              <p>
                Thanthai Periyar Government Institute <br />
                Of Technology, Bagayam, Vellore - 632002
              </p>
              <p />
            </div>
          </div>
          <div id="contacts">
            <span id="icon">
              <i className="ri-phone-fill" />
            </span>
            <div id="value">
              <h1>Phone - Coordinators</h1>
              <p>Sujith Barathi - 8610395558</p>
              <p>Jeevanantham - 6379298842</p>
              <p>Vishnu Dharshan - 9597767721</p>
              <p>Dinesh - 7904873545 </p>
            </div>
          </div>
          <div id="email">
            <span id="icon">
              <i className="ri-mail-fill" />
            </span>
            <div id="value">
              <h1>Email</h1>
              <p>epulz2k24@gmail.com</p>
            </div>
          </div>
        </div>
        <div id="contact-right">
          <div id="googleMap">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.428289325734!2d79.1179074735873!3d12.88015891687944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad394400000001%3A0xf7139af5b9890941!2sThanthai%20Periyar%20Government%20Institute%20of%20Technology-Vellore!5e0!3m2!1sen!2sin!4v1707564575643!5m2!1sen!2sin"
              width={400}
              height={300}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
