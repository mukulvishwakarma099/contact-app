import { BsThreeDots } from "react-icons/bs";

const Contact = ({ contact }) => {
  return (
    <li
      className="flex justify-between items-center py-3 cursor-pointer border-b"
      key={contact.id}
    >
      <div className="flex items-center gap-2">
        <div className="contact-avatar h-6 w-6 rounded-full">
          <img src={contact.image} alt="" />
        </div>
        <div className="contact-num leading-3">
          <h5 className="text-sm font-semibold">{`${contact.firstName} ${contact.lastName}`}</h5>
          <span className="text-xs text-slate-500">{contact.phone}</span>
        </div>
      </div>
      <div>
        <span>
          <BsThreeDots />
        </span>
      </div>
    </li>
  );
};

export default Contact;
