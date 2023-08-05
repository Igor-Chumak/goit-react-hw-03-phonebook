import PropTypes from 'prop-types';
import { Clear } from 'components';
import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ handleChangeInputFilter }) => {
  return (
    <FilterLabel
      onChange={handleChangeInputFilter}
      onClick={handleChangeInputFilter}
    >
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        maxLength="22"
        placeholder=""
        id="filter"
        autoFocus
      />
      <Clear type="button">Clear</Clear>
    </FilterLabel>
  );
};

Filter.propTypes = {
  handleChangeInputFilter: PropTypes.func.isRequired,
};
