import PropTypes from 'prop-types';
import { List, ListContent, Content, Button } from './ContactList.styled';

export const ContactList = ({ options, onDelete }) => {
  return (
    <List>
      {options.map(({ id, name, number }) => (
        <ListContent key={id}>
          <div>
            <Content>{name}:</Content>
            <Content> {number}</Content>
          </div>
          <Button onClick={() => onDelete(id)}>Delete</Button>
        </ListContent>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
