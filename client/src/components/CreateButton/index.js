import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.div`
  border-radius: 5px;
  user-select: none;
  padding: 10px 20px;
  background: radial-gradient(farthest-side ellipse at top left, white, #aaaaaa);
  box-shadow: 5px 10px 20px rgba(0,0,0,0.3), -5px -10px 20px rgba(255,255,255,0.5);
`;

function CreateButton(props) {
  const { handleClick } = props;
  return (
    <Button onClick={handleClick}>{props.children}</Button>
  )
}

CreateButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
}

export default CreateButton
