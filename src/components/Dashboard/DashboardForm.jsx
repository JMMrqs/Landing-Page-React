export function DashboardForm({ handleSubmit }) {
    return (
        <form className="dashboard-form" method="post" onSubmit={handleSubmit}>
            <label htmlFor="language">Adicione a linguagem</label>
            <input name="language" type="text" required />
            <label htmlFor="percentage">Qual o nível da sua habilidade?</label>
            <input name="percentage" type="number" max={100} required />
            <button type="submit">Enviar</button>
        </form>
    );
}
