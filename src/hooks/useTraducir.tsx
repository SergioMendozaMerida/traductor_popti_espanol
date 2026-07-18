import { useEffect, useEffectEvent, useState } from "react"
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

            setRespuesta(palabras)

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

            setRespuesta(palabras)
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

    useEffect( () => {
        respuesta.forEach(palabra => {
                if(idiomaEntrada)
                    if(palabraEntrada === palabra.palabraespanol)
                        setCoincidenciaExacta(palabra)
                        console.log(palabra)
                if(!idiomaEntrada)
                    if(palabraEntrada === palabra.palabrapopti)
                        setCoincidenciaExacta(palabra)
                        console.log(palabra)
            });
    }, [respuesta] )


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