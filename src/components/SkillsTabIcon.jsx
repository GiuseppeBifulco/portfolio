import React from "react";

export default function SkillsTabIcon({skill}) {
  return (
    <div className="shadow-md shadow-[black] hover:scale-110 duration-500">
      <img className="w-20 mx-auto" src={skill.img} alt="html icon" />
      <p className="my-4">{skill.name}</p>
    </div>
  );
}
