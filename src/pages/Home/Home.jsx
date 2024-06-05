import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <div className="text">
      <h5 className="sponsors-text">Our sponsors</h5> 
      </div>
      
      <div className="homepage-sponsors">
        <div className="sponsor-images-container">
          <div className="sponsor-image">
            <img
              src="https://centrumslniecko.sk/wp-content/uploads/2022/01/Across-logo-150x150.png"
              alt="sponsor1"
            />
          </div>
          <div className="sponsor-image">
            <img
              src="https://centrumslniecko.sk/wp-content/uploads/2022/01/Across-logo-150x150.png"
              alt="sponsor2"
            />
          </div>
          <div className="sponsor-image">
            <img
              src="https://centrumslniecko.sk/wp-content/uploads/2022/01/Across-logo-150x150.png"
              alt="sponsor3"
            />
          </div>
          <div className="text-more-sponsors">
          <h5 className="more-sponsors"><Link to="/sponsors">See more...</Link></h5>

          </div>
         
        </div>
      </div>
      <div className="homepage-location">
        <h5>About us</h5>
        <div className="homepage-location-content">
          <div className="history">
            <h6>Our history</h6>
            <p>Nezisková organizace Centrum Slniečko, n.o. vznikla 14. ledna 2000 z nitrianského pracoviště občanského sdružení SLONAD, které v Nitře fungovalo od roku 1994. Její pracovníci a dobrovolníci už měli několikaleté zkušenosti v oblasti pomoci týraným, zneužívaným dětem a obětem domácího násilí, a tak hned od začátku svého vzniku zabezpečovalo Centrum Slniečko, n.o. provoz Křízového střediska pro oběti domácího násilí (vznik 1998) a Dětské linky záchrany (vznik 1996). Začátky byly skutečně velmi náročné, protože i přesto, že šlo o zkušenosti a dlouholetou praxi, Centrum Slniečko, n.o. bylo považováno za novou organizaci, a začátky jsou vždy obtížné.

Přestože byly začátky obtížné, ukázalo se, že ten, kdo to myslí vážně, má vizi a za svou vizí, i když pomalu ale jistě, se k ní dostane.

Díky lidem s otevřeným srdcem, dobrovolníkům a podpoře veřejnosti, sponzorů, samosprávy a státu se daří plnit misi Centra Slniečko, n.o. i nadále.






</p>
          </div>
          <div className="mission">
            <h6>Our mission</h6>
            <p>"Misií a hlavním posláním organizace je napomáhat k účinnému a komplexnímu řešení problematiky týraných, zneužívaných dětí, obětí domácího násilí ve smyslu zabezpečení a ochrany základních lidských práv a svobod; poskytování všeobecně prospěšných služeb dětem a rodinám s dětmi v krizových životních situacích."</p>
          </div>
        </div>
      </div>
      <div className="homepage-article">
        <h5>Read some articles</h5>
        <div className="homepage-articles">
          <div className="homepage-articles-article-1">content
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, enim. Deleniti consequatur dignissimos adipisci pariatur saepe aliquam sint sunt eaque. Id beatae sequi sit officiis nulla obcaecati explicabo fugiat totam.</p>
          </div>
          <div className="homepage-articles-article-2">content
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In nobis ut sunt tempora eius quisquam ducimus temporibus, natus ea architecto. Delectus consectetur veritatis debitis doloremque repudiandae similique nulla excepturi animi?</p>
          </div>
          <div className="homepage-articles-article-3">content
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quo incidunt cum consequatur minus sequi excepturi optio non. Itaque, magni consequuntur asperiores sunt exercitationem qui perspiciatis aliquid facilis recusandae architecto?</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
