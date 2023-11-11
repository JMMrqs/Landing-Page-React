import '../css/Contact.css';
import { Heading } from '../components/shared/Heading.jsx';
import ContactContainer from '../components/Contact/ContactContainer.jsx';

export function Contact() {
    return (
        <div className="contact">
            <Heading firstWord="Contact" />
            <ContactContainer />
        </div>
    );
}
