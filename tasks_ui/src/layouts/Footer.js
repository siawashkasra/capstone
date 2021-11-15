import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";

const Footer = () => {
  const [copyright, setCopyright] = useState("");
  // Set copyright year
  useEffect(() => {
    setCopyright(moment().format("YYYY"));
  }, []);

  return (
    <div className="flex-shrink-0 bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
      <div className="flex-1 flex justify-between sm:hidden"></div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm leading-5 text-gray-500">
            <span className="capitalize">Siawash Kasra</span> &copy; {copyright}
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
