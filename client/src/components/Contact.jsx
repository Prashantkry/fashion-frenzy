import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendMail = async () => {
    console.log("api triggered");
    const sendData = await fetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
      }),
    });
    const receivedData = await sendData.json();
    console.log(receivedData);
    if (receivedData.message === "Email Sent ✅") {
      setSuccessMessage(receivedData.message);
      setTimeout(() => {
        setSuccessMessage("");
      }, 1000);
    } else {
      setErrorMessage(receivedData.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 1000);
    }
  };

  return (
    <>
      <main className="bg-gray-50 p-4 sm:p-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info data start */}
          <div className="bg-white p-6 rounded-md shadow-md text-gray-900">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Get in touch
            </h1>
            <div className="space-y-6">
              <div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ring-2 mx-3 p-1 rounded-full ring-gray-100 bg-gray-100"
                    height="28"
                    width="28"
                    viewBox="0 0 512 512"
                  >
                    <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                  </svg>
                  <p className="text-lg font-bold mx-2">Email</p>
                </div>
                <p className="ml-10 mt-2">Prashantkry746@gmail.com</p>
              </div>

              <div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ring-2 mx-3 p-1 rounded-full ring-gray-100 bg-gray-100"
                    height="28"
                    width="28"
                    viewBox="0 0 512 512"
                  >
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                  </svg>
                  <p className="text-lg font-bold mx-2">Phone No</p>
                </div>
                <p className="ml-10 mt-2">7991132070</p>
              </div>

              <div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ring-2 mx-3 p-1 rounded-full ring-gray-100 bg-gray-100"
                    height="28"
                    width="28"
                    viewBox="0 0 576 512"
                  >
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                  </svg>
                  <p className="text-lg font-bold mx-2">Address</p>
                </div>
                <p className="ml-10 mt-2">Karnatka, Bangalore</p>
              </div>
            </div>

            {/* Map start */}
            <div className="flex justify-center mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089745622!2d77.46612908286684!3d12.953945615990975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1705238789185!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-md w-full h-64 sm:h-72 md:h-80 lg:w-[510px] lg:h-[300px]"
              ></iframe>
            </div>
            {/* Map end */}
          </div>
          {/* Info data end */}

          {/* Send message form start */}
          <div className="bg-white p-6 rounded-md shadow-md flex flex-col justify-center">
            <h2 className="text-2xl tracking-widest font-semibold text-gray-900 mb-4">
              Send us a message
            </h2>
            <input
              className="rounded-md border border-gray-300 mt-4 bg-transparent p-4 text-base text-gray-600 focus:outline-none focus:border-gray-700"
              id="name"
              type="text"
              aria-label="Name"
              value={name}
              placeholder="Enter your Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="rounded-md border border-gray-300 mt-4 bg-transparent p-4 text-base text-gray-600 focus:outline-none focus:border-gray-700"
              id="subject"
              type="text"
              aria-label="subject"
              value={subject}
              placeholder="Enter your subject"
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              className="rounded-md border border-gray-300 mt-4 bg-transparent p-4 text-base text-gray-600 focus:outline-none focus:border-gray-700"
              id="email"
              type="email"
              aria-label="Email"
              value={email}
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              id="message"
              aria-label="Your message"
              placeholder="Message"
              value={message}
              className="w-full h-32 bg-transparent mt-4 p-4 rounded-md border border-gray-300 resize-none text-base text-gray-600 focus:outline-none focus:border-gray-700"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <button
              onClick={sendMail}
              className="bg-indigo-700 hover:bg-indigo-900 rounded-md mt-4 leading-4 p-4 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700"
            >
              Send
            </button>

            {successMessage && (
              <p className="text-gray-200 flex justify-start mt-4 bg-green-800 w-fit rounded px-1">
                {successMessage}
              </p>
            )}
            {errorMessage && (
              <p className="text-gray-200 flex justify-start mt-4 bg-red-800 rounded px-1">
                {errorMessage}
              </p>
            )}
          </div>
          {/* Send message form end */}
        </div>
      </main>
    </>
  );
}
