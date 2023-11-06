export function SkillRow({ skill, skillLevel }) {
    return (
        <div className="skill-row">
            <p className="skill-name">{skill}</p>
            <div className="skill-bar-container">
                <div className="skill-bar-fill" style={{ width: skillLevel }}></div>
            </div>
        </div>
    );
}
