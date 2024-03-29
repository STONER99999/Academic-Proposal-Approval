const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center mt-48">
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-sm">Gannon University</p>
        <p className="text-xs mt-2">
          © {new Date().getFullYear()} Gannon University. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
