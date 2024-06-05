import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Sponsors.css";

export default function Sponsors() {
  return (
    <>
      <Helmet>
        <title>Sponsors</title>
      </Helmet>
      <Header />
      <div className="headline">
        <h5>List of our sponsors</h5>
      </div>
      <div className="sponsors">
        <div className="sponsor">
          <h6>Sponsor</h6>
          <div className="sponsor-content">
            <img
              src="https://centrumslniecko.sk/wp-content/uploads/2022/01/Across-logo-150x150.png"
              alt="sponsor1"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam harum explicabo beatae. Obcaecati rem magnam animi exercitationem nulla eaque saepe eius ullam perferendis. Laudantium odio in iste cumque, amet nam.</p>
          </div>
        </div>
        <div className="sponsor">
          <h6>Sponsor</h6>
          <div className="sponsor-content">
            <img
              src="https://centrumslniecko.sk/wp-content/uploads/2022/01/Across-logo-150x150.png"
              alt="sponsor2"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat accusamus excepturi nesciunt ipsam id tenetur minima numquam doloribus? Natus delectus provident repellendus totam veniam ad enim corrupti harum dolorem ex.</p>
          </div>
        </div>
        <div className="sponsor">
          <h6>Sponsor</h6>
          <div className="sponsor-content">
            <img
              src="https://centrumslniecko.sk/wp-content/uploads/2022/01/Across-logo-150x150.png"
              alt="sponsor3"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quam saepe quasi incidunt nesciunt aliquam aspernatur dignissimos nam, culpa illum? Possimus expedita, aliquid repellendus quae laudantium omnis a asperiores ad.</p>
          </div>
        </div>
        <div className="sponsor">
          <h6>Sponsor</h6>
          <div className="sponsor-content">
            <img
              src="https://centrumslniecko.sk/wp-content/uploads/2022/01/Across-logo-150x150.png"
              alt="sponsor4"
            />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, placeat itaque! Ipsa, suscipit! Repudiandae mollitia tempora obcaecati debitis ratione eveniet sed. Debitis tempora illo nesciunt eaque commodi optio incidunt eius?</p>
          </div>
        </div>
        <div className="sponsor">
          <h6>Sponsor</h6>
          <div className="sponsor-content">
            <img
              src="https://centrumslniecko.sk/wp-content/uploads/2022/01/Across-logo-150x150.png"
              alt="sponsor5"
            />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quae sapiente autem officia, aliquid omnis distinctio numquam dolorum voluptatibus id vel eaque dolor eius amet labore quod laboriosam a rerum.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
