import { usePares } from "../../hooks/usePares"
import { TableroPares } from "../../components/ui/talberoPares"
import { SeleccionarCategoria } from "../../components/ui/selectCategoria"
// import { useState } from "react"

export const Pares = () => {

    //const [categoria, setCategoria] = useState<string>('')

    const {cincoPalabras, traerCincoPalabras} = usePares()

    return (
        <>
            {/* ===== TÍTULO ===== */}
                <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Juego de Pares
                </h2>

                <p className="text-center mb-6">
                    Selecciona cada palabra con su significado
                </p>

            <SeleccionarCategoria setCategoria={traerCincoPalabras}></SeleccionarCategoria>
            <TableroPares cincoPalabras={cincoPalabras}/>
        </>
    )
}