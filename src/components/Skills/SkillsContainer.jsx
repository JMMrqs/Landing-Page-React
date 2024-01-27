import { SkillRow } from "./SkillRow.jsx";
import { useState, useEffect } from "react";
import { fetchIntoState } from "../../composables/DataRequests.js";

export function SkillsContainer() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetchIntoState("/api/skills/", setSkills);
  }, []);

  return (
    <div className="skills-row">
      {skills.map(({ id, skillName, skillLevel }) => {
        return <SkillRow key={id} skill={skillName} skillLevel={skillLevel} />;
      })}
    </div>
  );
}
