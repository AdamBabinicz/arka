import React, { useState } from "react";
import compare1 from "../assets/2.jfif";
import compare2 from "../assets/37.jpg";
import compare3 from "../assets/38.jpg";
import compare4 from "../assets/39.jpg";
// import osimage from "../assets/9.png";
// import processorimage from "../assets/9.png";
import { BsChevronDown } from "react-icons/bs";
import { GiAllSeeingEye, GiAngelWings } from "react-icons/gi";
import Modal from "../components/Portal/Modal";

function Products() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const products = [
    {
      image: compare1,
      name: "Besaleel, Besalel",
      model:
        "Rzemieślnik odpowiedzialny za wykonanie Arki Przymierza oraz Przybytku Mojżeszowego.",
      processor: "Był synem Uriego, syna Chura z pokolenia Judy",
      os: "Imię Besaleel znaczy dosłownie „w cieniu Boga”",
    },
    {
      image: compare2,
      name: "Przybytek Mojżeszowy",
      model:
        "Przenośna świątynia starożytnych Izraelitów, zwana także Namiotem Spotkania/Zgromadzenia.",
      processor: "Budowa i konstrukcja Przybytku",
      os: "Przybytek składał się z dziedzińca i przybytku właściwego, zaś przybytek właściwy z Miejsca Świętego i Miejsca Najświętszego, w którym spoczywała Arka Przymierza",
    },
    {
      image: compare3,
      name: "Stół z chlebami pokładnymi",
      model:
        "Wewnątrz Przybytku, w pierwszym pomieszczeniu, czyli w Świątnicy Świętej, po stronie prawej (północnej) stał stół z chlebami pokładnymi – drewniany stół powleczony złotem. Na nim leżało w dwóch stosach 12 niekwaszonych chlebów.",
      processor: "Chleby oblicza – pieczywo obrzędowe",
      os: "Do wypieku każdego z nich używano 2/10 efy najczystszej mąki, tj. ok. 4 l",
    },
    {
      image: compare4,
      name: "Świecznik",
      model:
        "Naprzeciwko stołu z chlebami pokładnymi stał świecznik wykuty z czystego złota. Miał on siedem ramion, a na każdym z nich znajdowała się lampa. Było to jedyne światło w Świątnicy Świętej, ponieważ światło naturalne nie dochodziło przez ściany i zasłony, a okien nie było.",
      processor:
        "Rozdział 25 Księgi Wyjścia opisuje dokładną instrukcję wykonania tego świecznika, podyktowaną Mojżeszowi przez Boga",
      os: "Jej kształt ma stanowić symboliczne nawiązanie do rajskiego Drzewa Życia, którego owoce miały zapewniać nieśmiertelność",
    },
  ];
  return (
    <div className="products-container mx-3 py-3" id="przybytek">
      <div className="container">
        <div className="title-container">
          <h2>Namiot Spotkania</h2>
          <button onClick={() => Toggle()}>Więcej</button>
          <Modal
            show={modal}
            close={Toggle}
            title="MISZKAN - Pierwszy Boży Przybytek"
          >
            <p>
              Miszkan, czyli Namiot Zgromadzenia – zaprojektowany przez samego
              Boga – był konstrukcją przenośną, przystosowaną do łatwego
              demontażu i transportu, z uwagi na przemieszczanie się Izraelitów
              przez pustynię ku ziemi obiecanej. Jak się później okazało, ta
              wędrówka wydłużyła się o 40 lat, więc rzeczywiście funkcjonalność
              Miszkanu doskonale się sprawdziła. Po zdobyciu ziemi Kanaan
              ustawiono go w Szilo, a w roku 959 p.n.e jego sakralną rolę
              przejęła Świątynia w Jeruzalem, którą zbudował Salomon.
            </p>
            <br />
            <p>
              <em>
                www.mesjasz.info/book-page/11-miszkan-pierwszy-boży-przybytek
              </em>
            </p>
          </Modal>
        </div>
        <div className="products">
          {products.map(({ image, name, model, processor, os }, index) => {
            return (
              <div className="product" key={index}>
                <div className="image">
                  <img src={image} alt="Product" />
                </div>
                <h4>
                  <strong>{name}</strong>
                </h4>
                <h5>{model}</h5>
                <hr />
                <div className="processor">
                  <GiAllSeeingEye />
                  {/* <img src={processorimage} alt="processor" /> */}
                  {/* <h4>Processor</h4> */}
                  <p>{processor}</p>
                </div>
                <div className="os">
                  <GiAngelWings />
                  {/* <img src={osimage} alt="os" /> */}
                  {/* <h4>Operating System</h4> */}
                  <p>{os}</p>
                </div>
                <BsChevronDown />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Products;
