import React, { useState } from "react";
import "./SearchDorcorPage.css";
import {doctorsList} from "./mockDB";

const SearchDoctorPage = () => {
    const [doctors] = useState(doctorsList);

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredDoctors, setFilteredDoctors] = useState(doctors);

    const handleSearch = () => {
        const results = doctors.filter((doctor) =>
            doctor.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredDoctors(results);
    };

    const renderRatingStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= rating ? "star filled" : "star"}>
          ★
        </span>
            );
        }
        return stars;
    };

    return (
        <div className="personal-container">
            <h1>Пошук персоналу</h1>
            <div className="search-section">
                <input
                    type="text"
                    placeholder="Введіть прізвище або назву лікарні"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">
                    Пошук
                </button>
            </div>

            <div className="doctor-list">
                {filteredDoctors.length > 0 ? (
                    filteredDoctors.map((doctor) => (
                        <div key={doctor.id} className="doctor-top">
                            <div className="doctor-card-left">
                                <img src={doctor.photo} alt={`${doctor.fullName}'s photo`} className="doctor-photo" />
                                <div className="rating">{renderRatingStars(doctor.rating)}</div>
                            </div>
                            <div className="doctor-card-right">
                                <h1 className="doctor-name">{doctor.fullName}</h1>
                                <p className="doctor-position">{doctor.position}</p>
                                <p className="doctor-hospital">{doctor.hospital}</p>
                                <p className="doctor-address">{doctor.address}</p>
                                <p className="doctor-phone">{doctor.phone}</p>
                            </div>
                        </div>



                        // <div key={doctor.id} className="doctor-card">
                        //     <div className="doctor-info">
                        //         <h2 className="doctor-name">{doctor.name}</h2>
                        //         <p className="doctor-specialization">{doctor.specialization}</p>
                        //     </div>
                        //     <button
                        //         onClick={() => (window.location.href = `/doctor/${doctor.id}`)} // Replace with react-router navigation if needed
                        //         className="view-profile-button"
                        //     >
                        //         View Profile
                        //     </button>
                        // </div>
                    ))
                ) : (
                    <p className="no-doctors-found">За результатами пошуку не знайдено жодного лікаря</p>
                )}
            </div>
        </div>
    );
};

export default SearchDoctorPage;
