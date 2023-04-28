import { FilterLabel, FilterInput } from './Filter.styled';
import PropTypes from 'prop-types';
export const Filter = ({ changeFilter, filter }) => {
  return (
    <div>
      <FilterLabel>
        Find contacts by name
        <FilterInput
          onChange={changeFilter}
          type="text"
          value={filter}
        ></FilterInput>
      </FilterLabel>
    </div>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};
