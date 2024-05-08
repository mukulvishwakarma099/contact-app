import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import mailIcon from "../assets/mail.png";
import messageIcon from "../assets/message.png";
import phoneIcon from "../assets/phone.png";
import telegramIcon from "../assets/telegram.png";
import whatsappIcon from "../assets/whatsapp.png";

const ContactInfoPage = () => {
  const [contact, setContact] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchContacts() {
      await fetch("https://dummyjson.com/users")
        .then((response) => response.json())
        .then(({ users }) => {
          const getContact = users.find((user) => user.id === parseInt(id));
          setContact({ ...getContact });
        })
        .catch((error) => console.error("Error fetching contacts:", error));
    }
    fetchContacts();
  }, []);

  const { firstName, lastName, image, phone, email, address, company } =
    contact;

  return (
    <main className="bg-white w-full h-full">
      <div className="wrapper container w-full md:w-[40vw] h-full border mx-auto">
        <div className="p-5">
          <div className="header flex items-center justify-between text-2xl">
            <div className="cursor-pointer" onClick={() => navigate("/")}>
              <IoIosArrowBack />
            </div>
            <h2 className="font-semibold">Contacts</h2>
            <div className="cursor-pointer">
              <BsThreeDotsVertical />
            </div>
          </div>

          <div className="flex justify-center items-center mt-5 flex-col">
            <div className="w-[140px] h-[140px] rounded-full">
              <img src={image} alt={firstName} />
            </div>
            <div className="flex items-center flex-col mt-3">
              <h4 className="text-base font-bold">{`${firstName} ${lastName}`}</h4>
              <span className="text-xs">{`${address?.city}, ${address?.state}`}</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-200 border-t border-t-slate-400">
          <div className="px-7 py-5">
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <div className="leading-5">
                  <p className="font-semibold ">Mobile</p>
                  <span className="text-xs text-gray-400">{phone}</span>
                </div>
                <div className="flex gap-1">
                  <img
                    src={messageIcon}
                    alt="message"
                    className="cursor-pointer w-12 h-12"
                  />
                  <img
                    src={phoneIcon}
                    alt="phone"
                    className="cursor-pointer w-12 h-12"
                  />
                </div>
              </li>
              <li className="flex justify-between items-center">
                <div className="leading-5">
                  <p className="font-semibold ">Email</p>
                  <span className="text-xs text-gray-400">{email}</span>
                </div>
                <div>
                  <img
                    src={mailIcon}
                    alt="mail"
                    className="cursor-pointer w-12 h-12"
                  />
                </div>
              </li>
              <li className="flex justify-between items-center">
                <div className="leading-5">
                  <p className="font-semibold ">Groups</p>
                  <span className="text-xs text-gray-400">
                    {company?.department}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-200  ">
          <h3 className="font-semibold bg-white px-7 py-3 border-b border-b-slate-400">
            Account Linked
          </h3>
          <ul className="space-y-3 px-7 py-3">
            <li className="flex justify-between items-center">
              <div className="leading-5">
                <p className="font-semibold ">Telegram</p>
              </div>
              <div className="flex gap-1">
                <img
                  src={telegramIcon}
                  alt="telegram"
                  className="cursor-pointer w-10 h-10"
                />
              </div>
            </li>
            <li className="flex justify-between items-center">
              <div className="leading-5">
                <p className="font-semibold ">WhatsApp</p>
              </div>
              <div>
                <img
                  src={whatsappIcon}
                  alt="whatsapp"
                  className="cursor-pointer w-10 h-10"
                />
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-slate-200 pb-5">
          <h3 className="font-semibold bg-white px-7 py-3 border-b border-b-slate-400">
            More Options
          </h3>
          <ul className="space-y-3 px-7 py-3">
            <li className="flex justify-between items-center">
              <p className="font-semibold ">Share Contact</p>
            </li>
            <li className="flex justify-between items-center">
              <p className="font-semibold ">QR Code</p>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default ContactInfoPage;
