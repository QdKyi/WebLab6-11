import {FilterContainer} from '../styles/filter-tile-styles'
import SelectContainer from '../components/select'
import SearchBox from '../components/search-box'

function FilterTile({ type, condition, search }) {
    return(
        <FilterContainer>
            <SelectContainer name='Type' options={[ 'IceAxe', 'Backpack']} state={type} />
            <SelectContainer name='Condition' options={[ 'Used', 'New']}
                    state={condition} />
            <SearchBox state={search} />
        </FilterContainer>
    );
}

export default FilterTile;