import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useNavigate } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="text-white bg-black w-full h-24 shadow-lg shadow-blue-900 flex items-center">
      <ul className="navbar flex mx-auto justify-evenly w-[70%] items-center font-semibold uppercase">
        <AnchorLink href="#experience">
          <li className="navItem cursor-pointer hover:bg-gradient-to-r hover:from-blue-800 hover:to-red-800 hover:text-transparent hover:bg-clip-text">
            Experience
          </li>
        </AnchorLink>

        <li>
          <div className="navItem bg-blue-700 w-1 h-1 rounded-full "></div>
        </li>

        <AnchorLink href="#skills">
          <li className="navItem cursor-pointer hover:bg-gradient-to-r hover:from-blue-800 hover:to-red-800 hover:text-transparent hover:bg-clip-text">
            Skills
          </li>
        </AnchorLink>

        <li>
          <p
            onClick={() => navigate("/")}
            className="text-[2rem] cursor-pointer"
          >
            Nisarg Patel
          </p>
        </li>

        <AnchorLink href="#contact">
          <li className="navItem cursor-pointer hover:bg-gradient-to-r hover:from-blue-800 hover:to-red-800 hover:text-transparent hover:bg-clip-text">
            Contact
          </li>
        </AnchorLink>

        <li>
          <div className="navItem bg-blue-700 w-1 h-1 rounded-full "></div>
        </li>

        <li
          onClick={() => navigate("/major-projects")}
          className="navItem cursor-pointer hover:bg-gradient-to-r hover:from-blue-800 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
        >
          Major Projects
        </li>

        <li className={`three_dot cursor-pointer opacity-0 flex flex-col items-center w-[10%] ml-3`}>
                  <VscThreeBars
                      className={`${show && 'mt-56'}`}
                      onClick={() => setShow((pre) => !pre)} />

          {show && (
            <div>
              <ul className="flex flex-col gap-3 mt-10 bg-white rounded-lg p-3 text-black">
                <AnchorLink href="#experience">
                  <li className=" cursor-pointer hover:bg-gradient-to-r hover:from-blue-800 hover:to-red-800 hover:text-transparent hover:bg-clip-text">
                    Experience
                  </li>
                </AnchorLink>

                <AnchorLink href="#skills">
                  <li className=" cursor-pointer hover:bg-gradient-to-r hover:from-blue-800 hover:to-red-800 hover:text-transparent hover:bg-clip-text">
                    Skills
                  </li>
                </AnchorLink>

                <AnchorLink href="#contact">
                  <li className=" cursor-pointer hover:bg-gradient-to-r hover:from-blue-800 hover:to-red-800 hover:text-transparent hover:bg-clip-text">
                    Contact
                  </li>
                </AnchorLink>

                <li
                  onClick={() => navigate("/major-projects")}
                  className="cursor-pointer hover:bg-gradient-to-r hover:from-blue-800 hover:to-red-800 hover:text-transparent hover:bg-clip-text"
                >
                  Major Projects
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
