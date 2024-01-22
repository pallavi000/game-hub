import React from "react";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between items-center p-8 px-12">
        <div className="font-medium text-3xl">Logo</div>
        <div className="flex items-center gap-12">
          <div>Home</div>
          <div>About Us</div>
          <div>Portfolio</div>
          <div>News</div>
          <button className="bg-orange-400 py-2 px-4 rounded-lg">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
