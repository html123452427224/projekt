import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About</title>
      </Helmet>
      <Header />
      <div className="headline">
        <h5>About us</h5>
      </div>
      <div className="about-us">
        <div className="content1">
          <p>Nezisková organizace Centrum Slniečko, n.o. vznikla 14. ledna 2000 z nitrianského pracoviště občanského sdružení SLONAD, které v Nitře fungovalo od roku 1994. Její pracovníci a dobrovolníci už měli několikaleté zkušenosti v oblasti pomoci týraným, zneužívaným dětem a obětem domácího násilí, a tak hned od začátku svého vzniku zabezpečovalo Centrum Slniečko, n.o. provoz Křízového střediska pro oběti domácího násilí (vznik 1998) a Dětské linky záchrany (vznik 1996). Začátky byly skutečně velmi náročné, protože i přesto, že šlo o zkušenosti a dlouholetou praxi, Centrum Slniečko, n.o. bylo považováno za novou organizaci, a začátky jsou vždy obtížné.

Přestože byly začátky obtížné, ukázalo se, že ten, kdo to myslí vážně, má vizi a za svou vizí, i když pomalu ale jistě, se k ní dostane.

Díky lidem s otevřeným srdcem, dobrovolníkům a podpoře veřejnosti, sponzorů, samosprávy a státu se daří plnit misi Centra Slniečko, n.o. i nadále.
</p>
        </div>
        <div className="content2">
          <p>"Misií a hlavním posláním organizace je napomáhat k účinnému a komplexnímu řešení problematiky týraných, zneužívaných dětí, obětí domácího násilí ve smyslu zabezpečení a ochrany základních lidských práv a svobod; poskytování všeobecně prospěšných služeb dětem a rodinám s dětmi v krizových životních situacích."</p>
        </div>
        <div className="content3">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quasi blanditiis similique quia ullam dolorem vitae fuga, assumenda in ipsa repellat laboriosam libero rem nam nostrum? Quo natus quaerat ex.</p>
        </div>
        <div className="content4">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quasi blanditiis similique quia ullam dolorem vitae fuga, assumenda in ipsa repellat laboriosam libero rem nam nostrum? Quo natus quaerat ex.</p>
        </div>
        <div className="content5">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente quasi blanditiis similique quia ullam dolorem vitae fuga, assumenda in ipsa repellat laboriosam libero rem nam nostrum? Quo natus quaerat ex.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
