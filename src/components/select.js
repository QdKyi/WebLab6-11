import {SelectForm, Select} from '../styles/filter-tile-styles'

function SelectContainer() {
    return (
        <SelectForm>
            
            <Select name='by type' >
                <option value='any'>Any type</option>
                <option value='iceAxe'>Ice axe</option>
                <option value='weight'>Another type</option>
            </Select>
            <Select name='by price'>
                <option value='any'>Any price</option>
                <option value='price'>By lowest price</option>
                <option value='weight'>By biggest price</option>
            </Select>
            <Select name='by condition'>
                <option value='any'>Any condition</option>
                <option value='used'>Used</option>
                <option value='new'>New</option>
            </Select>
        </SelectForm>
    );
}

export default SelectContainer;