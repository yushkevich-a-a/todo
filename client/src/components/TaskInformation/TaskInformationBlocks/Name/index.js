import React, { useState }  from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import Input from 'components/elements/Input';
import cloneDeep from 'lodash/cloneDeep';
import { useDispatch } from 'react-redux';

const Container = styled.div`
  margin-bottom: 10px;
`;

function Name(props) {
  const { task } = props;
  const dispatch = useDispatch();
  const [ name, setName ] = useState(task.name);

  const handleOnBlur = () => {
    if ( task.name === name ) {
      return;
    }
    dispatch({
      type: "CHANGE_NAME_SAGA", 
      payload: {id: task.id,  id_project: task.id_project,  name: name }
    })
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <Container>
      <Input type='main' value={name} name='name' id='name' handleChange={handleChange} handleOnBlur={handleOnBlur} placeholder='Введите названи'/>
    </Container>
  )
}

Name.propTypes = {}

export default Name
