import { Mail } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-center space-x-2 text-blue-600 mx-8 my-6">
      <Mail size={24} />
      <span className="font-bold text-lg">Inbox Lift</span>
    </div>
  );
};

export default Header;
