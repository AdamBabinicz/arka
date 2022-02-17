import React, { useState } from "react";
import recommend1 from "../assets/8.png";
import recommend2 from "../assets/11.png";
import recommend3 from "../assets/7.png";
// import recommend4 from "../assets/2.png";
import Modal from "../components/Portal/Modal";

export default function Recommend() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const data = [
    {
      image: recommend1,
      text: "2 kamienne tablice dekalogu",
    },
    {
      image: recommend2,
      text: "Laska Aarona",
    },
    {
      image: recommend3,
      text: "Naczynie z manną",
    },
    // {
    //   image: recommend4,
    //   text: "Bored work from home. You can make juice for your health",
    // },
  ];

  return (
    <div className="recommend-container mx-3 py-3" id="zawartość">
      <div className="container">
        <div className="title-container">
          <h2>Co znajdowało się w Arce?</h2>
        </div>
        <div className="categories">
          {data.map(({ image, text }, index) => {
            return (
              <div className="category" key={index}>
                <img src={image} alt="Category" />
                <h4>{text}</h4>
              </div>
            );
          })}
        </div>
        <button onClick={() => Toggle()}>Zobacz</button>
        <Modal show={modal} close={Toggle} title="Zawartość Arki Przymierza">
          <p>
            Po wyjściu Izraela z Egiptu Bóg polecił im, aby zrobili mała
            drewnianą arkę pokrytą złotem. Arka miała wymiary 140×80x80cm i była
            nazywana „Arką Świadectwa” lub „Arką Przymierza”, ponieważ
            znajdowały się w niej kamienne tablice, na których spisane było
            Dziesięcioro Przykazań ( Ex 25:16). Jak podaje Księga Królewska 8:9:
            „W Skrzyni nie było nic oprócz dwóch kamiennych tablic,...”
            Niemniej, autor Listu do Hebrajczyków wskazuje, że w arce znajdowały
            się „złoty dzban z manną, laska Aarona, która zakwitła, oraz tablice
            przymierza” (9:4).
          </p>
          <br />
          <p>
            <em>poznajpana.pl/zawartosc-arki-przymierza</em>
          </p>
        </Modal>
      </div>
    </div>
  );
}
