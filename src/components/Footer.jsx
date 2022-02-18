import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export default function Footer() {
  const data = [
    {
      type: "Filmy",
      subTypes: [
        <a
          href="https://www.youtube.com/watch?v=JsC1epZtD84"
          target="_blank"
          rel="noopener noreferrer"
        >
          Komunikacja z Bogiem
        </a>,
        <a
          href="https://www.youtube.com/watch?v=sPmTUetvNpg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Święty Przybytek
        </a>,
        ,
        <a
          href="https://www.youtube.com/watch?v=rDfndN6xsk4"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zapowiedź
        </a>,
        <a
          href="https://www.youtube.com/watch?v=DtzK7P1pMi8"
          target="_blank"
          rel="noopener noreferrer"
        >
          Etiopia
        </a>,
        <a
          href="https://www.youtube.com/watch?v=RPgOBdim9Kw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Arka
        </a>,
      ],
    },
    {
      type: "Artykuły",
      subTypes: [
        <a
          href="https://pl.wikipedia.org/wiki/Arka_Przymierza"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia
        </a>,
        <a
          href="https://twojahistoria.pl/2019/11/05/tajemnica-arki-przymierza-rozwiazana-czy-to-juz-koniec-poszukiwan"
          target="_blank"
          rel="noopener noreferrer"
        >
          Rozwiązanie tajemnicy?
        </a>,
        <a
          href="https://ciekawostkihistoryczne.pl/2021/11/14/co-stalo-sie-z-arka-przymierza"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ciekawostki
        </a>,
        <a
          href="https://pl.aleteia.org/2019/01/03/przelom-w-poszukiwaniach-arki-przymierza-poznajcie-ciekawe-fakty"
          target="_blank"
          rel="noopener noreferrer"
        >
          Przełom
        </a>,
        <a
          href="https://www.rp.pl/historia/art2214711-gdzie-jest-arka-przymierza"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tron samego Boga
        </a>,
      ],
    },
    {
      type: "Biblia o Arce",
      subTypes: [
        <a
          href="https://biblia.deon.pl/rozdzial.php?id=1187"
          target="_blank"
          rel="noopener noreferrer"
        >
          Księga Samuela
        </a>,
        <a
          href="https://biblista.pl/ukryte/czytelnia-biblijna/1968-arka-przymierza.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dzieło Biblijne
        </a>,
        <a
          href="https://biblia.wiara.pl/doc/1043726.Arka-Przymierza"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wiara.pl
        </a>,
        <a
          href="https://www.naszczas.pl/biblia/opowiesci-biblijne/arka-przymierza"
          target="_blank"
          rel="noopener noreferrer"
        >
          Czas na Biblię
        </a>,
      ],
    },
    // {
    //   type: "More",
    //   subTypes: ["Documentation", "License", "Changelog"],
    // },
  ];
  const socialLinks = [
    <a
      href="https://twitter.com/penrose"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsFacebook />
    </a>,
    <a
      href="https://twitter.com/penrose"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsTwitter />
    </a>,
    <a
      href="https://www.instagram.com/roger.penrose.ok"
      target="_blank"
      rel="noopener noreferrer"
    >
      <BsInstagram />
    </a>,
  ];

  return (
    <footer className="py-3 mx-3">
      <div className="brand-container">
        <div className="brand">
          <span>Arka Przymierza</span>
          <span className="dot">.</span>
        </div>
        <p className="description">
          Arka Świadectwa, Arka Jahwe, Arka twej [Jahwe] siły, Arka Elohim, Arka
          Boga Izraela <br /> <br />
          <em>​(Liczb 7:89; Jozuego 3:6, 13; 2 Kronik 6:41)</em>
        </p>
        <ul className="social-links">
          {socialLinks.map((link, index) => (
            <li key={index}>{link}</li>
          ))}
        </ul>
      </div>
      <div className="links">
        {data.map(({ type, subTypes }, index) => {
          return (
            <div className="link" key={index}>
              <h3 className="title">{type}</h3>
              <ul>
                {subTypes.map((type, index) => (
                  <li key={index}>{type}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <span className="bot">Radom, 2022 - {new Date().getFullYear()}.</span>
    </footer>
  );
}
