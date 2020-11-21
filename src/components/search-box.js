import { Input, SearchButton, SearchContainer} from '../styles/filter-tile-styles'
import { useState } from 'react';

function SearchBox() {

    const [text, setText] = useState('');

    return (
        <SearchContainer>
            <Input value={text} placeholder="Search..." onChange={e => (setText(e.target.value))} />
            <SearchButton onClick={e => (e.preventDefault())}>Search</SearchButton>
        </SearchContainer>
    );
}

export default SearchBox;