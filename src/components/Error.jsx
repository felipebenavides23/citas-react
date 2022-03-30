const Error = ({ children }) => {
  return (
    <div className="bg-red-600 text-white px-4 py-5 rounded-md shadow-md mb-6 text-center uppercase hover:font-bold duration-100 ">
      {children}
    </div>
  );
};

export default Error;
