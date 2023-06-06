import React from "react";
import img from "../images/img.jpg";

const About = () => {
  return (
    <div className="min-h-[90vh] px-5 md:px-[120px] flex justify-center items-center">
      <section className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="flex justify-center">
          <img className="rounded-xl" src={img} alt="" />
        </div>
        <div className="text-left">
          <h1 className="text-4xl font-bold text-sky-700 mb-5">
            Zannatul Binta Bahar
          </h1>
          <p>
            <span className="font-semibold">My Goal: </span> I want to become a
            Junior Full-Stack Developer.
          </p>
          <p>
            I have Completed Web Development Course With Jhankar Mahbub by
            Programming Hero and after completing this Course I'll practice more
            problem solving and will learn Data Structure and Data algorithm for
            developing my self.
          </p>
          <p className="mt-4">
            I always want to work with an International Organization and for
            that reason I'm building my Profile from now. Getting myself ready
            for facing Interview Question.{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
