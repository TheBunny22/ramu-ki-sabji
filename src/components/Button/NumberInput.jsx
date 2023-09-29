import styled from "styled-components";

const NumberInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NumberInput = styled.input`
  width: 30px; /* Adjust the width of the input field */
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
  height: 30px;
  /* padding: 4px; */
  font-size: 16px;
`;

const ControlButton = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  outline: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #719a0a;
    color:#ffffff;
    font-weight: bold;
  }
`;

function NumberInputs({ value, onChange }) {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <NumberInputContainer>
      <ControlButton onClick={handleDecrement}>-</ControlButton>
      <NumberInput
        type="text"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
      <ControlButton onClick={handleIncrement}>+</ControlButton>
    </NumberInputContainer>
  );
}
export default NumberInputs;