import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Foot from "../components/Foot";
import { useTitle } from "../components/title";
import "../main.css";
const Home = () => {
  // Getting User Data from Redux Store
  const myData = useSelector((state) => state.user);
  console.log("Home", myData);
  useTitle("Home");
  return (
    <>
      <section class="banner shadow-lg p-3 mb-5 bg-body rounded">
        <div class="banner-text-item">
          <div class="banner-heading">
            <h1>
              We're Sorry that this happend let's help you get back on the road
            </h1>
          </div>
          <form class="form">
            <Link to="/access">
              <a class="book">Acess Damages</a>
            </Link>
          </form>
        </div>
      </section>

      <section class="services">
        <div class="service-item1">
          <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293634/tour-guide_onzla9.png" />
          <h2>Faster & simple</h2>
        </div>
        <div class="service-item1">
          <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293738/reliability_jbpn4g.png" />
          <h2>Automated Services</h2>
        </div>
        <div class="service-item1">
          <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293635/experience_a3fduk.png" />
          <h2>Latest A.I Technology</h2>
        </div>
        <div class="service-item1">
          <img src="https://res.cloudinary.com/dxssqb6l8/image/upload/v1605293634/feedback_s8z7d9.png" />
          <h2>Car Assessment</h2>
        </div>
      </section>

      <section class="places">
        <div class="places-text">
          <small>FEATURES</small>
        </div>

        <div class="cards">
          <div class="card">
            <div class="zoom-img">
              <div class="img-card">
                <img src="images/detection.jpeg" />
              </div>
            </div>

            <div class="text">
              <h2>Real Time Detection</h2>
            </div>
          </div>
          <div class="card">
            <div class="zoom-img">
              <div class="img-card">
                <img src="images/detection2.png" />
              </div>
            </div>

            <div class="text">
              <h2>Multi vechicle recognization</h2>
            </div>
          </div>
          <div class="card">
            <div class="zoom-img">
              <div class="img-card">
                <img src="images/detection3.png" />
              </div>
            </div>

            <div class="text">
              <h2>Muliple labels can be identified</h2>
            </div>
          </div>
          <div class="card">
            <div class="zoom-img">
              <div class="img-card">
                <img src="images/detection4.png" />
              </div>
            </div>

            <div class="text">
              <h2>Better interpretation</h2>
            </div>
          </div>
          <div class="card">
            <div class="zoom-img">
              <div class="img-card">
                <img src="images/detection5.png" />
              </div>
            </div>

            <div class="text">
              <h2>User Friendly</h2>
            </div>
          </div>
          <div class="card">
            <div class="zoom-img">
              <div class="img-card">
                <img src="images/detection6.jpeg" />
              </div>
            </div>

            <div class="text">
              <h2>Low cost</h2>
            </div>
          </div>
        </div>
      </section>

      <section class="about">
        <div class="about-img">
          <img src="images/dent.png" />
        </div>
        <div class="about-text">
          <small>ABOUT OUR COMPANY</small>
          <h2>We are Go Trip Ravels Support Company</h2>
          <p>
            Damagic is saas service which uses latest Computer vision algorithms
            to efficiently recognise damages in vehicle. eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud loren32 Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Facere beatae doloribus animi consectetur saepe,
            eveniet quos nulla quidem magni quaerat sint quia numquam voluptatum
            corrupti, quo deleniti natus repellendus illo totam pariatur.
          </p>
          <Link to="/aboutus">ABOUT US</Link>
        </div>
      </section>
    </>
  );
};
export default Home;
