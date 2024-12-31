import type { Dispatch } from 'react'
import type { RecipeItem } from '../../types'
import type { RecipesFilters } from '../../api'

export type ListOfRecipesProps = {
   data: RecipeItem[]
   setData: Dispatch<React.SetStateAction<RecipeItem[]>>
   filters: RecipesFilters
}
