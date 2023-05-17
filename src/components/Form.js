import React from 'react'

export default function Form() {
    return (
        <>
            <section class="sewa-mobil">
                <div class="cari-mobil">
                    <div class="input-group d-flex flex-column pe-2">
                        <p>Tipe Driver</p>
                        <select class="form-select" id="InputDriver" required>
                            <option class="item" value="" selected hidden>
                                Pilih Tipe Driver
                            </option>
                            <option class="item" value="true">Dengan Sopir</option>
                            <option class="item" value="false">
                                Tanpa Sopir (Lepas Kunci)
                            </option>
                        </select>
                    </div>
                    <div class="input-group d-flex flex-column pe-2">
                        <p>Tanggal</p>
                        <input type="date" class="form-control" id="inputDate" required />
                    </div>
                    <div class="input-group d-flex flex-column pe-2">
                        <p>Waktu Jemput/Ambil</p>
                        <input type="time" id="inputTime" class="form-control" required />
                    </div>
                    <div class="input-group d-flex flex-column">
                        <p>Jumlah Penumpang (Opsional)</p>
                        <div class="d-flex flex-row">
                            <input type="number" class="form-control item" id="inputCapacity" />
                        </div>
                    </div>

                    <button type="submit" class="btn btn-success button-search" id="search-btn">
                        Cari Mobil
                    </button>

                </div>
            </section>
        </>
    )
}
