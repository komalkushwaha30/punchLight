import React, { useState } from "react";
import "./Contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import emailjs from "@emailjs/browser";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 40],
});

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [mapCenter, setMapCenter] = useState([26.1485, 87.5141]); // Default: Punchlight Foundation Office
  const [zoomLevel, setZoomLevel] = useState(5); // Default zoom level for India
  const [searchResult, setSearchResult] = useState(
    "Punchlight Office: Village- Araria Basti, Masjid Road, Ward No. 05, Panchayat- Araria Basti, Post- Araria Basti, Police Station- Araria, Dist - Araria - 854311 (Bihar) India"
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_ctfr9zi"; // Replace with your EmailJS service ID
    const templateID = "template_s6u31py"; // Replace with your EmailJS template ID
    const userID = "oF4yHv-iEHIR8ZYcR"; // Replace with your EmailJS user ID

    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Your message has been sent!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        console.error("FAILED...", error);
        alert("Failed to send your message. Please try again later.");
      });
  };

  const handleSearch = () => {
    // Check if the city or pincode matches Punchlight Foundation's location
    if (city.toLowerCase() === "araria" || pincode === "854311") {
      setMapCenter([26.1485, 87.5141]); // Coordinates for Punchlight Foundation Office
      setZoomLevel(15); // Zoom in to the location
      setSearchResult(
        "Punchlight Office: Village- Araria Basti, Masjid Road, Ward No. 05, Panchayat- Araria Basti, Post- Araria Basti, Police Station- Araria, Dist - Araria - 854311 (Bihar) India"
      );
    } else {
      // If the city or pincode does not match, keep the marker at the default location
      setZoomLevel(5); // Zoom out to show a broader view
      setSearchResult("Sorry, Punchlight office is not currently present here.");
    }

    // Clear the search fields
    setCity("");
    setPincode("");
  };

  return (
    <div className="contact-page-container">
      {/* Contact Info and Form Section */}
      <div className="contact-info-form-container">
        {/* Contact Info Section */}
        <div className="contact-info-container">
          <div className="contact-info-card">
            <FaPhoneAlt className="contact-info-icon" />
            <h3>Phone</h3>
            <p>+91 8709945694</p>
          </div>
          <div className="contact-info-card">
            <FaEnvelope className="contact-info-icon" />
            <h3>Email</h3>
            <p>namastepunchlight@gmail.com</p>
          </div>
          <div className="contact-info-card">
            <FaMapMarkerAlt className="contact-info-icon" />
            <h3>Location</h3>
            <p>
              Village- Araria Basti, Masjid Road, Ward No. 05,<br />
              Panchayat- Araria Basti, Post- Araria Basti,<br />
              Police Station- Araria, Dist - Araria - 854311 (Bihar) India
            </p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Map and Search Section */}
      <div className="map-search-container">
        {/* Search Section */}
        <div className="search-box">
          <h3>Search Location</h3>
          <input
            type="text"
            placeholder="Enter City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>

          {/* Search Result */}
          {searchResult && (
            <div className="search-result-card">
              <p>{searchResult}</p>
            </div>
          )}
        </div>

        {/* Map Section */}
        <div className="map-box">
          <MapContainer
            center={mapCenter}
            zoom={zoomLevel}
            style={{ height: "400px", width: "100%", borderRadius: "12px" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={mapCenter} icon={customIcon}>
              <Popup>
                Current Location<br />
                Latitude: {mapCenter[0]}, Longitude: {mapCenter[1]}
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Contact;