export default function Admin () {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
        <h1>KOPI</h1>
        <nav style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
          <a href="/">Menu</a>
          <a href="#">Thumbnail</a>
          <a href="#">Pesanan</a>
          <a href="#">Tambah Voucher</a>
          <a href="#">Logout</a>
        </nav>
        <h2>List Voucher</h2>
        <voucherlist />
      </div>
    );
  }