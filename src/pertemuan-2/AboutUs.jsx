export default function AboutUs() {
    return (
        <div className="card">
            <h1>Smartphone Rental</h1>
            <img src="img/Gedung.jpg" alt="logo" className="about-us-image" />
            <p className="about-us-description">
                Selamat datang di Smartphone Rental! Kami menyediakan berbagai pilihan smartphone untuk disewa dengan harga terjangkau.
            </p>
            <Sejarah />
            <Visi />
            <Misi />
            <Jam />
            <Alamat />
        </div>
    );
}

function Sejarah() {
    return (
        <div className="about-us-section">
            <h2>Sejarah</h2>
            <p>
                Kami berkomitmen untuk menjadi penyedia layanan smartphone rental terbaik di Indonesia dengan:
            </p>
        </div>
    );
}

function Visi() {
    return (
        <div className="about-us-section">
            <h2>Visi</h2>
            <p>
                Kami berkomitmen untuk menjadi penyedia layanan smartphone rental terbaik di Indonesia dengan:
            </p>
            <ul>
                <li>Memberikan layanan pelanggan yang luar biasa.</li>
                <li>Menawarkan produk berkualitas tinggi.</li>
                <li>Menjaga harga yang kompetitif.</li>
            </ul>
        </div>
    );
}

function Misi() {
    return (
        <div className="about-us-section">
            <h2>Misi</h2>
            <p>
                Misi kami adalah memberikan layanan terbaik untuk pelanggan kami dengan:
            </p>
            <ul>
                <li>Menjamin kepuasan pelanggan.</li>
                <li>Memberikan produk yang selalu terbarukan.</li>
                <li>Menjaga hubungan baik dengan pelanggan.</li>
            </ul>
        </div>
    );
}

function Jam() {
    const Judul = "Jam Operasional";
    const Waktu = "Senin - Jumat : 08.00 - 21.00 WIB";
    return (
        <div className="about-us-section">
            <h2>{Judul}</h2>
            <p>{Waktu}</p>
        </div>
    );
}

function Alamat() {
    return (
        <div className="about-us-section">
            <h2>Alamat</h2>
            <p>
            Jl. Contoh Alamat No. 123, Jakarta, Indonesia
            </p>
        </div>
    );
}