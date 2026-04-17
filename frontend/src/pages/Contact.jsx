const Contact = () => {
  return (
    <div className="text-white px-10 py-10 ml-8 mt-4">
      <h1 className="text-4xl font-bold text-pink-500 mb-6">Contact Us</h1>

      <p className="text-gray-300 text-lg mb-4">
        We'd love to hear from you 
      </p>

      <div className="space-y-3 text-gray-300">
        <p>Email: support@Nexora.com</p>
        <p>Phone: +91 10101 01010</p>
        <p>Location: India</p>
      </div>

      {/* Optional simple form */}
      <div className="mt-8 max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-3 rounded bg-gray-800 text-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-3 rounded bg-gray-800 text-white"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 mb-3 rounded bg-gray-800 text-white"
        />
        <button className="bg-pink-500 px-6 py-2 rounded font-bold">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;