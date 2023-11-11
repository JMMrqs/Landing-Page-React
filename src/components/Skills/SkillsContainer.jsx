import { SkillRow } from './SkillRow.jsx';

export function SkillsContainer() {
    const skills = [
        {
            id: crypto.randomUUID(),
            skillName: 'JavaScript',
            skillLevel: '90%',
        },
        {
            id: crypto.randomUUID(),
            skillName: 'HTML + CSS',
            skillLevel: '80%',
        },
        {
            id: crypto.randomUUID(),
            skillName: 'TypeScript',
            skillLevel: '60%',
        },
        {
            id: crypto.randomUUID(),
            skillName: 'React',
            skillLevel: '70%',
        },
        {
            id: crypto.randomUUID(),
            skillName: 'TailwindCSS',
            skillLevel: '40%',
        },
        {
            id: crypto.randomUUID(),
            skillName: 'Python',
            skillLevel: '60%',
        },
        {
            id: crypto.randomUUID(),
            skillName: 'SQLite (SQL)',
            skillLevel: '45%',
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
