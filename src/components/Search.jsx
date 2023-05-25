import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import imgUser from '../assets/images/fi_users.png';
import imgSetting from '../assets/images/fi_settings.png';
import imgCalendar from '../assets/images/fi_calendar.png';
import { updatedFilteredCars } from '../features/filter/filterCars';


export default function Search() {
  const filteredCars = useSelector((state) => state.counter.filteredCars);
  const url = 'https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json';
  const [cars, setCars] = useState([]);
  const dispatch = useDispatch();


  const getDataCars = async () => {
    try {
      const response = await axios.get(url);
      const dataCar = response.data;
      setCars(dataCar);
      dispatch(updatedFilteredCars(dataCar));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  useEffect(() => {
    getDataCars();
  }, []);

  const [date, setDate] = useState([]);
  const [time, setTime] = useState([]);
  const [capacity, setCapacity] = useState([]);
  const formatDate = (dateStr) => {
    const newDateTime = new Date(dateStr);
    const epochTime = newDateTime.getTime();

    return epochTime;
  };
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);
  const validateForm = () => {
    if (!date || !time || !capacity) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    setIsFormValid(validateForm());
  }, [date, time, capacity]);

  const cariMobilOnClick = () => {
    if (isFormValid) {
      const dateTimeFilter = new Date(`${date}, ${time}`);
      const epochTime = dateTimeFilter.getTime();
      const filterResult = cars.filter((i) => i.capacity
      >= capacity && formatDate(i.availableAt) >= epochTime);
      dispatch(updatedFilteredCars(filterResult));
      setShowAlert(true);
      setAlertMessage('Success');
      setAlertVariant('success');
    } else {
      setShowAlert(true);
      setAlertMessage('Please fill in all the data!');
      setAlertVariant('danger');
    }
  };

  return (
    <>
      <section className="sewa-mobil">
        <div className="cari-mobil">
          <div className="input-group d-flex flex-column pe-2">
            <p>Tipe Driver</p>
            <select className="form-select" id="InputDriver" required>
              <option className="item" value="" hidden>
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
            <input type="date" className="form-control" id="inputDate" value={date} onChange={(e) => setDate(e.target.value)} required />
          </div>
          <div className="input-group d-flex flex-column pe-2">
            <p>Waktu Jemput/Ambil</p>
            <input type="time" id="inputTime" className="form-control" value={time} onChange={(e) => setTime(e.target.value)} required />
          </div>
          <div className="input-group d-flex flex-column">
            <p>Jumlah Penumpang (Opsional)</p>
            <div className="d-flex flex-row">
              <input type="number" className="form-control item" id="inputCapacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
            </div>
          </div>

          <button type="submit" className="btn btn-success button-search" id="search-btn" onClick={cariMobilOnClick}>
            Cari Mobil
          </button>

        </div>
      </section>

      <div className="container hasil-pencarian">
        {showAlert && (
          <Alert variant={alertVariant} onClose={() => setShowAlert(false)} dismissible>
            {alertMessage}
          </Alert>
        )}
        <div className="hasil d-flex" id="cars-container">
          {filteredCars.map((car) => (
            <div className="col-md-3 my-2" key={car.id}>
              <div className="card" style={{ width: '18rem' }}>
                <img src={car.image} className="card-img-top card-img img-fluid" alt="" />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">
                    {car.manufacture}
                    <span> </span>
                    {car.model}
                  </h5>
                  <h5 className="price">
                    <span className="rp">Rp</span>
                    {car.rentPerDay}
                    <span className="hari">/Hari</span>
                  </h5>
                  <p className="card-text">{car.description}</p>
                  <ul className="list-unstyled">
                    <li className="icon-card">
                      <img src={imgUser} alt="" />
                      {car.capacity}
                      <span className="orang">Orang</span>
                    </li>
                    <li className="icon-card">
                      <img src={imgSetting} alt="" />
                      {car.transmission}
                    </li>
                    <li className="icon-card">
                      <img src={imgCalendar} alt="" />
                      <span className="tahun">Tahun</span>
                      {car.year}
                    </li>
                  </ul>
                  <a href="/">
                    <button className="btn btn-success btn-card mt-auto" type="button">
                      Pilih Mobil
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>

  );
}


