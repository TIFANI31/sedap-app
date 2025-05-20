export default function ArtikelDetail() {
  const propsUserCard = {
    judul: "Tifani",
    tempat: "Pekanbaru",
    tanggal: new Date().toLocaleDateString(),
  };

  return (
    <div className="card">
      <UserCard {...propsUserCard} />
      <h1>Resep Manisan Kolang Kaling Gula Aren</h1>
      <img src="img/kaling.jpg" alt="Kolang Kaling" className="artikel-image" />
      <Detail />
      <Ingredients />
      <Steps />
       {}
    </div>
  );
}

function UserCard(props) {
  return (
    <div >
      <h5>Penulis: {props.judul}</h5>
      <h5>Tempat: {props.tempat}</h5>
      <h5>Tanggal: {props.tanggal}</h5>
    </div>
  );
}

function Detail() {
  return (
    <div className="artikel-detail">
      <p>
        Liputan6.com, Jakarta - Takjil manis jadi satu yang tidak bisa
        tertinggal dari menu buka puasa bersama. Ada banyak pilihan tentu, namun
        bila ingin penganan yang akrab, namun tetap unik, Anda harus
        mempertimbangkan manisan kolang kaling gula aren.
      </p>
      <p>
        Sebagaimana diketahui, manisan kolang kaling umumnya berwarna merah,
        dengan rasa sedikit asam. Sebagai sentuhan berbeda, Anda bisa
        mengolahnya dengan gula aren, bahan yang beberapa tahun belakangan
        mendominasi pasar kopi susu hits.
      </p>
      <p>
        Kendati berbeda secara visual dan rasa, tekstur kolang kaling ini kurang
        lebih sama dengan versi konvensionalnya. Langsung catat resep manisan
        kolang kaling gula aren kreasi pengguna Cookpad @OmahNunie berikut,
        seperti dikutip Minggu, 9 Maret 2025.
      </p>
    </div>
  );
}

function Ingredients() {
  return (
    <div className="artikel-ingredients">
      <hr />
      <h3>Bahan-bahan yang dibutuhkan:</h3>
      <ul>
        <li>300 gram kolang kaling</li>
        <li>75-100 gram gula aren</li>
        <li>300 ml air untuk rebusan 1 (buang airnya)</li>
        <li>100 ml air untuk rebusan 2</li>
        <li>Secukupnya garam</li>
        <li>2 lembar daun pandan</li>
      </ul>
    </div>
  );
}

function Steps() {
  return (
    <div className="artikel-steps">
      <hr />
      <h3>Cara Membuat Manisan Kolang Kaling Gula Aren</h3>
      <ol>
        <li>Cuci kolang kaling sampai bersih.</li>
        <li>Rebus air hingga mendidih, tambahkan 1/4 sdt garam.</li>
        <li>Masukkan kolang kaling dan rebus selama 15 menit, angkat dan tiriskan.</li>
        <li>Rebus gula aren, 1/4 sdt garam, dan daun pandan hingga mendidih.</li>
        <li>Masukkan kolang kaling dan rebus dengan api kecil selama 15 menit.</li>
        <li>Matikan kompor dan biarkan kolang kaling hingga dingin.</li>
        <li>Setelahnya, simpan di kulkas. Sajikan dingin lebih nikmat.</li>
      </ol>
    </div>
  );
}

