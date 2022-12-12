import { Grid } from "@mui/material";
import { useTitle } from "../components/title";

const Contact = () => {
  useTitle("Contact");
  return (
    <>
      <div>
        <div class="contact-form">
          <div class="first-container">
            <div class="info-container">
              <div>
                <img class="icon" />
                <h3>Address</h3>
                <p>Four Avenues,Pune</p>
              </div>
              <div>
                {" "}
                <img class="icon" />
                <h3>Lets Talk</h3>
                <p>+91 8766030074</p>
              </div>
              <div>
                <img class="icon" />
                <h3>General Support</h3>
                <p>RahulGupta3498@gmail.com</p>
              </div>
            </div>
          </div>
          <div class="second-container">
            <h2>Send Us A Message</h2>
            <form>
              <div class="form-group">
                <label for="name-input">Tell us your name*</label>
                <input
                  id="name-input"
                  type="text"
                  placeholder="First name"
                  required="required"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  required="required"
                />
              </div>
              <div class="form-group">
                <label for="email-input">Enter your email*</label>
                <input
                  id="email-input"
                  type="text"
                  placeholder="Eg. example@email.com"
                  required="required"
                />
              </div>
              <div class="form-group">
                <label for="phone-input">Enter phone number*</label>
                <input
                  id="phone-input"
                  type="text"
                  placeholder="Eg. +1 800 000000"
                  required="required"
                />
              </div>
              <div class="form-group">
                <label for="message-textarea">Message</label>
                <textarea
                  id="message-textarea"
                  placeholder="Write us a message"
                ></textarea>
              </div>
              <button>Send message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
