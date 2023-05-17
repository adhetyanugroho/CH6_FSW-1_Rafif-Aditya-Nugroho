import React from 'react'
import icon_complete from "../assets/images/icon_complete.png"
import icon_price from "../assets/images/icon_price.png"
import icon_24hrs from "../assets/images/icon_24hrs.png"
import icon_professional from "../assets/images/icon_professional.png"


export default function Why() {
    return (
        <>
            <section id="why-us">
                <div className="container">
                    <h1 className="heading-why">Why Us</h1>
                    <p className="content-why">Mengapa harus pilih Binar Car Rental?</p>
                    <div className="row">
                        <div className="col-md-3 pt-2">
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        src={icon_complete}
                                        className="icon-why"
                                        alt="icon_complete.png"
                                    />
                                    <h5 className="card-title">Mobil Lengkap</h5>
                                    <p className="card-text">
                                        Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                                        terawat
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 pt-2">
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        src={icon_price}
                                        className="icon-why"
                                        alt="icon_price.png"
                                    />
                                    <h5 className="card-title">Harga Murah</h5>
                                    <p className="card-text">
                                        Harga murah dan bersaing, bisa bandingkan harga kami dengan
                                        rental mobil lain
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 pt-2">
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        src={icon_24hrs}
                                        className="icon-why"
                                        alt="icon_24hrs"
                                    />
                                    <h5 className="card-title">Layanan 24 Jam</h5>
                                    <p className="card-text">
                                        Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                                        tersedia di akhir minggu
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 pt-2">
                            <div className="card">
                                <div className="card-body">
                                    <img
                                        src={icon_professional}
                                        className="icon-why"
                                        alt="icon_professional.png"
                                    />
                                    <h5 className="card-title">Sopir Profesional</h5>
                                    <p className="card-text">
                                        Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                                        tepat waktu
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
