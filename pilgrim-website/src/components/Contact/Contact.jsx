function Contact() {
  return (
    <div className="max-w-4xl mx-auto p-5">
      <h2 className="text-3xl font-semibold mb-5">Contact Us</h2>
      <div className="mb-5">
        <h3 className="text-2xl mb-2">Get in Touch</h3>
        <p className="mb-1">Address: Pune</p>
        <p className="mb-1">Phone: 87676998**</p>
        <p className="mb-1">Email: shitoletushar3132@gmail.com</p>
      </div>

      <div className="mb-5 w-4/3 md:w-2/3">
        <div>
          <h3 className="text-2xl mb-2">Send Us a Message</h3>
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Give Feedback
              </label>
              <textarea className="w-full px-3 py-2 border rounded-md"></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="mb-5">
        <h3 className="text-2xl mb-2">Find Us</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15135.900947452813!2d73.8567438238939!3d18.520430117418095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf4e95e051d7%3A0x5012e9c5d0b3c50!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1624333873698!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Company Location"
          className="w-80 h-80 md:w-2/3 md:h-500px"
        ></iframe>
      </div>

      <div className="flex space-x-4 mt-5">
        <a
          href="https://github.com/shitoletushar3132"
          className="text-black"
          target="_blank"
        >
          Github
        </a>
        <a
          href="https://tushars-portfolio.onrender.com/"
          className="text-purple-400"
          target="_blank"
        >
          Portfolio
        </a>
        <a
          href="https://www.linkedin.com/in/shitoletushar3132/"
          className="text-blue-700"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}

export default Contact;
