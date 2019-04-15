import React from 'react';
import styled from 'styled-components';

export default function modal() {
  return (
    <ModalContainer onclick={() => alert("Modal Clicked")}>
      Modal
    </ModalContainer>
  )
}

const ModalContainer = styled.div`
  position: fixed;
  top: 8%;
  left: 0;
  right: 0;
  bottom 0;
  background :rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: blue; 
  }
`;
