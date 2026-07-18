import type { ResTraduccion } from "../../interfaces/interfaces"

interface Props {
    resultado: ResTraduccion[]
    idiomaEntrada: boolean
}

export const CardsResultado = ({resultado, idiomaEntrada}:Props) => {
    return(
        <div className="mt-6 space-y-4">
        {resultado.length === 0 ? (
            <p className="text-center text-gray-400 text-sm">
            No hay resultados, revisa la ortografía de la palabra a buscar, no omitas tíldes 
            o cualquier otro signo que forme parte de la palabra.
            </p>
        ) : (
            resultado.map(word => (
            <div
                key={word.id}
                className="
                bg-white
                border border-gray-200
                rounded-xl
                px-5 py-4
                shadow-sm
                hover:shadow-md
                transition
                "
            >
                {/* Palabra Popti */}
                <h2 className="text-xl font-bold text-[#212121]">
                {idiomaEntrada ? word.palabrapopti : word.palabraespanol}
                </h2>

                {/* Divider sutil */}
                <div className="w-12 h-0.5 bg-[#FBC02D] my-2 rounded-full" />

                {/* Palabra Español */}
                <div className="text-lg text-gray-700">
                {!idiomaEntrada ? word.palabrapopti : word.palabraespanol}
                <p className="text-sm text-gray-700 italic">{word.categoria}</p>
                </div>
            </div>
            ))
        )}
        </div>
    )
}