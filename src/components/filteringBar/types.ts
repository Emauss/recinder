import type { Dispatch } from 'react'
import type { RecipesFilters } from '../../api'

export type FilteringTabProps = {
   filters: RecipesFilters
   setFilters: Dispatch<React.SetStateAction<RecipesFilters>>
}
