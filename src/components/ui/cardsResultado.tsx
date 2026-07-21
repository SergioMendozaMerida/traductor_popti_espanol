import type { ResTraduccion } from "../../interfaces/interfaces"

interface Props {
    coincidenciaExacta?: ResTraduccion
    resultado: ResTraduccion[]
    idiomaEntrada: boolean
}

export const CardsResultado = ({resultado, idiomaEntrada, coincidenciaExacta}:Props) => {
    
    return (
        <div className="mt-6 space-y-4">
            {resultado.length === 0 && coincidenciaExacta === undefined ? (
            <p className="text-center text-gray-400 text-sm">
                No hay resultados, revisa la ortografía de la palabra a buscar, no omitas
                tildes o cualquier otro signo que forme parte de la palabra.
            </p>
            ) : (
            <>
                {/* Resultado exacto */}
                <h3 className="text-sm font-semibold text-gray-600">
                Resultado
                </h3>

                {coincidenciaExacta !== undefined ? (
                <div
                    key={coincidenciaExacta.id}
                    className="
                    bg-white
                    border-2 border-[#FBC02D]
                    rounded-xl
                    px-5 py-4
                    shadow-md
                    "
                >
                    <h2 className="text-xl font-bold text-[#212121]">
                    {idiomaEntrada
                        ? coincidenciaExacta.palabrapopti
                        : coincidenciaExacta.palabraespanol}
                    </h2>

                    <div className="w-12 h-0.5 bg-[#FBC02D] my-2 rounded-full" />

                    <div className="text-lg text-gray-700">
                    {!idiomaEntrada
                        ? coincidenciaExacta.palabrapopti
                        : coincidenciaExacta.palabraespanol}

                    <p className="text-sm text-gray-700 italic">
                        {coincidenciaExacta.categoria}
                    </p>
                    </div>
                </div>
                ) : (
                <p className="text-gray-500">
                    No hay coincidencia exacta, puede revisar los términos relacionados.
                </p>
                )}

                {/* Términos relacionados */}
                {resultado.length > 0 && (
                <>
                    <h3 className="text-sm font-semibold text-gray-600 mt-6">
                    Términos relacionados
                    </h3>

                    {resultado.map((word) => (
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
                        <h2 className="text-xl font-bold text-[#212121]">
                        {idiomaEntrada
                            ? word.palabrapopti
                            : word.palabraespanol}
                        </h2>

                        <div className="w-12 h-0.5 bg-[#FBC02D] my-2 rounded-full" />

                        <div className="text-lg text-gray-700">
                        {!idiomaEntrada
                            ? word.palabrapopti
                            : word.palabraespanol}

                        <p className="text-sm text-gray-700 italic">
                            {word.categoria}
                        </p>
                        </div>
                    </div>
                    ))}
                </>
                )}
            </>
            )}
        </div>
    );
}