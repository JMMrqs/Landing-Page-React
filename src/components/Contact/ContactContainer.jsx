import { ContactInfo } from './ContactInfo.jsx';
import { ContactForm } from './form/ContactForm.jsx';

export default function ContactContainer() {
    return (
        <div className="contact-container">
            <ContactInfo />
            <ContactForm />
        </div>
    );
}
