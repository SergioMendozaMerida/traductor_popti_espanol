
interface Props {
    setCategoria: (categoria: string) => Promise<void>
} 

const categorias = [
    'Verbo', 'Adjetivo', 'Sustantivo'
]

export const SeleccionarCategoria = ({setCategoria}:Props ) =>{

    return(
        <div className="flex flex-wrap gap-3 justify-center mb-6">
            {categorias.map((categoria, i) => (
                <button
                key={i}
                className="
                    px-4 py-2
                    rounded-full
                    bg-purple-50
                    border border-purple-200
                    text-purple-800 font-semibold text-sm
                    hover:bg-purple-100
                    active:scale-95
                    transition
                    shadow-sm
                "
                onClick={() => setCategoria(categoria)}
                >
                {categoria}
                </button>
            ))}
        </div>
    )
}