import {FilterContainer} from '../styles/filter-tile-styles'
import SelectContainer from '../components/select'
import SearchBox from '../components/search-box'

function FilterTile() {
    return(
        <FilterContainer>
            <SelectContainer />
            <SearchBox />
        </FilterContainer>
    );
}

export default FilterTile;