const Contact = () => {
  return (
    <div className="flex flex-col items-center my-4">
      <h1 className="font-bold">This is Contact Page</h1>
      <div>
        <input
          type="text"
          className="border border-black p-2 m-2 rounded"
          placeholder="Name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2 rounded"
          placeholder="Email"
        />
        <button className="border p-2 m-2 rounded-lg bg-blue-500 border-black">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
