import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_y7mgrmy", // Replace with your EmailJS service ID
        "template_1gfojif", // Replace with your EmailJS template ID
        formRef.current,
        "Br4ZmL9xHF374wGhg" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatusMessage("Message sent successfully!");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setStatusMessage("Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="bg-[#E6E6E6] py-10" id="contact">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-center text-2xl font-bold text-blue-600 mb-6">
          Contact Us
        </h2>
        <div
          className="bg-white shadow-lg rounded-lg overflow-hidden border border-blue-400"
          style={{
            backgroundImage: "url('/Contact.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Contact Details */}
            <div className="p-10 flex flex-col gap-4 justify-center text-lg">
              <p className="flex items-center gap-2">
                <i className="ri-map-pin-fill text-xl"></i> InternHub, Miyapur, Hyderabad, Telangana
              </p>
              <p className="flex items-center gap-2">
                <i className="ri-phone-fill text-xl"></i> +91 7702 827 739
              </p>
              <p className="flex items-center gap-2">
                <i className="ri-message-2-fill text-xl"></i> 7702 827 739
              </p>
              <p className="flex items-center gap-2">
                <i className="ri-mail-fill text-xl"></i> info@zoomsterhub.com
              </p>
            </div>

            {/* Contact Form */}
            <div className="m-5 bg-[#E6E6E6] rounded-lg shadow-md">
              <h3 className="text-xl font-bold bg-blue-500 text-black p-2 text-center rounded-md">
                Contact Form
              </h3>
              <form ref={formRef} onSubmit={sendEmail} className="mt-4 space-y-4 p-6">
                <div>
                  <label className="block text-sm font-semibold">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    className="w-full px-3 py-2 border rounded-md focus:outline-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    className="w-full px-3 py-2 border rounded-md focus:outline-blue-500"
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="flex items-center justify-center">
                  <button
                    type="submit"
                    className="w-30 bg-blue-600 text-black py-2 rounded-md hover:bg-blue-700"
                  >
                    Submit
                  </button>
                </div>
                {statusMessage && (
                  <p className="text-center text-green-600 mt-2">{statusMessage}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
