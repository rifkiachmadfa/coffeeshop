export default function Admin (){
    return(
        export default function VoucherList() {
            const [vouchers, setVouchers] = useState([
              { id: 1, name: 'Voucher Diskon 10%', amount: 100, period: '1 bulan' },
            ]);
          
            const handleDelete = (id) => {
              setVouchers(vouchers.filter((voucher) => voucher.id !== id));
            };
          
            const handleEdit = (id) => {
              alert(`Edit voucher dengan ID: ${id}`);
            };
          
            return (
              <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                  <table border="1" style={{ width: '100%', textAlign: 'left' }}>
                    <thead>
                      <tr>
                        <th>Nama Voucher</th>
                        <th>Jumlah</th>
                        <th>Periode</th>
                      </tr>
                    </thead>
                    <tbody>
                      {vouchers.map((voucher) => (
                        <tr key={voucher.id}>
                          <td>{voucher.name}</td>
                          <td>{voucher.amount}</td>
                          <td>{voucher.period}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div>
                  <h3>Tambah Voucher</h3>
                  <ul style={{ listStyleType: 'none', padding: 0 }}>
                    {vouchers.map((voucher) => (
                      <li key={voucher.id}>
                        <button onClick={() => handleDelete(voucher.id)}>Hapus</button>
                        <button onClick={() => handleEdit(voucher.id)}>Edit</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          }
    )
}