import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import ModalWindow from 'components/ModalWindow';
import ItemInformation from 'components/TaskInformation';

const ItemElement = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
  transition: background-color .2s;

  &&:hover {
    background-color: #f2f2f2;
  }

  &&:active {
    background-color: #f2f2f2;
  }
`;

const Container = styled.div`
    padding: 5px;
`;

function ItemTask(props) {
  const { task, index } = props;
  const [ isOpen, setOpenModal ] = useState(false);

  const closeModalWindow = () => {
    setOpenModal(false)
  }

  const openModal = (e) => {
    setOpenModal(true);
  }

  return (
    <Container>
      <Draggable 
        draggableId={task.id} 
        index={index}
      >
        { (provided) => (
          <ItemElement ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onClick={openModal}
          >
            {task.name}
          </ItemElement>
        )}
      </Draggable>
      {
        isOpen && <ModalWindow closeModal={closeModalWindow} title={`№ ${task.number}`} >
          <ItemInformation task={task}/>
        </ModalWindow>
      }
    </Container>
  )
}

ItemTask.propTypes = {};

export default ItemTask;
