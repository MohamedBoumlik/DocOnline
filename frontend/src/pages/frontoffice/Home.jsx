import Navbar from "../../components/frontoffice/Navbar";
import "../../style/style.css";
import { FaPills, FaRegClock, FaHeadset, FaPhoneAlt } from "react-icons/fa";
import Image from "../../images/img-3.jpg";
import { useState } from "react";
import axios from "axios";

function Home() {
  const [name, setName] = useState("");
  const [CIN, setCIN] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  // -------------- post data to server --------------
  const info = {
    patient_Name: name,
    patient_CIN: CIN,
    patient_Email: email,
    date: date,
    hour: hour,
    tel: phone,
  };

  const postData = () => {
    axios.post("http://localhost:4000/api/Appointment/",info)
    .then(res => console.log(res.data))
    .catch(err => console.warn(err));
  };

  return (
    <div>
      <Navbar />

      {/* ---------------------------- Header ---------------------------- */}

      <section class="banner w-full h-screen p-10">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-12 col-xl-7">
              <div class="block">
                <div class="divider mb-3"></div>
                <span class="text-uppercase text-sm letter-spacing ">
                  Total Health care solution
                </span>
                <h1 class="mb-3 mt-3">Your most trusted appointements maker</h1>

                <p class="mb-4 pr-5">
                  A repudiandae ipsam labore ipsa voluptatum quidem quae
                  laudantium quisquam aperiam maiores sunt fugit, deserunt rem
                  suscipit placeat.
                </p>
                <div class="btn-container">
                  <a
                    href="appoinment.html"
                    target="_blank"
                    class="btn btn-main-2 btn-icon btn-round-full "
                  >
                    Make appoinment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- Features ---------------------------- */}

      <section class="features">
        <div class="feature-block flex z-40 grid lg:grid-cols-3 md:grid-cols-2 sm:grid:cols-1 gap-4 px-7">
          <div class="feature-item mb-5 mb-lg-0">
            <div class="feature-icon mb-4">
              <FaPills style={{ color: "#223a66", fontSize: "60px" }} />
            </div>
            <span>24 Hours Service</span>
            <h4 class="mb-3">Online Appoinment</h4>
            <p class="mb-4">
              Get ALl time support for emergency.We have introduced the
              principle of family medicine.
            </p>
            <a href="appoinment.html" class="btn btn-main btn-round-full">
              Make a appoinment
            </a>
          </div>

          <div class="feature-item mb-5 mb-lg-0">
            <div class="feature-icon mb-4">
              <FaRegClock style={{ color: "#223a66", fontSize: "60px" }} />
            </div>
            <span>Timing schedule</span>
            <h4 class="mb-3">Working Hours</h4>
            <ul class="w-hours list-unstyled">
              <li class="d-flex justify-content-between">
                Sun - Wed : <span>8:00 - 17:00</span>
              </li>
              <li class="d-flex justify-content-between">
                Thu - Fri : <span>9:00 - 17:00</span>
              </li>
              <li class="d-flex justify-content-between">
                Sat - sun : <span>10:00 - 17:00</span>
              </li>
            </ul>
          </div>

          <div class="feature-item mb-5 mb-lg-0">
            <div class="feature-icon mb-4">
              <FaHeadset style={{ color: "#223a66", fontSize: "60px" }} />
            </div>
            <span>Emegency Cases</span>
            <h4 class="mb-3">1-800-700-6200</h4>
            <p>
              Get ALl time support for emergency.We have introduced the
              principle of family medicine.Get Conneted with us for any urgency
              .
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------- Specialities ---------------------------- */}

      <section class="section service gray-bg">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 text-center">
              <div class="section-title">
                <h2>Available Specialities</h2>
                <div class="divider mx-auto my-4"></div>
                <p>
                  Lets know moreel necessitatibus dolor asperiores illum
                  possimus sint voluptates incidunt molestias nostrum
                  laudantium. Maiores porro cumque quaerat.
                </p>
              </div>
            </div>
          </div>

          <div class="row px-5">
            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="service-item mb-4">
                <div class="icon d-flex align-items-center">
                  <i class="icofont-laboratory text-lg"></i>
                  <h4 class="mt-3 mb-3">Laboratory services</h4>
                </div>

                <div class="content">
                  <p class="mb-4">
                    Saepe nulla praesentium eaque omnis perferendis a
                    doloremque.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="service-item mb-4">
                <div class="icon d-flex align-items-center">
                  <i class="icofont-heart-beat-alt text-lg"></i>
                  <h4 class="mt-3 mb-3">Heart Disease</h4>
                </div>
                <div class="content">
                  <p class="mb-4">
                    Saepe nulla praesentium eaque omnis perferendis a
                    doloremque.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="service-item mb-4">
                <div class="icon d-flex align-items-center">
                  <i class="icofont-tooth text-lg"></i>
                  <h4 class="mt-3 mb-3">Dental Care</h4>
                </div>
                <div class="content">
                  <p class="mb-4">
                    Saepe nulla praesentium eaque omnis perferendis a
                    doloremque.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="service-item mb-4">
                <div class="icon d-flex align-items-center">
                  <i class="icofont-crutch text-lg"></i>
                  <h4 class="mt-3 mb-3">Body Surgery</h4>
                </div>

                <div class="content">
                  <p class="mb-4">
                    Saepe nulla praesentium eaque omnis perferendis a
                    doloremque.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="service-item mb-4">
                <div class="icon d-flex align-items-center">
                  <i class="icofont-brain-alt text-lg"></i>
                  <h4 class="mt-3 mb-3">Neurology Sargery</h4>
                </div>
                <div class="content">
                  <p class="mb-4">
                    Saepe nulla praesentium eaque omnis perferendis a
                    doloremque.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 col-sm-6">
              <div class="service-item mb-4">
                <div class="icon d-flex align-items-center">
                  <i class="icofont-dna-alt-1 text-lg"></i>
                  <h4 class="mt-3 mb-3">Gynecology</h4>
                </div>
                <div class="content">
                  <p class="mb-4">
                    Saepe nulla praesentium eaque omnis perferendis a
                    doloremque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- Appointment ---------------------------- */}

      <section class="section appoinment">
        <div class="container">
          <div class="row align-items-center p-10">
            <div class="col-lg-6 p-5">
              <div class="appoinment-content">
                <img src={Image} alt="Doctor" className="img-fluid" />
                <div class="emergency">
                  <h2 className="text-lg flex ">
                    <FaPhoneAlt style={{ color: "#fff", fontSize: "60px" }} />
                    <p className="mt-3 ml-2">+23 345 67980</p>
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-10 ">
              <div class="appoinment-wrap mt-5 mt-lg-0">
                <h2 class="mb-2 title-color">Book appoinment</h2>
                <p class="mb-4">
                  Mollitia dicta commodi est recusandae iste, natus eum
                  asperiores corrupti qui velit . Iste dolorum atque similique
                  praesentium soluta.
                </p>
                <div class="appoinment-form">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group mt-2">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Choose Speciality</option>
                          <option>Neurology Sargery</option>
                          <option>Dermatology</option>
                          <option>Gynecology</option>
                          <option>Diagnostic radiology</option>
                          <option>Nuclear medicine</option>
                          <option>Pediatrics</option>
                          <option>Sports medicine and rehabilitation</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-2">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect2"
                        >
                          <option>Choose a Doctor</option>
                          <option>Doctor 1</option>
                          <option>Doctor 2</option>
                          <option>Doctor 3</option>
                          <option>Doctor 4</option>
                        </select>
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form-group mt-2">
                        <input
                          name="date"
                          id="date"
                          type="Date"
                          class="form-control"
                          placeholder="dd/mm/yyyy"
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form-group mt-2">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect2"
                          onChange={(e) => setHour(e.target.value)}
                        >
                          <option>Choose a Time</option>
                          <option>9-10</option>
                          <option>10-11</option>
                          <option>11-12</option>
                          <option>14-15</option>
                          <option>15-16</option>
                          <option>16-17</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-2">
                        <input
                          name="name"
                          id="name"
                          type="text"
                          class="form-control"
                          placeholder="Full Name"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form-group mt-2">
                        <input
                          name="Cin"
                          id="Cin"
                          type="text"
                          class="form-control"
                          placeholder="Cin"
                          onChange={(e) => setCIN(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form-group mt-2">
                        <input
                          name="Email"
                          id="Email"
                          type="email"
                          class="form-control"
                          placeholder="Full Email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form-group mt-2">
                        <input
                          name="phone"
                          id="phone"
                          type="Number"
                          class="form-control"
                          placeholder="Phone Number"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="form-group-2 mb-4 mt-2">
                    <textarea
                      name="message"
                      id="message"
                      class="form-control"
                      rows="6"
                      placeholder="Your Message"
                    ></textarea>
                  </div>

                  <button
                    class="btn btn-main btn-round-full"
                    href="appoinment.html"
                    onClick={() => postData()}
                  >
                    Make Appoinment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
