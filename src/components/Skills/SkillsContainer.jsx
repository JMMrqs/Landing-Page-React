import { SkillRow } from './SkillRow.jsx';
import { useState, useEffect } from 'react';

export function SkillsContainer() {
    const [skills, setSkills] = useState(null);
    const url = 'http://localhost:4000';

    useEffect(() => {
        fetch(`${url}/api/skills/`)
            .then((response) => response.json())
            .then((data) => {
                return setSkills(data);
            });
    }, []);

    return (
        <div className="skills-row">
            {skills?.map(({ id, skillName, skillLevel }) => {
                return <SkillRow key={id} skill={skillName} skillLevel={skillLevel} />;
            })}
        </div>
    );
}
