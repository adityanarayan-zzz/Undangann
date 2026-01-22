import "./WeddingPage.css";

export default function WeddingPage({ onBack }) {
  return (
    <div className="wedding-page">
      <button className="back-btn" onClick={onBack}>
        ← Back
      </button>

      <section>
        <h2>Akad Nikah</h2>
        <p>Senin, 5 Januari 2026</p>
        <p>09.00 WIB</p>
        <p>
          Ds. Pilangwetan RT.02 RW.03 <br />
          Kebonagung, Demak
        </p>
      </section>

      <section>
        <h2>Resepsi Pernikahan</h2>
        <p>Senin, 5 Januari 2026</p>
        <p>10.00 WIB - Selesai</p>
        <p>
          Ds. Pilangwetan RT.02 RW.03 <br />
          Kebonagung, Demak
        </p>
      </section>

      <section>
        <h2>Love Story</h2>
        <p>
          Tidak ada yang kebetulan di dunia ini. Kami bertemu pada tahun 2018,
          membangun komitmen, hingga akhirnya dipersatukan dalam ikatan suci
          pernikahan.
        </p>
      </section>
    </div>
  );
}
