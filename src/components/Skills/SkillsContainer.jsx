import { SkillRow } from './SkillRow.jsx';

export function SkillsContainer() {
    const skills = [
        {
            id: crypto.randomUUID(),
            skillName: 'HTML-5',
            skillLevel: '80%',
        },
        {
            id: crypto.randomUUID(),
            skillName: 'CSS-3',
            skillLevel: '75%',
        },
        {
            id: crypto.randomUUID(),
            skillName: 'Bootstrap',
            skillLevel: '60%',
        },
        {
            id: crypto.randomUUID(),
            skillName: 'JavaScript',
            skillLevel: '50%',
        },
        {
            id: crypto.randomUUID(),
            skillName: 'Adobe Photoshop',
            skillLevel: '70%',
        },
        {
            id: crypto.randomUUID(),
            skillName: 'Adobe Illustrator',
            skillLevel: '65%',
        },
    ];
    return (
        <div className="skills-row">
            {skills.map(({ id, skillName, skillLevel }) => {
                return <SkillRow key={id} skill={skillName} skillLevel={skillLevel} />;
            })}
        </div>
    );
}
