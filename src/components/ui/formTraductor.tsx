import type { Dispatch, SetStateAction } from "react";
import { AiOutlineRetweet } from "react-icons/ai";
import { RiTranslate2 } from "react-icons/ri";

interface Props {
    idiomaEntrada: boolean,
    palabraEntrada: string,
    traducir: (e: React.FormEvent<HTMLFormElement>) => void,
    setPalabraEntrada: Dispatch<SetStateAction<string>>
    setIdiomaEntrada: Dispatch<SetStateAction<boolean>>
    datoCurioso: string
}

export const FormTraductor = ({
    idiomaEntrada, 
    palabraEntrada, 
    traducir, 
    setPalabraEntrada, 
    setIdiomaEntrada,
    datoCurioso
}:Props) => {
    return (
        <form
            onSubmit={traducir}
            className="
            w-full lg:w-1/2
            bg-white rounded-2xl shadow-xl
            p-8 flex flex-col gap-6
            h-auto lg:h-[70vh]
            "
        >
            {/* POPTI */}
            <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-[#212121]">
                Palabra en {idiomaEntrada ? 'popti' : 'español'}
            </label>
            <input
                type="text"
                value={palabraEntrada}
                placeholder="Escribe la palabra aquí"
                onChange={(e) => setPalabraEntrada(e.target.value)}
                className="
                border border-gray-300 rounded-lg
                px-4 py-2 text-sm
                focus:outline-none focus:ring-2
                focus:ring-[#FBC02D]
                "
            />
            </div>

            {/* BOTÓN */}
            <button
            type="submit"
            className="
                flex items-center justify-center gap-2
                bg-gray-100 px-4 py-2 rounded-lg
                hover:bg-gray-200 transition
            "
            >
            <RiTranslate2 />
            Traducir
            
            </button>
            <button
                type="button"
                onClick={() => setIdiomaEntrada(!idiomaEntrada)}
                className="
                    flex items-center justify-center gap-2
                    bg-gray-100 px-4 py-2 rounded-lg
                    hover:bg-gray-200 transition
                "
                >
                <AiOutlineRetweet className="text-lg" />
                <span>Cambiar</span> 
            </button>
            <div className="
                mt-4
                rounded-xl
                border-l-4 border-[#FBC02D]
                bg-gray-50
                p-4
                ">
                <span className="
                    block
                    mb-2
                    text-xs
                    font-semibold
                    uppercase
                    tracking-wide
                    text-gray-500
                ">
                    Dato curioso
                </span>

                <p className="
                    text-sm
                    text-gray-600
                    italic
                    leading-relaxed
                ">
                    {datoCurioso || 'Cargando dato curioso...'}
                </p>
            </div>
        </form>
    )
}