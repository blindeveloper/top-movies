import styled from 'styled-components';

export const Poster = styled.img`
  width: 100%;
`;

export const MovieItemWrapper = styled.div`
  padding: 5px 10px;
  border-radius: 6px;
  margin-bottom: 20px;
  &:hover {
    background-color: #f5fafe;
    button {
      display: block;
    }
  }
`;
export const MovieItemTitle = styled.span`
  font-weight: bold;
`;
export const MovieItemSubtitle = styled.span`
  color: gray;
`;
export const AddToList = styled.button`
  display: none;
  background-color: #05113d;
  border-radius: 6px;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  width: 100%;
`;
