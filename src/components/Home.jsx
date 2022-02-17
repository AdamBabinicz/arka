import React from "react";
import { BiSearch } from "react-icons/bi";
import home from "../assets/5.png";
import arka from "../assets/1.png";
import { FaTorah } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home">
      <div className="container mx-3 py-3">
        <div className="title-container">
          <h2>Gdzie znajduje się Arka?</h2>
          <div className="input-container">
            <FaTorah />
            {/* <input type="text" placeholder="Szukaj" />
            <div className="icon">
              <BiSearch />
            </div> */}
          </div>
        </div>
        <div className="extra-image">
          <img src={arka} alt="..." />
          <img src={home} alt="..." />
        </div>
      </div>
    </div>
  );
}
