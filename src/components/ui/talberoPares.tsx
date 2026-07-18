import { useEffect, useState } from "react"
import type { ResTraduccion } from "../../interfaces/interfaces"
import { FcOk } from "react-icons/fc";
import { FcCancel } from "react-icons/fc";

interface Props {
    cincoPalabras: ResTraduccion[]
}

interface PalabrasEncontradas {
    espanol: string,
    popti: string
}

const shuffleArray = (array: any[]): any[] => {
  return [...array].sort(() => Math.random() - 0.5)
}

export const TableroPares = ({cincoPalabras}:Props) => {

    const [selectedPalabraEs, setSelectedPalabraEs] = useState<string>('')
    const [selectedPalabraPo, setSelectedPalabraPo] = useState<string>('')
    const [score, setScore] = useState<number>(0)
    const [errores, setErrores] = useState<number>(0)
    const [espanolDesordenado, setEspanolDesordenado] = useState<string[]>([])
    const [palabrasEncontradas, setPalabrasEncontradas] = useState<PalabrasEncontradas[]>([])

    const comprobar = (popti:string, espanol:string) => {
        const correcto = cincoPalabras.some(
            word =>
                word.palabrapopti === popti &&
                word.palabraespanol === espanol
        )

        if (correcto) {
            setScore(prev => prev+1)
            setPalabrasEncontradas(prev => [...prev, {espanol: espanol, popti: popti},])
        } else {
            setErrores(prev => prev+1)
        }

        console.log(palabrasEncontradas)
        setSelectedPalabraPo('')
        setSelectedPalabraEs('')
    }

    const seleccionarPopti = (palabra:string) => {
        if (selectedPalabraEs) {
            comprobar(palabra, selectedPalabraEs)
        }else{
            setSelectedPalabraPo(palabra)
        }
    }

    const seleccionarEspanol = (palabra:string) => {
        if (selectedPalabraPo) {
            comprobar(selectedPalabraPo, palabra)
        } else {
            setSelectedPalabraEs(palabra)
        }
    }

    useEffect(() => {
        setEspanolDesordenado(
            shuffleArray(
                cincoPalabras.map(p => p.palabraespanol)
            )   
        )
    }, [cincoPalabras])

    return (

        <div className="max-w-3xl mx-auto p-6">

            {errores === 5 ? (
                <div className="flex flex-col items-center justify-center text-center mt-10 p-8 rounded-2xl bg-red-50 border border-red-200 shadow-lg">
                    <h1 className="text-4xl font-extrabold text-red-700 drop-shadow-sm">
                        Perdiste
                    </h1>
                    <p className="mt-3 text-red-600 font-semibold text-lg">
                        ¡No te rindas! Inténtalo otra vez
                    </p>
                </div>
            ) : score === 5 ? (
                <div className="flex flex-col items-center justify-center text-center mt-10 p-8 rounded-2xl bg-green-50 border border-green-200 shadow-lg">
                    <h1 className="text-4xl font-extrabold text-green-700 drop-shadow-sm">
                        ¡Ganaste!
                    </h1>
                    <p className="mt-3 text-green-600 font-semibold text-lg">
                        ¡Excelente! Lo hiciste perfecto
                    </p>
                </div>
            ) :<>
            {/* ===== TABLERO ===== */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* ===== COLUMNA POPTI ===== */}
                <div className="space-y-4">
                <h3 className="text-center font-semibold text-green-700">
                    Popti’
                </h3>

                {cincoPalabras.map((palabra) => (
                    <button
                    key={palabra.id}
                    className={`
                        w-full
                        px-4 py-3
                        rounded-xl
                        bg-green-50
                        border border-green-200
                        text-green-800 font-semibold
                        cursor-pointer
                        hover:bg-green-100
                        active:scale-[0.97]
                        transition-all duration-150

                        ${
                        selectedPalabraPo === palabra.palabrapopti
                            ? 'bg-green-200 text-green-900 border border-green-400 ring-2 ring-green-300 scale-[0.97]'
                            : 'bg-green-50 text-green-800 border border-green-200 hover:bg-green-100 hover:scale-[1.02]'
                        }
                        ${
                            palabrasEncontradas.some(word => word.popti === palabra.palabrapopti)
                            ? 'opacity-50 cursor-not-allowed pointer-events-none'
                            : ''
                        }

                        `}
                    onClick={() => seleccionarPopti(palabra.palabrapopti)}
                    >
                    {palabra.palabrapopti}
                    </button>
                ))}
                </div>
                {/* ===== FIN POPTI ===== */}


                {/* ===== COLUMNA ESPAÑOL DESORDENADO ===== */}
                <div className="space-y-4">
                <h3 className="text-center font-semibold text-blue-700">
                    Español
                </h3>

                {espanolDesordenado.map((palabra, i) => (
                    <button
                    key={i}
                    className={`
                        w-full
                        px-4 py-3
                        rounded-xl
                        font-semibold
                        cursor-pointer
                        transition-all duration-150
                        transform

                        ${
                        selectedPalabraEs === palabra
                            ? 'bg-purple-200 text-purple-900 border border-purple-400 ring-2 ring-purple-300 scale-[0.97]'
                            : 'bg-purple-50 text-purple-800 border border-purple-200 hover:bg-purple-100 hover:scale-[1.02]'
                        }
                        ${
                            palabrasEncontradas.some(
                                word => word.espanol === palabra
                            )
                                ? 'opacity-50 cursor-not-allowed pointer-events-none'
                                : ''
                        }
                    `}
                    onClick={() => seleccionarEspanol(palabra)}
                    >
                    {palabra}
                    </button>
                ))}
                </div>
                {/* ===== FIN ESPAÑOL ===== */}

            </div>
            {/* ===== FIN TABLERO ===== */}
            </>}
            {/* ===== MARCADORES ===== */}
            <div className="flex justify-between mt-8 text-lg font-semibold">
                <span className="flex items-center gap-2">
                <FcOk />
                Aciertos: {score}
                </span>

                <span className="flex items-center gap-2">
                <FcCancel />
                Errores: {errores}
                </span>
            </div>
        </div>
    )  
}
