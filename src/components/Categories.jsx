import React, { useState } from "react";
import category1 from "../assets/1.jpeg";
import category2 from "../assets/2.jpeg";
import category3 from "../assets/3.jpg";
import category4 from "../assets/4.jpg";
import category5 from "../assets/5.jpg";
import category6 from "../assets/10.jpg";
import category7 from "../assets/18.jpg";
import category8 from "../assets/11.jpg";
import Modal from "../components/Portal/Modal";

export default function Categories() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const categories = [
    {
      image: category1,
      title:
        "W Arce przechowywano święte przedmioty, które miały przypominać Izraelitom o przymierzu, czyli specjalnej umowie, zawartym z nimi przez Boga pod górą Synaj.",
      description: "(Kapłańska 16:3, 13-17)",
    },
    {
      image: category2,
      title:
        "W Biblii Jehowę nazwano „siedzącym na cherubach”, co nawiązuje do dwóch cherubów umieszczonych na pokrywie Arki. Były one „wyobrażeniem rydwanu” Jehowy.",
      description: "(1 Samuela 4:4; Psalm 80:1)",
    },
    {
      image: category3,
      title:
        "Na czas transportu do przykrycia skrzyni używano „zasłony oddzielającej” Miejsce Święte od Miejsca Najświętszego.",
      description: "(Liczb 4:5, 6)",
    },
    {
      image: category4,
      title:
        "Posiadanie Arki nie było gwarancją zwycięstwa. Na przykład Izraelici ponieśli klęskę, kiedy walczyli przeciwko miastu Aj, chociaż w ich obozie znajdowała się Arka. Stało się tak, ponieważ jeden z Izraelitów był nieposłuszny Bogu.",
      description: "(Jozuego 7:1-6)",
    },
    {
      image: category5,
      title:
        "Księga Jeremiasza zawiera proroctwo, zgodnie z którym w przyszłości nikt nie będzie już wspominał Arki Przymierza ani odczuwał jej braku; nikt też nie uczyni nowej.",
      description: "(Jer 3,16)",
    },
    {
      image: category6,
      title:
        "Arkę mieli nosić na ramionach Lewici, korzystając w tym celu z akacjowych drążków. Drążków nie wyciągano z pierścieni, dlatego Lewici nigdy nie musieli dotykać Arki.",
      description: "(Liczb 7:9; 1 Kronik 15:15)",
    },
    {
      image: category7,
      title:
        "Ceremonia Dnia Przebłagania - arcykapłan kropił wtedy krwią ofiarowanych zwierząt przed pokrywą oraz w jej stronę. W ten sposób dokonywał przebłagania, czyli zakrywał grzechy, „za siebie i za swój dom oraz za cały zbór Izraela.",
      description: "(Kapłańska 16:14-17)",
    },
    {
      image: category8,
      title:
        "Arka miała związek z obecnością Boga. Na przykład obłok, który unosił się nad nią w Miejscu Najświętszym i w obozie Izraelitów, był wyrazem obecności i błogosławieństwa Jehowy.",
      description: "(Kapłańska 16:2; Liczb 10:33-36)",
    },
  ];

  return (
    <div className="categories-container mx-3 py-3" id="znaczenie">
      <div className="container">
        <div className="title-container">
          <h2>Znaczenie Arki Przymierza dla Izraeltów</h2>
        </div>
        <div className="categories">
          {categories.map(({ image, title, description }, index) => {
            return (
              <div className="category" key={index}>
                <img src={image} alt="Category" />
                <h4>{title}</h4>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
        <button onClick={() => Toggle()}>Więcej</button>
        <Modal show={modal} close={Toggle} title="Teologia Arki Przymierza">
          <p>
            „Nie ma w historii Izraela żadnych takich elementów tradycji, które
            by przez taki długi czas były nośnikami centralnej teologicznej
            myśli jak Namiot i Arka." Tymi słowami Gerhard von Rad rozpoczyna
            jedną ze swych pierwszych publikacji naukowych. Znak Arki Przymierza
            należy do ważnych elementów tradycji biblijnej, aż do dnia
            dzisiejszego nie słabnie zainteresowanie tym przedmiotem kultu.
          </p>
          <br />
          <p>
            <em>
              Andrzej Mozgol - Teologia Arki Przymierza w Ps 132, Jr 3,14-18
              oraz w 2 Mch 2,1-8
            </em>
          </p>
        </Modal>
      </div>
    </div>
  );
}
