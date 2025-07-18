import { useState, useContext } from "react";
import { LanguageContext } from "../LanguageProvider";
import "./Contact.css";

// Import icons from react-icons/fa (Font Awesome 5)
import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";

// Import icons from react-icons/fa6 (Font Awesome 6)
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import emailjs from "@emailjs/browser";

// Custom marker icon
const customIcon = new L.Icon({
 iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // URL for the marker icon
 iconSize: [40, 40], // Size of the marker
 iconAnchor: [20, 40], // Anchor point for the marker
 popupAnchor: [0, -40], // Position of the popup relative to the marker
 className: "custom-marker-icon", // Optional: Add a custom class for styling
});

const Contact = () => {
 const { content } = useContext(LanguageContext);

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
 content.punchlightOffice + ": Village- Araria Basti, Masjid Road, Ward No. 05, Panchayat- Araria Basti, Post- Araria Basti, Police Station- Araria, Dist - Araria - 854311 (Bihar) India"
 );

 const handleInputChange = (e) => {
 const { name, value } = e.target;
 setFormData({ ...formData, [name]: value });
 };

 const handleSubmit = (e) => {
 e.preventDefault();

 const serviceID = "service_nok7nyb"; // Replace with your EmailJS service ID
 const templateID = "template_yqhuyeg"; // Replace with your EmailJS template ID
 const userID = "FdU3hGddYi9kbg-MM"; // Replace with your EmailJS user ID

 emailjs
 .send(serviceID, templateID, formData, userID)
 .then((response) => {
 console.log("SUCCESS!", response.status, response.text);
 // Using a custom message box instead of alert()
 alert(content.messageSentSuccess);
 setFormData({ name: "", email: "", subject: "", message: "" });
 })
 .catch((error) => {
 console.error("FAILED...", error);
 // Using a custom message box instead of alert()
 alert(content.messageSentFail);
 });
 };

 const handleSearch = () => {
 // Check if the city or pincode matches Punchlight Foundation's location
 if (city.toLowerCase() === "araria" || pincode === "854311") {
 setMapCenter([26.1485, 87.5141]); // Coordinates for Punchlight Foundation Office
 setZoomLevel(15); // Zoom in to the location
 setSearchResult(
 content.punchlightOffice + ": Village- Araria Basti, Masjid Road, Ward No. 05, Panchayat- Araria Basti, Post- Araria Basti, Police Station- Araria, Dist - Araria - 854311 (Bihar) India"
 );
 } else {
 // If the city or pincode does not match, keep the marker at the default location
 setZoomLevel(5); // Zoom out to show a broader view
 setSearchResult(content.sorryNotPresent);
 }

 // Clear the search fields
 setCity("");
 setPincode("");
 };

 // Social media icons and their links
 const socialIcons = [
 { icon: FaYoutube, color: '#FF0000', name: 'YouTube', link: 'https://youtube.com/@punchlightchannel?si=oYX_5jkmfWjOlddA' },
 { icon: FaInstagram, color: '#C13584', name: 'Instagram', link: 'https://www.instagram.com/punchlight_foundation?igsh=YnR3bWlyN25zcWph' },
 { icon: FaFacebook, color: '#1877F2', name: 'Facebook', link: 'https://www.facebook.com/groups/205778818753718/?ref=share&mibextid=NSMWBT' },
 { icon: FaLinkedin, color: '#0A66C2', name: 'LinkedIn', link: 'https://www.linkedin.com/groups/9514415' },
 { icon: FaXTwitter, color: '#000000', name: 'X (Twitter)', link: 'https://x.com/Punchlight2024?t=MILObWcQ9NYuwwf1892hqQ&s=09' },
 ];

 return (
 <div className="contact-page-container">
 {/* Contact Info and Form Section (remains at top) */}
 <div className="contact-info-form-container">
 {/* Contact Info Section */}
 <div className="contact-info-container">
 <div className="contact-info-card">
 <FaPhoneAlt className="contact-info-icon" />
 <h3>{content.phone}</h3> {/* Translated */}
 <p>+91 8709945694</p>
 </div>
 <div className="contact-info-card">
 <FaEnvelope className="contact-info-icon" />
 <h3>{content.email}</h3> {/* Translated */}
 <p>namastepunchlight@gmail.com</p>
 </div>
 <div className="contact-info-card">
 <FaLocationDot className="contact-info-icon" />
 <h3>{content.location}</h3> {/* Translated */}
 <p>
 Village- Araria Basti, Masjid Road, Ward No. 05,<br />
 Panchayat- Araria Basti, Post- Araria Basti,<br />
 Police Station- Araria, Dist - Araria - 854311 (Bihar) India
 </p>
 </div>
 </div>

 {/* Contact Form Section */}
 <div className="contact-form-container">
 <h2>{content.sendUsMessage}</h2> {/* Translated */}
 <form onSubmit={handleSubmit} className="contact-form">
 <input
 type="text"
 name="name"
 placeholder={content.yourName}
 value={formData.name}
 onChange={handleInputChange}
 required
 />
 <input
 type="email"
 name="email"
 placeholder={content.yourEmail}
 value={formData.email}
 onChange={handleInputChange}
 required
 />
 <input
 type="text"
 name="subject"
 placeholder={content.subject}
 value={formData.subject}
 onChange={handleInputChange}
 required
 />
 <textarea
 name="message"
 placeholder={content.yourMessage}
 value={formData.message}
 onChange={handleInputChange}
 required
 ></textarea>
 <button type="submit">{content.sendMessage}</button>
 </form>
 </div>
 </div>

 {/* Map and Search Section */}
 <div className="map-search-container">
 {/* Map Section */}
 <div className="map-box">
 <MapContainer
 center={mapCenter}
 zoom={zoomLevel}
 style={{ height: "400px", width: "100%", borderRadius: "12px" }}
 >
 <TileLayer
 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
 attribution='© <a href="[https://www.openstreetmap.org/copyright](https://www.openstreetmap.org/copyright)">OpenStreetMap</a> contributors'
 />
 <Marker position={mapCenter} icon={customIcon}>
 <Popup>
 {content.currentLocation}<br />
 {content.latitude}: {mapCenter[0]}, {content.longitude}: {mapCenter[1]}
 </Popup>
 </Marker>
 </MapContainer>
 </div>

 </div>

 {/* Social Buttons Section */}
 <div className="social-buttons-section">
 <h3>{content.findUsOnline}</h3>
 <div className="social-buttons-grid">
 {socialIcons.map((social, index) => (
 <a
 href={social.link}
 target="_blank"
 rel="noopener noreferrer"
 key={`button-${index}`}
 className="social-button"
 >
 <social.icon
 className="social-button-icon"
 style={{ color: social.color }}
 />
 <span>{social.name}</span>
 </a>
 ))}
 </div>
 </div>
 </div>
 );
};

export default Contact;
