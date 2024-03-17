export function DashboardLanguages({ languages }) {
    return (
        <div className="language-list">
            <ul>
                {languages.map((languageInfo) => {
                    return (
                        <li key={languageInfo.id}>
                            {languageInfo.language}: {languageInfo.percentage}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
