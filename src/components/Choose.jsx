import React, { useState } from "react";
import choose from "../assets/23.jpg";
import choose1 from "../assets/25.jpg";
import choose2 from "../assets/24.jpg";
import choose3 from "../assets/26.jpg";
import choose4 from "../assets/27.jpg";
import Modal from "../components/Portal/Modal";

export default function Choose() {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const data = [
    {
      image: choose1,
      title: "Zdobycie Arki Przymierza przez Filistynów",
      description:
        "Arka stała się przekleństwem dla Filistynów (1 Sm 5-6). Umieszczono ją w świątyni Dagona, ich bóstwa związanego z uprawą roli. Posąg Dagona dwukrotnie upadł przed Arką, za drugim razem miał odciętą głowę i dłonie. W tym samym czasie na ciele Filistynów zaczęły pojawiać się guzy (1 Sm 5,9), a pola nawiedziła klęska myszy (1 Sm 6,5). Plagi nękające Filistynów nie ustąpiły dopóty, dopóki Arka nie została zwrócona Izraelitom (1 Sm 6,8-12).",
    },
    {
      image: choose2,
      title: "Zdobycie Jerycha",
      description:
        "Według Księgi Jozuego po stronie Izraelitów było około czterdziestu tysięcy wojowników. Silnie obwarowane miasto zostało zdobyte zgodnie ze wskazówkami danymi przez Jahwe.",
    },
    {
      image: choose3,
      title: "Jerozolima w rękach Nabuchodonozora",
      description:
        "Arka zaginęła w trakcie najazdu armii Babilonu pod wodzą Nabuchodonozora II na Palestynę w 586 p.n.e. i zburzenia Pierwszej Świątyni.",
    },
    {
      image: choose4,
      title: "Jeremiasz",
      description:
        "Do poglądów o losach zaginionej arki dołącza opis zawarty w 2 Księdze Machabejskiej, wedle którego prorok Jeremiasz ukrył ją w grocie na górze Nebo, po wschodniej stronie Jordanu.",
    },
  ];

  return (
    <div className="choose-us-container mx-3 py-3" id="losy">
      <div className="container">
        <div className="title-container">
          <h2>Losy Arki Przymierza</h2>
          <p>
            Według hebrajskiej Biblii, do momentu wybudowania Pierwszej Świątyni
            przez króla Salomona arka była przewożona na specjalnym wozie z
            zasłonami podczas wszystkich kampanii wojskowych prowadzonych przez
            Izraelitów. Stanowiła ona centrum kultu w czasie wędrówki Izraelitów
            do ziemi Kanaan.
          </p>
        </div>
        <div className="content">
          <div className="choose-us">
            {data.map(({ image, title, description }, index) => {
              return (
                <div className="choose" key={index}>
                  <img src={image} alt="choose" />
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
          <div className="delivery">
            <img src={choose} alt="delivery" />
          </div>
        </div>
        <button onClick={() => Toggle()}>Czytaj</button>
        <Modal
          show={modal}
          close={Toggle}
          title="Historia Arki Przymierza p.n.e."
        >
          {/* <p>Rok (p.n.e.) Wydarzenie</p> */}
          <p>
            <b>1513 - </b> Becalel i jego pomocnicy wykonują Arkę z materiałów
            ofiarowanych przez Izraelitów (Wyjścia 25:1, 2; 37:1).
          </p>
          <p>
            <b>1512 - </b> Mojżesz dokonuje poświęcenia Arki i przybytku oraz
            ustanawia kapłanów (Wyjścia 40:1-3, 9, 20, 21).
          </p>
          <p>
            <b>1512 - po 1070 - </b> Arka jest przenoszona do różnych miejsc
            (Jozuego 18:1; Sędziów 20:26, 27; 1 Samuela 1:24; 3:3; 6:11-14; 7:1,
            2).
          </p>
          <p>
            <b>po 1070 - </b> Król Dawid sprowadza Arkę do Jerozolimy (2 Samuela
            6:12).
          </p>
          <p>
            <b>1026 - </b> Arka zostaje przeniesiona do świątyni zbudowanej w
            Jerozolimie przez Salomona (1 Królów 8:1, 6).
          </p>
          <p>
            <b>642 - </b> Król Jozjasz każe ponownie ustawić Arkę w świątyni (2
            Kronik 35:3).
          </p>
          <p>
            <b>przed 607 - </b> Arka najwyraźniej zostaje usunięta ze świątyni.
            Nie wymieniono jej wśród przedmiotów zabranych do Babilonu (2 Królów
            25:13-17; Ezdrasza 1:7-11).
          </p>
          <p>
            <b>63 - </b> Po zdobyciu Jerozolimy wódz Pompejusz informuje, że nie
            znalazł Arki .
          </p>
          <br />
          <p>
            <em></em>
          </p>
        </Modal>
      </div>
    </div>
  );
}
