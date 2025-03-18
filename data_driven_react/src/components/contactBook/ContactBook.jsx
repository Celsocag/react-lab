import ContactEntry from "./ContactEntry";

function ContactBook() {
  return (
    <div className="contacts">
      <ContactEntry
        img="https://picsum.photos/200/100"
        name="Mr. Whiskerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <ContactEntry
        img="https://picsum.photos/201/100"
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <ContactEntry
        img="https://picsum.photos/200/101"
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <ContactEntry
        img="https://picsum.photos/199/100"
        name="Pumpkin"
        phone="(0800) CAT KING"
        email="pumpkin@scrimba.com"
      />
    </div>
  );
}
export default ContactBook;
