const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-500">
          © {new Date().getFullYear()} Jocanola. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
