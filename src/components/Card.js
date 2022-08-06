import styled from 'styled-components';

export default function Card({ children, type, large }) {
  
  return (
    <>
      { large ? (
        <Large type={type}>
        {children}
        </Large>
    ) : (<Wrapper type={type}>
          {children}
        </Wrapper>)}
    </>

  );
}

const Wrapper = styled.div`
  background-color: crimson;
  border-radius: 4px;
  width: 200px;
  height: 300px;
  margin: 10px;

  &:hover {
    filter: brightness(120%);
  }

  img {
    width: 80%;
    height: 80%;
  }

  span {
    color: white;
    font-size: 18px;
    font-weight: bold;
  }

  button {
    border: none;
    border-radius: 2px;
    width: 100px;
    height: 30px;
    font-size: 14px;
    color: white;
    background-color: crimson;
    cursor: pointer;
  }

  ${props => {
    if (props.type === 'grass') {
      return `
        background-color: lightgreen;
      `
    }
    if (props.type === 'fire') {
      return `
        background-color: lightcoral;
      `
    }

    if (props.type === 'water') {
      return `
        background-color: lightskyblue;
      `
    }
    if (props.type === 'bug') {
      return `
        background-color: lightgray;
        span {
         color: black;
        }
      `
    }
  }}

`

const Large = styled(Wrapper)`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
  width: 120px;
  height: auto;
}

div {
  display: flex;
  flex-direction: column;
}


button {
  margin: 2px;
  width: 140px;
  height: 40px;
  font-size: 18px;
  background-color:mediumslateblue;
}

button:hover {
  color: black;
}
`;


