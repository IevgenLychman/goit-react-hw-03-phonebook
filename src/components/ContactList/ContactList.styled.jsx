import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
`;

export const ListContent = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: circle;
  margin-bottom: 10px;
`;

export const Content = styled.span`
  :not(:first-of-type) {
    margin-right: 10px;
  }
`;

export const Button = styled.button``;
