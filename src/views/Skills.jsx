import { Heading } from '../components/shared/Heading.jsx';
import { SkillsContainer } from '../components/Skills/SkillsContainer.jsx';

export function Skills() {
    return (
        <div className="skills">
            <Heading firstWord="My" secondWord="Skills" />
            <SkillsContainer />
        </div>
    );
}
