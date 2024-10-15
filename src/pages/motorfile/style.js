import styled from "styled-components";

export const EngineWrapper =styled.div`
display: flex;
flex-direction: column;
padding: 20px;
`

export const Table =styled.div`
display:flex;
flex-direction: column;
width: 100%;
border-collapse: collapse;
` 
export const HeaderWrapper =styled.div`
display:flex;
justify-content: space-between;
border-collapse: collapse;
`
export const TR= styled.div`
display: flex;
justify-content:center;
width: 100%;
`
export const TableHead=styled.div`
display:flex;
border: 1px solid #ccc;
padding: 10px;
text-align: left;
width: 100px;
`

export const TableData=styled.div`
display:flex;
border: 1px solid #ccc;
padding: 10px;
text-align: center;
width: 100px;

`


export const ModalHead=styled.div`
  display:flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ModalIn=styled.div`
  display:flex;
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 400px;
`


