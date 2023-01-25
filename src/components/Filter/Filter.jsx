import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  const inputFilter = nanoid();
  return (
    <div>
      <Label htmlFor={inputFilter}> Find contacts by Name</Label>
      <Input
        id={inputFilter}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
