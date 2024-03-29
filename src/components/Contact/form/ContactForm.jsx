import { postFormData, contactFormRoute } from '../../../composables/DataRequests.js';

export function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        postFormData(e, contactFormRoute);
        e.target.reset();
    };
    return (
        <form className="contact-form" method="post" onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" placeholder="Your Name" required />
            <div className="inline-input">
                <input type="email" name="email" id="email" placeholder="Email Address" required />
                <input type="tel" name="phone" id="phone" placeholder="Phone Number" />
            </div>
            <input type="text" name="subject" id="subject" placeholder="Subject" required />
            <textarea name="text" id="text" rows="6" placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
        </form>
    );
}
