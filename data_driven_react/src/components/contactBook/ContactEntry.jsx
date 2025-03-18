function ContactEntry({img, name, phone, email} ) {
    return (
        <article className="contact-card">
          <img
            src={img}
            alt="Photo of Mr. Whiskerson"
          />
          <h3>{name}</h3>
          <div className="info-group">
            <img src="https://picsum.photos/200/300" alt="phone icon" />
            <p>{phone}</p>
          </div>
          <div className="info-group">
            <img src="https://picsum.photos/200/300" alt="mail icon" />
            <p>{email}</p>
          </div>
        </article>
    );
  }
  export default ContactEntry;
  