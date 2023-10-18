import CardContagem from "../../components/componentsAdmin/Cards/cardContagem";
import TableAluno from "../../components/componentsAdmin/tables/TableAluno";
import './Dashboard.css'



export default function ListAlunos() {
    return (
        <div className="mt-14 h-screen flex flex-col">
            <h1 className="text-5xl ml-7 text-gray-300 font-bold">Alunos</h1>

            <div className="ml-7 mt-2">
                <p className="text-gray-300">Lista de alunos</p>
                <div className="mt-6">
                    <TableAluno />
                </div>
            </div>
        </div>
    );
}