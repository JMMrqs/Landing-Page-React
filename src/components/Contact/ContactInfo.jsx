export function ContactInfo() {
    const icons = {
        phone: '../../../public/images/ContactPhoneAlt.svg',
        mail: '../../../public/images/ContactEnvelope.svg',
        location: '../../../public/images/ContactLocationArrow.svg',
    };
    return (
        <div className="contact-info">
            <div className="contact-info-item">
                <img src={icons.phone} alt="phone icon" />
                <p>
                    +8801863-931220
                    <br />
                    +8801567-953483
                </p>
            </div>
            <div className="contact-info-item">
                <img src={icons.mail} alt="mail icon" />
                <p>mdriead.bd@gmail.com</p>
            </div>
            <div className="contact-info-item">
                <img src={icons.location} alt="location icon" />
                <p>Zirabo, Ashulioa, Savar, Dhaka</p>
            </div>
        </div>
    );
}
