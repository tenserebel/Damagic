import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useTitle } from "../components/title";
import { NavLink } from "react-router-dom";
import out from "../output/detection_output.png";
import "../main.css";
const Access = () => {
  useTitle("Access");
  const [file, setFile] = useState();
  const [a, setA] = useState();
  const [loading, setLoading] = useState(false);
  const [check, setCheck] = useState(false);
  let maketrue = false;
  function handleChange(e) {
    console.log(e.target.files[0].name);
    setselected_file(e.target.files[0]);
    // sendfile();

    setA(e.target.files[0].name);
    setFile(URL.createObjectURL(e.target.files[0]));
  }
  async function sendfile() {
    try {
      console.log(selected_file);
      const formData = new FormData();

      formData.append("file", selected_file);

      console.log("hi");
      const res = await axios.post(
        "http://localhost:3002/api/upload",
        selected_file,
        {
          headers: { "Content-Type": "image/jpeg" },
        }
      );
      // const res = await axios.post("http://localhost:3000/api/upload", {
      //   name: "hello",
      // });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  const [data, setdata] = useState({
    response: "",
  });

  // async const predict = useCallback(() => {
  //   axios.get("http://127.0.0.1:5000/predict").then((res) => {
  //     console.log(res.data);
  //     setdata({
  //       response: res.data.response,
  //     });
  //   });
  // }, [data]);
  async function predict() {
    setLoading(true);
    try {
      const res = await axios.get("http://127.0.0.1:5000/predict");

      if (res) {
        console.log(res.data);
        setdata({
          response: res.data.response,
        });
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }
  let handletrue = () => {
    console.log("hiii clicked");

    sendfile();
    predict();
    setCheck((check) => !check);
  };

  // useEffect(() => {
  //   // fetch("http://127.0.0.1:5000/predict").then((res) =>
  //   //   res.json().then((data) => {
  //   //     console.log(data);
  //   //     setdata({
  //   //       response: data.response,
  //   //     });
  //   //   })
  //   // );
  //   predict();
  // }, [data]);
  const [selected_file, setselected_file] = useState();
  return (
    <div>
      <br />
      <div className="inputfile">
        <div className="main">
          <input className="block" type="file" onChange={handleChange} />
        </div>
        <img className="showimg box-shadow" src={file} />
        <button onClick={handletrue}>Predict</button>
      </div>
      <section class="services">
        <div class="service-item">
          <img src="images/dent.png" />
          <h2>Dent</h2>
        </div>
        <div class="service-item">
          <img src="images/scratch.png" />
          <h2>Scratch</h2>
        </div>
        <div class="service-item">
          <img src="images/smashed.png" />
          <h2>Smashed</h2>
        </div>
        <div class="service-item">
          <img src="images/broken_glass.png" />
          <h2>Broken Glass</h2>
        </div>
      </section>
      {check ? (
        <div className="imageresult">
          {!loading ? (
            <div>
              <div className="container-text">
                <h3 className="karn predict-text">Predicated Image:</h3>
              </div>
              <div>
                <p className="outputed">
                  The predicted class from the input image is:
                  <p className="outputed-inside">{data.response}</p>
                </p>
              </div>

              <div className="elementresult">
                <img className="image23" src={out} alt="" />
              </div>
            </div>
          ) : (
            <>
              <img className="loading" src="images/loading.gif" />
            </>
          )}
          <h3 className="karn">Estimated Cost of repair</h3>
          <div>
            <table>
              <thead>
                <tr>
                  <th>Damage</th>
                  <th>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Dent</td>
                  <td>₹3000- ₹9000</td>
                </tr>
                <tr>
                  <td>Scratch</td>
                  <td>₹1100</td>
                </tr>
                <tr>
                  <td>Broken Glass</td>
                  <td>₹4500-₹6000</td>
                </tr>
                <tr>
                  <td>Smashed</td>
                  <td>₹10000-₹30000</td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <div>
          <h3 className="karn">Predicated Image:</h3>
          <p>{data.response}</p>
          <div className="elementresult">
            <img className="image23" src={out} alt="" />
          </div>
        </div> */}
        </div>
      ) : (
        <></>
      )}

      <br />
      <br />
    </div>
  );
};

export default Access;
