import { useEffect, useState } from "react"
import { supabase } from "../supabase/conectio"
import type { ResTraduccion } from "../interfaces/interfaces"

export const usePares = () => {

    const [cincoPalabras, setCincoPalabras] = useState<ResTraduccion[]>([])

    const traerCincoPalabras = async(categoria:string = 'VERBO') => {
        try{
            const { data, error } = await supabase.rpc('get_random_palabras', {
                limit_count: 5,
                selected_categoria: categoria
            })

            if(error){
                throw error
            }

            setCincoPalabras(data)

        }catch (err){
            console.error('gran falla', err)
        }
    }

    useEffect(() => {
        traerCincoPalabras()
    },[])

    return {
        traerCincoPalabras,
        cincoPalabras
    }


}