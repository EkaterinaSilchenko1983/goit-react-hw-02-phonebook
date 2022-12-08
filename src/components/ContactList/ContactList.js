export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map((contact, id) => (
        <li key={id}>
          {contact.name}: {contact.number}
          <button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
