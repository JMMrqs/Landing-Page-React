export function ContactForm() {
    return (
        <div className="contact-form">
            <input type="text" name="" id="" placeholder="Your Name" />
            <div className="inline-input">
                <input type="email" name="" id="" placeholder="Email Address" />
                <input type="tel" placeholder="Phone Number" />
            </div>
            <input type="text" placeholder="Subject" />
            <textarea name="" id="" rows="6" placeholder="Your Message"></textarea>
            <button type="submit">Send</button>
        </div>
    );
}
