import "./Contact.styles.scss";

const Contact = () => {
  return(
    <section id="contact" className="contact-container">
      <div className="container">
        <h2 className="contact-heading">Contact</h2>
      </div>
      <form action="mailto:agnes.nicer@gmail.com" method="POST" enctype="text/plain">
          <button className="btn btn-primary" type="submit"> MESSAGE ME</button>
      </form>
    </section>
  );
}

export default Contact;