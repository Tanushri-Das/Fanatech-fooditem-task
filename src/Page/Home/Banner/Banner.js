import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "../Banner/Banner.css";
import { FaCheck, FaRegCheckCircle, FaSearch } from "react-icons/fa";
import banner2 from "../../../Assests/image 2.png";
import banner1 from "../../../Assests/image 1.png";
import banner3 from "../../../Assests/image 3.png";

const Banner = () => {
  return (
    // <div className="banner-section">
    //     <div className="banner-div">

    //     </div>
    // <div>
    // <Container>
    //     <Row>
    //       <Col className="col-12 col-lg-6">
    //         <div className="banner4"></div>
    //         <div>
    //           <h3 className="order-food">
    //             Order food online from your favourite local restaurants.
    //           </h3>
    //           <p className="banner-text">
    //             Freshly made food delivered to your door.
    //           </p>
    //           <div>
    //             <div className="search-warn rounded-circle"></div>

    //             <input
    //               className="search-bar"
    //               type="text"
    //               placeholder="Enter your location"
    //             />
    //             <button className="search text-white">
    //               <FaSearch /> Search
    //             </button>
    //           </div>
    //         </div>
    //       </Col>
    //       <Col className="col-12 col-lg-6">
    //         <div className="banner2"></div>
    //         <div className="banner"></div>
    //         <div className="delivered">
    //           <div className="d-flex justify-content-center align-items-center">
    //             <div className="rigth rounded-circle d-flex justify-content-center align-items-center">
    //             <FaCheck className="text-white" />
    //             </div>
    //             <h4 className="two-hudredk ms-3">200k+</h4>
    //           </div>
    //           <div className="d-flex justify-content-center align-items-center">
    //           <p className="people text-center">People Delivered</p>
    //           </div>

    //         </div>
    //         <div className="banner3"></div>
    //       </Col>
    //     </Row>
    //   </Container>
    // </div>
    // </div>

    // <Container>
    //     <Row>
    //       <Col className="col-12 col-lg-6">
    //         <div className="banner4"></div>
    //         <div>
    //           <h3 className="order-food">
    //             Order food online from your favourite local restaurants.
    //           </h3>
    //           <p className="banner-text">
    //             Freshly made food delivered to your door.
    //           </p>
    //           <div>
    //             <div className="search-warn rounded-circle"></div>

    //             <input
    //               className="search-bar"
    //               type="text"
    //               placeholder="Enter your location"
    //             />
    //             <button className="search text-white">
    //               <FaSearch /> Search
    //             </button>
    //           </div>
    //         </div>
    //       </Col>
    //       <Col className="col-12 col-lg-6">
    //         <div className="banner2"></div>
    //         <div className="banner"></div>
    //         <div className="delivered">
    //           <div className="d-flex justify-content-center align-items-center">
    //             <div className="rigth rounded-circle d-flex justify-content-center align-items-center">
    //             <FaCheck className="text-white" />
    //             </div>
    //             <h4 className="two-hudredk ms-3">200k+</h4>
    //           </div>
    //           <div className="d-flex justify-content-center align-items-center">
    //           <p className="people text-center">People Delivered</p>
    //           </div>

    //         </div>
    //         <div className="banner3"></div>
    //       </Col>
    //     </Row>
    //   </Container>

    // <Container>
    //     <Row>
    //       <Col className="col-12 col-lg-6">
    //         <div className="banner4"></div>
    //         <div>
    //           <h3 className="order-food">
    //             Order food online from your favourite local restaurants.
    //           </h3>
    //           <p className="banner-text">
    //             Freshly made food delivered to your door.
    //           </p>
    //           <div>
    //             <div className="search-warn rounded-circle"></div>

    //             <input
    //               className="search-bar"
    //               type="text"
    //               placeholder="Enter your location"
    //             />
    //             <button className="search text-white">
    //               <FaSearch /> Search
    //             </button>
    //           </div>
    //         </div>
    //       </Col>
    //       <Col className="col-12 col-lg-6">
    //         <div className="banner2">
    //             <img src={banner2} alt="" />
    //         </div>
    //         <div className="banner">
    //         <img src={banner1} alt="" />
    //         </div>
    //         <div className="delivered">
    //           <div className="d-flex justify-content-center align-items-center">
    //             <div className="rigth rounded-circle d-flex justify-content-center align-items-center">
    //             <FaCheck className="text-white" />
    //             </div>
    //             <h4 className="two-hudredk ms-3">200k+</h4>
    //           </div>
    //           <div className="d-flex justify-content-center align-items-center">
    //           <p className="people text-center">People Delivered</p>
    //           </div>

    //         </div>
    //         <div className="banner3">
    //         <img src={banner3} alt="" />
    //         </div>
    //       </Col>
    //     </Row>
    //   </Container>

    <Container>
      <Row className="justify-content-md-center">
        <Col sm="12" lg="6">
        <div className="banner4"></div>
            <div>
              <h3 className="order-food">
                Order food online from your favourite local restaurants.
              </h3>
              <p className="banner-text">
                Freshly made food delivered to your door.
              </p>
              <div>
                <div className="search-warn rounded-circle"></div>

                <input
                  className="search-bar"
                  type="text"
                  placeholder="Enter your location"
                />
                <button className="search text-white">
                  <FaSearch /> Search
                </button>
              </div>
            </div>
        </Col>

        {/* <Col sm="12" lg="6">
        <div className="banner2">
                <img src={banner2} alt="" />
            </div>
            <div className="banner">
            <img class="img-fluid" src={banner1} alt="" />
            </div>
            <div className="delivered">
              <div className="d-flex justify-content-center align-items-center">
                <div className="rigth rounded-circle d-flex justify-content-center align-items-center">
                <FaCheck className="text-white" />
                </div>
                <h4 className="two-hudredk ms-3">200k+</h4>
              </div>
              <div className="d-flex justify-content-center align-items-center">
              <p className="people text-center">People Delivered</p>
              </div>

            </div>
            <div className="banner3">
            <img src={banner3} alt="" />
            </div>
        </Col> */}
      </Row>

    </Container>
  );
};

export default Banner;
