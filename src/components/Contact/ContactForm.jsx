export function ContactForm() {
    return (
        <div className="contact-form">
            <input type="text" name="" id="" placeholder="Full Name" />
            <input type="email" name="" id="" placeholder="Email Address" />
            <div className="phone-input">
                <input type="tel" placeholder="Phone Number" />
                <input type="text" placeholder="Subject" />
            </div>
            <textarea name="" id="" rows="6" placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
        </div>
    );
}
