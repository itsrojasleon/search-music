import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 5fr 1fr;
  padding: 3px;
  box-sizing: border-box;
`
export const Input = styled.input`
  width: 100%;
  padding: 3px 6px 3px 6px;
  font-size: 18px;
  max-height: 100%;
  border-radius: 4px;
  border: 1px solid #ccc;
`
export const ButtonSubmit = styled.button`
  background: #fff;
  border: 1px solid #ccc;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
  }
`
export const GridCard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 250px));
  grid-gap: 12px;
  justify-content: center;
`
export const CardRow = styled.div`
  filter: ${props => props.blur === 'previewUrl' ?
'blur(3px)': null};
`
export const Figure = styled.figure`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ImageContainer = styled.div`
  position: relative;
`
export const Icon = styled.div`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background: black;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
`
export const IconContainer = styled.div`
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`
