export function MenuItemHome() {
    const scrollInto = (elm = 'header') => {
        const [aboutView] = document.getElementsByClassName(elm);
        aboutView?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="menu-item">
            <a onClick={() => scrollInto('header')}>Home</a>
            <a onClick={() => scrollInto('about')}>About Me</a>
            <a onClick={() => scrollInto('service')}>Services</a>
            <a onClick={() => scrollInto('skills')}>Skills</a>
            <a onClick={() => scrollInto('portfolio')}>Portfolio</a>
            <a onClick={() => scrollInto('contact')}>Contact</a>
        </div>
    );
}
