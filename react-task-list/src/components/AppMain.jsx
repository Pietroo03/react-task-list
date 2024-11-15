export default function AppMain() {

    const tasks = [
        {
            id: 1,
            title: "Implementare la homepage",
            priority: 1,
            estimatedTime: 120,
            state: "completed"
        },
        {
            id: 2,
            title: "Sviluppare il menu di navigazione",
            priority: 2,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 3,
            title: "Creare il footer del sito",
            priority: 3,
            estimatedTime: 30,
            state: "completed"
        },
        {
            id: 4,
            title: "Ottimizzare le performance",
            priority: 1,
            estimatedTime: 180,
            state: "completed"
        },
        {
            id: 5,
            title: "Scrivere test per i componenti",
            priority: 2,
            estimatedTime: 90,
            state: "completed"
        },
        {
            id: 6,
            title: "Implementare la pagina dei contatti",
            priority: 3,
            estimatedTime: 60,
            state: "completed"
        },
        {
            id: 7,
            title: "Aggiungere animazioni CSS",
            priority: 2,
            estimatedTime: 30,
            state: "backlog"
        },
        {
            id: 8,
            title: "Integrare l'API di autenticazione",
            priority: 1,
            estimatedTime: 120,
            state: "in_progress"
        },
        {
            id: 9,
            title: "Aggiornare la documentazione",
            priority: 3,
            estimatedTime: 60,
            state: "backlog"
        },
        {
            id: 10,
            title: "Rifattorizzare il codice CSS",
            priority: 2,
            estimatedTime: 90,
            state: "in_progress"
        }
    ];

    const completed = tasks.filter((task) => task.state.toLowerCase() === 'completed')
    const in_progress = tasks.filter((task) => task.state.toLowerCase() != 'completed')

    return (

        <main>

            <section className="current">
                <h2>Current Tasks ({in_progress.length})</h2>

                {in_progress.map(task =>
                    <ul key={task.id}>
                        <h3>{task.title} <span>{task.state}</span></h3>
                        <li>Priority: {task.priority}</li>
                        <li>Est. Time: {task.estimatedTime}</li>
                    </ul>
                )}

            </section>

            <hr />

            <section className="completed">

                <h2>Current Tasks ({completed.length})</h2>

                {completed.map(task =>
                    <ul key={task.id}>
                        <h3>{task.title} <span>{task.state}</span> </h3>
                        <li>Priority: {task.priority}</li>
                        <li>Est. Time: {task.estimatedTime}</li>
                    </ul>
                )}

            </section>

        </main >

    )

}