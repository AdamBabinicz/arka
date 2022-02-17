import React, { useState } from "react";
import { HiArrowSmRight } from "react-icons/hi";
import service1 from "../assets/12.jpg";
import service2 from "../assets/16.jpg";
import service3 from "../assets/15.jpg";
import service4 from "../assets/13.jpg";
import Modal from "../components/Portal/Modal";
import Modal1 from "../components/Portal/Modal";
import Modal2 from "../components/Portal/Modal";
import Modal3 from "../components/Portal/Modal";

export default function Services() {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const Toggle = () => setModal(!modal);
  const Toggle1 = () => setModal1(!modal1);
  const Toggle2 = () => setModal2(!modal2);
  const Toggle3 = () => setModal3(!modal3);

  return (
    <div className="services-container mx-3 py-3" id="miejsca">
      <div className="container">
        <div className="service one">
          <p>Jerozolima</p>
          <h4>Wzgórze Świątynne</h4>
          <button onClick={() => Toggle()}>Czytaj</button>
          <Modal show={modal} close={Toggle} title="Arka Przymierza">
            <p>
              Część religijnych Żydów i niektórzy uczeni uważają, że kapłani
              jerozolimscy, na wieść o rychłym upadku miasta, ukryli arkę w
              tajemnej komnacie pod Wzgórzem Świątynnym. Ta komnata ma się
              znajdować pod muzułmańską Studnią Dusz. Aktualnie Arka Przymierza
              uznawana jest za zaginioną – nie ma żadnych realnych dowodów na
              to, aby była ona przechowywana gdziekolwiek na Ziemi.
            </p>
            <br />
            <p>
              <em>pl.wikipedia.org/wiki/Świątynia_Jerozolimska</em>
            </p>
          </Modal>
          <div className="image">
            <img src={service1} alt="service" />
          </div>
        </div>
        <div className="service two">
          <div className="content">
            <h4>Elefantyna</h4>
            <p onClick={() => Toggle1()}>
              Czytaj <HiArrowSmRight />
            </p>
            <Modal1
              show={modal1}
              close={Toggle1}
              title="Historia Arki Przymierza"
            >
              <p>
                Według innej teorii arkę wywieźli Żydzi udający się na emigrację
                do Egiptu, zatrzymali się na wyspie Elefantyna znajdującej się
                na rzece Nil i ok. 650 r. p.n.e zbudowali świątynię. Po jej
                zburzeniu przez Egipcjan ok. 410 r. p.n.e. wyruszyli na południe
                wzdłuż Nilu do Etiopii i umieścili ją w Aksun.
              </p>
              <br />
              <p>
                <em>pl.wikipedia.org/wiki/Arka_Przymierza</em>
              </p>
            </Modal1>
          </div>
          <div className="image">
            <img src={service2} alt="service" />
          </div>
        </div>
        <div className="service three">
          <div className="image">
            <img src={service3} alt="service" />
          </div>
          <div className="content">
            <h4>Katedra we francuskim Chartres</h4>
            <p onClick={() => Toggle2()}>
              Czytaj <HiArrowSmRight />
            </p>
            <Modal2
              show={modal2}
              close={Toggle2}
              title="Arka Przymierza pilnie poszukiwana"
            >
              <p>
                Niektórzy poszukiwacze uważają, że sami Żydzi ukryli ją gdzieś w
                tunelach na Wzgórzu Świątynnym. W średniowieczu mieli jej tam
                szukać templariusze. Może nawet odnaleźli relikwię i zabrali,
                skoro na swojej sławetnej katedrze we francuskim Chartres
                rycerze zakonni umieścili napis „Tu przechowywana jest Arka”
                (Hic amicitur Arca foederis) wraz ze stosowną płaskorzeźbą?
              </p>
              <br />
              <p>
                <em>
                  przekroj.pl/nauka/arka-przymierza-pilnie-poszukiwana-adam-weglowski
                </em>
              </p>
            </Modal2>
          </div>
        </div>
        <div className="service four">
          <p>Etiopia</p>
          <h4>Kościół Matki Bożej z Syjonu w Aksum</h4>
          <p onClick={() => Toggle3()}>
            Czytaj <HiArrowSmRight />
          </p>
          <Modal3
            show={modal3}
            close={Toggle3}
            title="Czy Arka znajduje się w jednym z afrykańskich kościołów?"
          >
            <p>
              Według doniesień zespołu BASE – Bible Archaeology, Search &
              Exploration Institute (ang. Instytut Biblijnej Archeologii,
              Poszukiwań i Eksploracji) Arka, bądź jej wierna replika, znajduje
              się w kościele Matki Bożej z Syjonu w Aksum, na terenie Etiopii.
              Miała dotrzeć tam za panowania króla Manessa, który przekazał ją
              żydowskiej społeczności w Egipcie.
            </p>
            <br />
            <p>
              <em>
                pl.aleteia.org/2019/01/03/przelom-w-poszukiwaniach-arki-przymierza-poznajcie-ciekawe-fakty
              </em>
            </p>
          </Modal3>
          <div className="image">
            <img src={service4} alt="service" />
          </div>
        </div>
      </div>
    </div>
  );
}
