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
                <p>[NUMBER PLACEHOLDER]</p>
            </div>
            <div className="contact-info-item">
                <img src={icons.mail} alt="mail icon" />
                <p>joao.marcelo.mm@gmail.com</p>
            </div>
            <div className="contact-info-item">
                <img src={icons.location} alt="location icon" />
                <p>Fortaleza, Ceará</p>
            </div>
        </div>
    );
}
