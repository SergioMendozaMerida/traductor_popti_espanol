import { useEffect, useState } from "react"
import { supabase } from "../supabase/conectio"

const numeroRandom = (max: number): number =>
  Math.floor(Math.random() * max) + 1

export const useCuriosidades = () => {
  const [curiosidad, setCuriosidad] = useState<string>('')

  const obtenerCuriosidad = async () => {
    try {
      const { count, error } = await supabase
        .from('curiosidades_popti')
        .select('*', { count: 'exact', head: true })

      if (error) throw error
      if (!count) return

      const nr = numeroRandom(count)

      const { data, error: errorData } = await supabase
        .from('curiosidades_popti')
        .select('descripcion')
        .eq('id', nr)
        .single()

      if (errorData) throw errorData

      setCuriosidad(data.descripcion)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    obtenerCuriosidad()
  }, [])

  return {
    curiosidad
  }
}
