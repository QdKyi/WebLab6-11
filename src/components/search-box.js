import { Input, SearchButton, SearchContainer} from '../styles/filter-tile-styles'
import { useState } from 'react';

function SearchBox({ state: [searchText, setSearchText] }) {

    const [text, setText] = useState('');

    return (
        <SearchContainer>
            <Input value={text} placeholder="Search..." onChange={e => (setText(e.target.value))} />
            <SearchButton onClick={e => (setSearchText(text))}>Search</SearchButton>
        </SearchContainer>
    );
}

export default SearchBox;