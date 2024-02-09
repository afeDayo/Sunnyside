import React from "react";
import "./LandingPage.css";
import mobheader from "../../assets/mobile/image-header.jpg";
import header from "../../assets/desktop/image-header.jpg";
import mobtrans from "../../assets/mobile/image-transform.jpg";
import trans from "../../assets/desktop/image-transform.jpg";
import mobstand from "../../assets/mobile/image-stand-out.jpg";
import stand from "../../assets/desktop/image-stand-out.jpg";
import mobgraph from "../../assets/mobile/image-graphic-design.jpg";
import graph from "../../assets/desktop/image-graphic-design.jpg";
import mobphoto from "../../assets/mobile/image-photography.jpg";
import photo from "../../assets/desktop/image-photography.jpg";
import mobmilk from "../../assets/mobile/image-gallery-milkbottles.jpg";
import milk from "../../assets/desktop/image-gallery-milkbottles.jpg";
import moborange from "../../assets/mobile/image-gallery-orange.jpg";
import orange from "../../assets/desktop/image-gallery-orange.jpg";
import mobcone from "../../assets/mobile/image-gallery-cone.jpg";
import cone from "../../assets/desktop/image-gallery-cone.jpg";
import mobsugar from "../../assets/mobile/image-gallery-sugar-cubes.jpg";
import sugar from "../../assets/desktop/image-gallery-sugarcubes.jpg";
import emily from "../../../public/image-emily.jpg";
import thomas from "../../../public/image-thomas.jpg";
import jennie from "../../../public/image-jennie.jpg";
import arrowd from "../../../public/icon-arrow-down.svg";

