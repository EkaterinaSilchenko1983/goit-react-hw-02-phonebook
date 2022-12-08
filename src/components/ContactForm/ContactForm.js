export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = event => {
    const { name, number } = event.target.elements;
    event.preventDefault();
    onSubmit(name.value, number.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Name </label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        // value={name}
        // onChange={handleChange}
      />
      <label>Number </label>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        // value={number}
        // onChange={handleChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
};
