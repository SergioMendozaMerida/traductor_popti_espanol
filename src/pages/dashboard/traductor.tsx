import { CardsResultado } from "../../components/ui/cardsResultado";
import { FormTraductor } from "../../components/ui/formTraductor";
import { useCuriosidades } from "../../hooks/useCuriosidades";
import { useTraducir } from "../../hooks/useTraducir";

export const Traductor = () => {

    const {
        palabraEntrada,
        setPalabraEntrada,
        respuesta,
        idiomaEntrada,
        setIdiomaEntrada,
        traducir

    } = useTraducir() 

    const { curiosidad} = useCuriosidades()

    return(
        <>
            <div className="min-h-screen flex justify-center px-6 py-10 bg-gray-100">
                <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 items-stretch">

                {/* FORM - IZQUIERDA */}
                <FormTraductor
                    idiomaEntrada={idiomaEntrada}
                    palabraEntrada={palabraEntrada}
                    traducir={traducir}
                    setPalabraEntrada={setPalabraEntrada}
                    setIdiomaEntrada={setIdiomaEntrada}
                    datoCurioso={curiosidad || 'Aprende sobre el idioma...'}
                />

                {/* RESULTADOS - DERECHA */}
                    <div className="w-full lg:w-1/2">
                        <div
                        className="
                            bg-white rounded-2xl shadow-xl p-8
                            h-auto lg:h-[70vh]
                            overflow-y-auto
                        "
                        >
                        <label className="text-sm font-semibold text-[#D32F2F]">
                            Palabra en {!idiomaEntrada ? 'popti' : 'español'}
                        </label>

                        <CardsResultado resultado={respuesta} idiomaEntrada={idiomaEntrada}/>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}