import React from 'react';

export default function Form() {
  return (
    <section className="sewa-mobil">
      <div className="cari-mobil">
        <div className="input-group d-flex flex-column pe-2">
          <p>Tipe Driver</p>
          <select className="form-select" id="InputDriver" required>
            <option className="item" value="" selected hidden>
              Pilih Tipe Driver
            </option>
            <option className="item" value="true">Dengan Sopir</option>
            <option className="item" value="false">
              Tanpa Sopir (Lepas Kunci)
            </option>
          </select>
        </div>
        <div className="input-group d-flex flex-column pe-2">
          <p>Tanggal</p>
          <input type="date" className="form-control" id="inputDate" required />
        </div>
        <div className="input-group d-flex flex-column pe-2">
          <p>Waktu Jemput/Ambil</p>
          <input type="time" id="inputTime" className="form-control" required />
        </div>
        <div className="input-group d-flex flex-column">
          <p>Jumlah Penumpang (Opsional)</p>
          <div className="d-flex flex-row">
            <input type="number" className="form-control item" id="inputCapacity" />
          </div>
        </div>

        <button type="submit" className="btn btn-success button-search" id="search-btn">
          Cari Mobil
        </button>

      </div>
    </section>
  );
}