const LandingPage = () => {
  return (
    <div>
      <div className="d-sm-none">
        <section className="sec-1">
          <div className="orange">
            <img src={mobheader} alt="orangeslice" />
          </div>
          <div className="creatives">
            <h1>WE ARE CREATIVES</h1>
            <img src={arrowd} alt="arrow" />
          </div>
        </section>

        {/* ================================================= */}

        <section>
          <div className="egg">
            <img src={mobtrans} alt="egg" />
          </div>
        </section>

        {/* ==================================================== */}

        <section>
          <div className="trans">
            <h3>Transform your brand</h3>
            <p className="py-3">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>

            <h5>LEARN MORE</h5>
          </div>
        </section>

        {/* ==================================================== */}

        <section>
          <div className="pink">
            <img src={mobstand} alt="yellowcup" />
          </div>
        </section>

        {/* ==================================================== */}

        <section>
          <div className="stand">
            <h3>Stand out to the right audience</h3>
            <p className="py-3">
              Using a collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll buld and
              extend yourbrand in digital places.
            </p>

            <h5>LEARN MORE</h5>
          </div>
        </section>

        {/* ====================================================== */}

        <section className="green">
          <div className="berry">
            <img src={mobgraph} alt="berries" />
          </div>
          <div className="graph">
            <h3>Graphic Design</h3>
            <p className="py-3">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
        </section>

        {/* ====================================================== */}

        <section className="blue">
          <div className="lime">
            <img src={mobphoto} alt="orangelime" />
          </div>
          <div className="photo">
            <h3>Photography</h3>
            <p className="py-3">
              Increase your credibility by getting the most stunning
              high-quality photos that improve your business image.
            </p>
          </div>
        </section>

        {/* ======================================================== */}

        <section>
          <div className="clients">
            <h5 className="test">CLIENT TESTIMONIALS</h5>
            <div className="each-clients d-flex flex-column gap-5">
              <div className="emily">
                <img src={emily} alt="emily" />
                <p className="para my-4">
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were met and deadlines were always hit.
                </p>
                <h5>Emily R.</h5>
                <small>Marketing Director</small>
              </div>

              <div className="thomas">
                <img src={thomas} alt="thomas" />
                <p className="para my-4">
                  Sunnyside's enthusiasm coupled with their keen interest in our
                  brand's success made it a satisfying and enjoyable experience.
                </p>
                <h5>Thomas S.</h5>
                <small>Chief Operating Officer</small>
              </div>

              <div className="jennie">
                <img src={jennie} alt="jennie" />
                <p className="para my-4">
                  Incredible end result! Our sales increased over 400% when we
                  worked with Sunnyside. Highly recommended!
                </p>
                <h5>Jennie F.</h5>
                <small>Business Owner</small>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================= */}

        <section>
          <div className="colorsz">
            <div className="d-flex justify-content-start align-items-center">
              <img src={mobmilk} alt="bottle" />
              <img src={moborange} alt="smallorange" />
            </div>
            <div className="d-flex justify-content-start align-items-center">
              <img src={mobcone} alt="icecream" />
              <img src={mobsugar} alt="sugar" />
            </div>
          </div>
        </section>

        {/* ================================================= */}
      </div>

      {/* ===================BIG SCREEN==================== */}

      <div className="d-none d-sm-block">
        <section className="big-head">
          <div className="bh-sec">
            <img className="bigorslice" src={header} alt="bigorslice" />
            <div className="b-weare">
              <h1>WE ARE CREATIVES</h1>
              <img src={arrowd} alt="b-arrd" />
            </div>
          </div>
        </section>

        {/* ================================================= */}

        <section>
          <div className="big-trans">
            <div className="big-brand">
              <h3>Transform your brand</h3>
              <p>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>

              <h5>LEARN MORE</h5>
            </div>
            <div className="big-egg">
              <img src={trans} alt="b-egg" />
            </div>
          </div>
        </section>

        {/* ================================================ */}

        <section>
          <div className="pink-stand">
            <div className="big-pink">
              <img src={stand} alt="" />
            </div>
            <div className="big-stand">
              <h3>Stand out to the right audience</h3>
              <p>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we'll buld and
                extend yourbrand in digital places.
              </p>

              <h5>LEARN MORE</h5>
            </div>
          </div>
        </section>

        {/* ================================================ */}

        <section>
          <div className="big-fruits">
            <div className="big-berries">
              <img src={graph} alt="big-berry" />
              <div className="big-graph">
                <h3>Graphic Design</h3>
                <p>
                  Great design makes you memorable. We deliver artwork that
                  underscores your brand message and captures potential clients'
                  attention.
                </p>
              </div>
            </div>
            <div className="big-oor">
              <img src={photo} alt="b-oor" />
              <div className="big-photo">
                <h3>Photography</h3>
                <p>
                  Increase your credibility by getting the most stunning
                  high-quality photos that improve your business image.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================ */}

        <section>
          <div className="big-clients">
            <h5 className="big-test">CLIENT TESTIMONIALS</h5>
            <div className="big-each-clients">
              <div className="big-emily">
                <img src={emily} alt="emily" />
                <p className="big-para my-5">
                  We put our trust in Sunnyside and they delivered, making sure
                  our needs were met and deadlines were always hit.
                </p>
                <h5>Emily R.</h5>
                <small>Marketing Director</small>
              </div>

              <div className="big-thomas">
                <img src={thomas} alt="thomas" />
                <p className="big-para my-5">
                  Sunnyside's enthusiasm coupled with their keen interest in our
                  brand's success made it a satisfying and enjoyable experience.
                </p>
                <h5>Thomas S.</h5>
                <small>Chief Operating Officer</small>
              </div>

              <div className="big-jennie">
                <img src={jennie} alt="jennie" />
                <p className="big-para my-5">
                  Incredible end result! Our sales increased over 400% when we
                  worked with Sunnyside. Highly recommended!
                </p>
                <h5>Jennie F.</h5>
                <small>Business Owner</small>
              </div>
            </div>
          </div>
        </section>

        {/* ================================================ */}

        <section>
          <div className="big-colors">
            <div>
              <img src={milk} alt="milk" />
            </div>
            <div>
              <img src={orange} alt="small-or" />
            </div>
            <div>
              <img src={cone} alt="cone" />
            </div>
            <div>
              <img src={sugar} alt="cubes" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
