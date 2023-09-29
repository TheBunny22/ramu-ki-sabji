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
    color: #ffffff;
    font-weight: bold;
  }
`;

const OutofStockBox = styled.div`
  height: 30px;
  width: 96px;
  background: #f54e00;
  border-radius: 5px;
  font-size: small;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #ffffff;
`;

function NumberInputs({ value , onChange, inStock }) {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  return (
    <>
      {inStock ? (
        <NumberInputContainer>
          <ControlButton onClick={handleDecrement}>-</ControlButton>
          <NumberInput
            type="text"
            value={value}
            onChange={(e) => onChange(parseInt(e.target.value))}
          />
          <ControlButton onClick={handleIncrement}>+</ControlButton>
        </NumberInputContainer>
      ) : (
        <OutofStockBox> Out of Stock</OutofStockBox>
      )}
    </>
  );
}
export default NumberInputs;
