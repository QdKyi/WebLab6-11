import {SelectForm, Select, SelectLabel} from '../styles/filter-tile-styles'

function SelectContainer({ name, options, state: [value, setValue], ...props }) {
    return (
        <SelectForm>
             <SelectLabel htmlFor='filter'>{name}</SelectLabel>
            <Select name='filter' value={value} onChange={e => setValue(e.target.value)} {...props}>
                <option value='None'>No Filter</option>
                {options.map((thisOption) =>
                    <option key={thisOption} value={thisOption}>{thisOption}</option>
                )}
            </Select>
        </SelectForm>
    );
}

export default SelectContainer;