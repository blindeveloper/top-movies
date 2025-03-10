import styled from 'styled-components';

export const Poster = styled.img`
  width: 100%;
`;
export const NoPoster = styled.span`
  font-size: 35px;
`;

export const MovieItemWrapper = styled.div`
  padding: 10px;
  border-radius: 6px;
  min-height: 50px;
  &:hover {
    background-color: #f5fafe;
    button {
      visibility: visible;
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
  visibility: hidden;
  background-color: #05113d;
  border-radius: 6px;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  width: 100%;
`;

export const UpVote = styled.button`
  background-color: #fc5215;
  border-radius: 6px;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
`;
export const ActionWrapper = styled.div`
  text-align: right;
`;
