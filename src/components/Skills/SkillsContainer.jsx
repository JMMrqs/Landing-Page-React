import { SkillRow } from './SkillRow.jsx';

export function SkillsContainer() {
    const skills = [
        {
            skillName: 'HTML-5',
            skillLevel: '80%',
        },
        {
            skillName: 'CSS-3',
            skillLevel: '75%',
        },
        {
            skillName: 'Bootstrap',
            skillLevel: '60%',
        },
        {
            skillName: 'JavaScript',
            skillLevel: '50%',
        },
        {
            skillName: 'Adobe Photoshop',
            skillLevel: '70%',
        },
        {
            skillName: 'Adobe Illustrator',
            skillLevel: '65%',
        },
    ];
    return (
        <div className="skills-row">
            {skills.map(({ skillName, skillLevel }) => {
                return <SkillRow skill={skillName} skillLevel={skillLevel} />;
            })}
        </div>
    );
}
