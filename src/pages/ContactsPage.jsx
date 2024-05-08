/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import Contact from "../components/Contact";
import { Link } from "react-router-dom";

const ContactsPage = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchContacts() {
      await fetch("https://dummyjson.com/users")
        .then((response) => response.json())
        .then(({ users }) => {
          const sortedContacts = users.sort((a, b) => {
            if (a.firstName < b.firstName) return -1;
            if (a.firstName > b.firstName) return 1;
            return 0;
          });
          setContacts(sortedContacts);
        })
        .catch((error) => console.error("Error fetching contacts:", error));
    }
    fetchContacts();
  }, []);

  const getFirstLetter = () => {
    const groupedContacts = {};
    contacts.forEach((contact) => {
      const firstLetter = contact.firstName.charAt(0).toUpperCase();
      if (!groupedContacts[firstLetter]) {
        groupedContacts[firstLetter] = [];
      }
      groupedContacts[firstLetter].push(contact);
    });
    return groupedContacts;
  };

  const groupedContacts = getFirstLetter();

  return (
    <main className="bg-white w-full h-full">
      <div className="wrapper container w-full md:w-[40vw] h-full border mx-auto p-5">
        <h2 className="text-3xl font-semibold">My Contacts</h2>
        <div className="px-3">
          <div className="search-input relative">
            <span className="absolute left-2 top-8">
              <IoSearch className="text-gray-400" />
            </span>
            <input
              type="text"
              className="w-full px-7 py-2 mt-5 rounded-lg shadow-lg outline-gray-100 border-none"
              placeholder="Search by name or number"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="contacts-list mt-5">
            {Object.entries(groupedContacts).map(([letter, contacts]) => (
              <div key={letter} className="mt-4">
                {!search && (
                  <h2 className="text-lg font-medium text-right">{letter}</h2>
                )}
                <ul className="px-2">
                  {contacts
                    .filter((item) => {
                      return search.toLowerCase() === ""
                        ? item
                        : item.firstName.toLowerCase().includes(search);
                    })
                    .map((contact) => (
                      <Link to={`/contacts/${contact.id}`} key={contact.id}>
                        <Contact key={contact.id} contact={contact} />
                      </Link>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactsPage;
