import React from "react";

const Skills = () => {
  return (
    <section
      id="skills"
      className="text-white mt-60 shadow-md shadow-white h-auto rounded-lg bg-gradient-to-r to-black from-blue-950 pb-20"
    >
      <p className="text-center text-[3rem] pt-20 mb-20 font-semibold font-serif">
        Skills
      </p>

      {/* frontend and backend */}
      <div>
        <div className="skill_section text-xl mt-10 flex lg:pl-48">
          <div className="skill_name w-[50%] flex ">
            <p>Front-End : </p>

            <ul className="skill_subsection lg:ml-3">
              <li>Reactjs</li>
              <li>Tailwind CSS</li>

              <li>HTML</li>

              <li>CSS</li>

              <li>JavaScript</li>
            </ul>
          </div>

          <div className="skill_name w-[50%] flex ">
            <p>Back-End : </p>

            <ul className="skill_subsection lg:ml-3">
              <li>Reactjs</li>
              <li>Tailwind CSS</li>

              <li>HTML</li>

              <li>CSS</li>

              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="skill_divide h-[1px] w-[70%] bg-slate-600 lg:ml-36 mt-10 "></div>

      {/* database  and cloudinary*/}
      <div className="skill_section mt-20 flex text-xl lg:pl-48">
        <div className="skill_name  w-[50%] flex ">
          <p>Database : </p>

          <ul className="skill_subsection lg:ml-3">
            <li>MongoDb</li>
          </ul>
        </div>

        <div className=" w-[50%] flex  flex-col">
          <div className=" skill_name  flex ">
            <p>Cloud : </p>

            <ul className="skill_subsection lg:ml-3">
              <li>Cloudinary</li>
            </ul>
          </div>

          <p> {"-> "}For storing the data like images , videos etc...</p>
        </div>
      </div>

      <div className="skill_divide h-[1px] w-[70%] bg-slate-600 lg:ml-36 mt-10 "></div>

      {/* tools and deploy*/}

      <div className="skill_section mt-20 text-xl lg:pl-48">
        <div className="flex ">
          <div className="skill_name w-[50%] flex ">
            <p>Tools : </p>

            <ul className="skill_subsection lg:ml-3">
              <li>Postman</li>
              <li>Github</li>

              <li>VsCode</li>
              <li>MongoDb Compass</li>
            </ul>
          </div>

          <div className="skill_name w-[50%] flex ">
            <p>Deploy : </p>

            <ul className="skill_subsection lg:ml-3">
              <li>Vercel</li>
              <li>Render</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
