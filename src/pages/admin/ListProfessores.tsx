import CardContagem from "../../components/componentsAdmin/Cards/cardContagem";
import TableProfessor from "../../components/componentsAdmin/tables/TableProfessor";
import './Dashboard.css'



export default function ListProfessores() {
    return (
        <div className="mt-14 h-screen flex flex-col">
            <h1 className="text-5xl ml-7 text-gray-300 font-bold">Professores</h1>

            <div className="ml-7 mt-2">
                <p className="text-gray-300">Lista de professores</p>
                <div className="mt-6">
                    <TableProfessor />
                </div>
            </div>
        </div>
    );
}