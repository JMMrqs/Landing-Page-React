import { postFormData } from '../../../composables/DataRequests.js';

export function ContactForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        postFormData(e);
    };
    return (
        <form className="contact-form" method="post" onSubmit={handleSubmit}>
            <input type="text" name="name" id="name" placeholder="Your Name" required />
            <div className="inline-input">
                <input type="email" name="email" id="email" placeholder="Email Address" required />
                <input type="tel" name="telephone" id="telephone" placeholder="Phone Number" />
            </div>
            <input type="text" name="subject" id="subject" placeholder="Subject" required />
            <textarea
                name="message"
                id="message"
                rows="6"
                placeholder="Your Message"
                required
            ></textarea>
            <button type="submit">Send</button>
        </form>
    );
}
