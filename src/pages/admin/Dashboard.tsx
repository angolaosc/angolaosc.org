import CardContagem from "../../components/componentsAdmin/Cards/cardContagem";
import './Dashboard.css'



export default function Dashboard() {
    return (
        <div className="mt-14 h-screen flex flex-col">
            <div>
                <h1 className="text-5xl ml-7 text-gray-300 font-bold">Dashboard</h1>
            </div>
            <div className="h-40 flex w-auto">
                <div className="card-container w-auto">
                    <CardContagem numero={120} titulo={"Professores"} />
                    <CardContagem numero={600} titulo={"Alunos"} />
                    <CardContagem numero={380} titulo={"Sebentas"} />
                    {/* <CardContagem numero={280} titulo={"Aula"} /> */}
                </div>
            </div>
        </div>
    );
}