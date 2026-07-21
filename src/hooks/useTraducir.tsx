import { useState } from "react"
import { supabase } from "../supabase/conectio"
import type { ResTraduccion } from "../interfaces/interfaces"

export const useTraducir = () => {
    
    const [palabraEntrada, setPalabraEntrada] = useState<string>('')
    const [respuesta, setRespuesta] = useState<ResTraduccion[]>([])
    const [coincidenciaExacta, setCoincidenciaExacta] = useState<ResTraduccion>()

    const [idiomaEntrada, setIdiomaEntrada] = useState<boolean>(true)


    const traducirPoptiEspanol = async () => {

        try {
            const { data: palabras, error } = await supabase
                .from('palabras')
                .select('*')
                .ilike('palabrapopti', `${palabraEntrada}%`)

            if (error) {
                throw error
            }

            const exacta = palabras.find(
                p => p.palabrapopti.toLowerCase() === palabraEntrada.toLowerCase()
            );

            setCoincidenciaExacta(exacta)

            const resto = palabras.filter(
                p => p.palabrapopti.toLowerCase() !== palabraEntrada.toLowerCase()
            );

            setRespuesta(resto);

        } catch (err) {
            console.error('Error al traducir:', err)
        }
    }

    const traducirEspanolPopti = async () => {

        try{
            const{data: palabras, error} = await supabase
                .from('palabras')
                .select('*')
                .ilike('palabraespanol', `%${palabraEntrada}%`)

            if (error) {
                throw error
            }

            const exacta = palabras.find(
                p => p.palabraespanol.toLowerCase() === palabraEntrada.toLowerCase()
            );

            setCoincidenciaExacta(exacta)

            const resto = palabras.filter(
                p => p.palabraespanol.toLowerCase() !== palabraEntrada.toLowerCase()
            );

            setRespuesta(resto);

        } catch (err) {
            console.log('Error al traducir', err)
        }
    }

    const traducir = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (palabraEntrada === '') {
            alert('Por favor ingrese la palabra a traducir')
            return
        }

        if (idiomaEntrada) {
            traducirPoptiEspanol()
        } 

        if (!idiomaEntrada) {
            traducirEspanolPopti()
        }
    }

    return {
        palabraEntrada,
        setPalabraEntrada,
        respuesta,
        coincidenciaExacta,
        idiomaEntrada,
        setIdiomaEntrada,
        traducir
    }
}