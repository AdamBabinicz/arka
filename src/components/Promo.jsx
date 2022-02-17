import React from "react";
import promo from "../assets/41.jpg";

export default function Promo() {
  return (
    <div className="promo-container" id="kapłani">
      <div className="container mx-3 py-3">
        <div className="content">
          <div className="title-container">
            <h2>Kapłaństwo Izraelitów w Przybytku Przymierza</h2>
            <p>
              Księga Kapłańska podaje, że Mojżesz posłuszny Bożym nakazom
              przygotował wszystko, co było konieczne dla dokonania święceń
              kapłańskich Aarona i jego synów: kapłańskie szaty, olej do
              namaszczenia, żertwy ofiarne (cielec i dwa barany) oraz pleciony
              kosz zawierający trzy rodzaje chleba (chleb przaśny, placek
              przyrządzony z oliwą oraz podpłomyk) (Kpł 8,1-3).
              <br />
              <br /> Stwierdzenie, że „Mojżesz uczynił tak, jak mu PAN nakazał”
              (Kpł 8,4) podkreśla postawę posłuszeństwa nakazom Boga, które jest
              istotne dla skuteczności święceń kapłańskich. Księga Kapłańska
              podaje, że po zakończeniu czynności przygotowawczych, z polecenia
              Mojżesza u wejścia do Namiotu Spotkania zgromadziła się cała
              społeczność narodu wybranego (Kpł 8,4). W ten sposób natchniony
              autor wyakcentował ogromne znaczenie święceń kapłańskich Aarona i
              jego synów dla historii Izraela.
            </p>
            <p>
              Konsekracja kapłańska, a więc poświęcenie ludzi na służbę Bogu
              rozpoczynała się od przyprowadzenia Aarona i jego synów przed
              Namiot Spotkania. Ponieważ hebrajski czasownik opisujący tę
              czynność jest właściwym technicznym terminem na oznaczenie ofiar
              składanych ze zwierząt wyłącznie dla Boga (hebr. jaqrîb), dlatego
              też użycie tego wyrazu w opisie święceń kapłańskich oznacza, że
              wybrani ludzie zostali „ofiarowani” Bogu po to, by mogli być
              „konsekrowani” na wyłączną służbę przy ołtarzu (Kpł 8,6).
            </p>
          </div>
          {/* <div className="subscribe-container">
            <input type="email" placeholder="yourname@mail.com" />
            <button>Subscribe</button>
          </div> */}
        </div>
        <div className="promo-image">
          <img src={promo} alt="Promo" />
        </div>
      </div>
    </div>
  );
}
