export default function ListProduct() {
    return (
      <div className="card">
        <h1>Daftar Produk</h1>
        <table border="1" style={{ width: '100%', textAlign: 'left' }}>
          <thead>
            <tr>
              <th>Gambar</th>
              <th>Nama Produk</th>
              <th>Harga</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            <ProductRow
              src="img/teler.jpg"
              alt="Es Teler"
              nama="Es Teler"
              harga="Rp 8.000"
              jumlah="10 Cup"
            />
            <ProductRow
              src="img/kaling.jpg"
              alt="Teh Botol"
              nama="Teh Botol"
              harga="Rp 5.000"
              jumlah="15 Botol"
            />
            <ProductRow
              src="img/Gedung.jpg"
              alt="Keripik Pisang"
              nama="Keripik Pisang"
              harga="Rp 12.000"
              jumlah="7 Bungkus"
            />
          </tbody>
        </table>
      </div>
    );
  }
  
  function ProductRow(props) {
    return (
      <tr>
        <td><ProductImage src={props.src} alt={props.alt} /></td>
        <td><ProductName nama={props.nama} /></td>
        <td><ProductPrice harga={props.harga} /></td>
        <td><ProductQuantity jumlah={props.jumlah} /></td>
      </tr>
    );
  }
  
  function ProductImage(props) {
    return <img src={props.src} alt={props.alt} style={{ width: '100px', height: 'auto' }} />;
  }
  
  function ProductName(props) {
    return props.nama;
  }
  
  function ProductPrice(props) {
    return props.harga;
  }
  
  function ProductQuantity(props) {
    return props.jumlah;
  }