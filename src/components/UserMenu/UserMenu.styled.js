import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 50px;
  width: 300px;
  height: 40px;
  background-color: transparent;
  padding: 0 5px;
  margin: 10px;
  margin-top: 0;
  border-radius: 5px;
`;

export const Username = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: white;
`;

export const LogOutButton = styled.button`
  background-color: #6aa0d6;
  color: white;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #c42f2f;
  }
`;
