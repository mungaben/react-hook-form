import Link from "next/link";
import React from "react";

const Navabar = () => {
  return (
    <div className="fixed top-0 w-full mx-auto bg-slate-600 ">
      <div className="flex items-center justify-center p-4">
        <div className="top-0 mx-auto text-white ">
          <nav className="flex items-center justify-center py-4 space-x-4">
            <Link href="/">
              <h1 className="text-white cursor-pointer hover:underline">
                Home
              </h1>
            </Link>
            <Link href="/Register">
              <h1 className="text-white cursor-pointer hover:underline">
                Register
              </h1>
            </Link>
            <Link href="/SearchFood">
              <h1 className="text-white cursor-pointer hover:underline">
                SearchData
              </h1>
            </Link>
            <Link href="/UseFormdata">
              <h1 className="text-white cursor-pointer hover:underline">
                UseForm
              </h1>
            </Link>
            <Link href="/Validate">
              <h1 className="text-white cursor-pointer hover:underline">
                Validate
              </h1>
            </Link>
            <Link href="/Temppage">
              <h1 className="text-white cursor-pointer hover:underline">
                Temppage
              </h1>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navabar;
