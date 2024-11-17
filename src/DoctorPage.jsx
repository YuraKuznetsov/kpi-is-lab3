import React, {useState} from "react";
import "./DoctorPage.css"; // Import the CSS file

import {doctorsList} from "./mockDB";

const DoctorPage = ({docto1r}) => {
    const doctor = doctorsList[1];

    const [activeTab, setActiveTab] = useState("info");
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [commentsList, setCommentsList] = useState(doctor.reviews);

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!comment || !rating) {
            alert("Please provide both a comment and a rating.");
            return;
        }

        const newComment = {
            text: comment,
            rating: rating,
            id: new Date().getTime(),
        };
        setCommentsList([newComment, ...commentsList]);

        setComment("");
        setRating(0);
    };

    return (
        <div className="doctor-page">
            <div className="doctor-page-container">
                <div className="doctor-top">
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

                <div className="tabs">
                    <button className={activeTab === "info" ? "tab active" : "tab"} onClick={() => setActiveTab("info")}> Запис на прийом </button>
                    <button className={activeTab === "appointments" ? "tab active" : "tab"} onClick={() => setActiveTab("appointments")}> Залишити відгук </button>
                </div>

                <div className="tab-content">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="comment" className="form-label">Поділіться враженнями про лікаря</label>
                            <textarea
                                id="comment"
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Опишіть як пройшов прийом"
                                rows="4"
                                className="form-textarea"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Оцініть роботу лікаря</label>
                            <div className="rating-container">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <span
                                        key={star}
                                        onClick={() => setRating(star)}
                                        className={`star ${star <= rating ? "selected" : ""}`}
                                    >★</span>
                                ))}
                            </div>
                        </div>

                        <button type="submit" className="submit-button">Submit</button>
                    </form>

                    <div className="comments-section">
                        <div className="comments-section-title">Відгуки пацієнтів</div>
                        {commentsList.length > 0 ? (
                            <ul className="comments-list">
                                {commentsList.map((item) => (
                                    <li key={item.id} className="comment-item">
                                        <div className="comment-text">{item.text}</div>
                                        <div className="comment-rating">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <span
                                                    key={index}
                                                    className={`star ${
                                                        index < item.rating ? "selected" : ""
                                                    }`}
                                                >
                                                  ★
                                                </span>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No comments submitted yet.</p>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DoctorPage;
