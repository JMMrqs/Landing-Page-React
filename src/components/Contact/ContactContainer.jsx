import { fetchIntoState } from "../../composables/DataRequests.js";
import { ContactInfo } from "./ContactInfo.jsx";
import { ContactForm } from "./form/ContactForm.jsx";
import { useState, useEffect } from "react";

export default function ContactContainer() {
  const [contactData, setContactData] = useState({});
  useEffect(() => {
    fetchIntoState("/api/contact/", setContactData);
  }, []);

  return (
    <div className="contact-container">
      <ContactInfo
        phoneNumber={contactData.phoneNumber}
        phoneIcon={contactData.phoneIcon}
        phoneIconDesc={contactData.phoneIconDesc}
        email={contactData.email}
        emailIcon={contactData.emailIcon}
        emailIconDesc={contactData.emailIconDesc}
        location={contactData.location}
        locationIcon={contactData.locationIcon}
        locationIconDesc={contactData.locationIconDesc}
      />
      <ContactForm />
    </div>
  );
}
