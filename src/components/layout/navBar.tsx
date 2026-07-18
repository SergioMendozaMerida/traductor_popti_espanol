import { Link } from "react-router-dom"

export const BarraDeNavegacion = () => {
    return (
        <nav className="w-full bg-gray-800 text-white px-6 py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <h1 className="text-xl font-bold">Popti Español</h1>
                <ul className="flex gap-6">
                    <li>
                        <h2>
                            Softnam.gt
                        </h2>
                    </li>
                    {/*<li>
                        <Link to='/pares' className="text-gray-300">
                            Pares
                        </Link>
                    </li>*/}
                </ul>
            </div>
        </nav>
    )
}