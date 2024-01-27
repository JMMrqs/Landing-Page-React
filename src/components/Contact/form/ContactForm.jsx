import { serverUrl } from "../../../url";
export function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = JSON.stringify(() => Object.fromEntries(formData.entries()));

    fetch(`${serverUrl}/api/contact/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    }).then((res) => console.log(res.json()));
  };
  return (
    <form
      className="contact-form"
      action={`${serverUrl}/api/contact/`}
      method="post"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Your Name"
        required
      />
      <div className="inline-input">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required
        />
        <input type="tel" name="phone" id="phone" placeholder="Phone Number" />
      </div>
      <input
        type="text"
        name="subject"
        id="subject"
        placeholder="Subject"
        required
      />
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
