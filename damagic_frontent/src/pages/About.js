import React from "react";
import { useTitle } from "../components/title";
import "../app.css";
const About = () => {
  useTitle("About US");
  return (
    <div>
      <div
        id="reserve"
        class="content-wrapper-lg text-center astonish"
        data-animation="fadeInLeft"
      >
        <b>
          <h2 class="section-title">About Car Damage Detection</h2>
        </b>
        <br></br>
        <img
          src="images/result_1.png"
          class="img-class1"
          alt="Italian Trulli"
          width="500"
          height="400"
        />
        <p align="center">
          In this era of fast growing technologies, there is a huge demand among
          the people for a secure lifestyle and traveling. In the past decade,
          the number of vehicles on the road has increased. Tracking of
          individual vehicles becomes a very challenging task with the massive
          growth in the vehicular sector everyday. In this project we have
          designed and implemented a car damage classification/detection
          pipeline, which can be used by the insurance company to automate the
          classification of damaged cars.
        </p>
      </div>
      <hr></hr>
      <hr></hr>
      <div
        id="reserve"
        class="content-wrapper-lg text-center astonish"
        data-animation="fadeInLeft"
      >
        <b>
          <h2 class="section-title ">About Damagic</h2>
        </b>
        <br></br>
        <img src="images/logo.jpeg" class="img-class" alt="Italian Trulli" />
        <p align="center">
          This automated system can quickly process vehicle insurance claims.
          The damages can be of types scratch, dent, broken glass, smashed. We
          have applied Transfer learning techniques, Tensorflow object detection
          api, Resnet-50 model, for car damage detection and assessments in
          real-world datasets. We have deployed the model using flask. The
          Frontend is designed using ReactJS. For the backend we have used the
          Django rest framework. We have also added an authentication system
          which is an OTP based authentication system, it was made using JSON
          Web Token technology.This Web app is useful for car insurance
          companies because in recent years, they are dealing with more frequent
          insurance claims. After uploading an image , first our Machine
          Learning model would classify the image as a car or not, then if the
          image is of a car it will look for the damaged area.
        </p>
      </div>
      <hr></hr>
      <hr></hr>
    </div>
  );
};

export default About;
