import Navbar from "../../components/frontoffice/Navbar";
import "../../style/style.css";
import { FaPills, FaRegClock, FaHeadset, FaPhoneAlt } from "react-icons/fa";
import Image from '../../images/img-3.jpg'

function Home() {
  return (
    <div>
      <Navbar />

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

      <section class="features">
        {/* <div class="container">
          <div class="row"> */}
        {/* <div class="grid grid-cols-4 gap-4"> */}
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
        {/* </div> */}
        {/* </div>
        </div> */}
      </section>

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

      <section class="section appoinment">
        <div class="container">
          <div class="row align-items-center p-10">
            <div class="col-lg-6 p-5">
              <div class="appoinment-content">
                <img src={Image} alt="Doctor" className="img-fluid" />
                <div class="emergency">
                  <h2 className="text-lg flex ">
                    <FaPhoneAlt style={{color:'#fff', fontSize:'60px'}}/><p className="mt-3 ml-2">+23 345 67980</p>
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
                <div class="appoinment-form" >
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group mt-2">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect1"
                        >
                          <option>Choose Department</option>
                          <option>Software Design</option>
                          <option>Development cycle</option>
                          <option>Software Development</option>
                          <option>Maintenance</option>
                          <option>Process Query</option>
                          <option>Cost and Duration</option>
                          <option>Modal Delivery</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-group mt-2">
                        <select
                          class="form-control"
                          id="exampleFormControlSelect2"
                        >
                          <option>Select Doctors</option>
                          <option>Software Design</option>
                          <option>Development cycle</option>
                          <option>Software Development</option>
                          <option>Maintenance</option>
                          <option>Process Query</option>
                          <option>Cost and Duration</option>
                          <option>Modal Delivery</option>
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
                        />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="form-group mt-2">
                        <input
                          name="time"
                          id="time"
                          type="time"
                          class="form-control"
                          placeholder="Time"
                        />
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

                  <a class="btn btn-main btn-round-full" href="appoinment.html">
                    Make Appoinment
                  </a>
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
