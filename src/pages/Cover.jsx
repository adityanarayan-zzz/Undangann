import "./Cover.css";
import couple from "../assets/couple.jpg";

export default function Cover({ onOpen }) {
  return (
    <div className="cover">
      <div className="ornament left" />
      <div className="ornament right" />

      <div className="cover-content">
        <p className="subtitle">THE WEDDING OF</p>
        <h1 className="title">Atika & Alamil</h1>

        <div className="photo-wrapper">
          <img src={couple} alt="Foto Mempelai" />
        </div>

        <p className="to">Kepada Yth.</p>
        <p className="guest">Nama Tamu</p>
        <p className="place">Di Tempat</p>

        <button className="open-btn" onClick={onOpen}>
          ✉ Open Invitation
        </button>
      </div>
    </div>
  );
}
