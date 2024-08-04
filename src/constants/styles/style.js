import styled from "styled-components";

export const Button =styled.div`
display:flex;
width:100px;`

export const Container=styled.div`
display:flex;
justify-content: center;
align-items: center;
padding: 10px;

`
export const Line =styled.div`
display:flex;
border-bottom:2px solid rgba(55, 55, 55, 0.30);
margin:10px 0px;`

export const Wrapper=styled.div`
display:flex;
flex-direction: column;
border: 1px solid rgba(55, 55, 55, 0.30);;
border-radius: 10px;
width:900px;
height:650px;
padding: 10px;`

export const Personal=styled.div`
display:flex;
flex-direction:column;
p{
color: #000;
font-family: sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-left: 10px;
}
h4{
color: var(--text, #373737);
font-family: Montserrat;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-left: 10px;
margin: -3px 0px;
}
`

export const Middle=styled.div`
display:flex;`

export const MiddleLeft=styled.div`
display:flex;
flex:1;
justify-content:center;
width:130px;
height:130px;
margin-top:20px;`

export const Namewrapper=styled.div`
display:flex;
flex-direction: column;
gap: 15px;
p{
color: #000;
font-family: sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: -3px;
}
`

export const Inputwrapper=styled.div`
display:flex;
width:100%;
margin-top: 10px;
input{
    width: 100%;
    height: 25px;
    border-radius: 5px;
    border-color:rgba(55, 55, 55, 0.30); 
}`

export const MiddleRight=styled.div`
display:flex;
flex-direction: column;
flex:4;
`

export const Rolewrapper=styled.div`
display: flex;
gap: 20px;
`

export const Role=styled.div`
display: flex;
flex: 1;
flex-direction: column;
width: 100%;
p{
color: #000;
font-family: sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: -5px;
}
`
export const Emailwrapper=styled.div`
display: flex;
flex: 2;
flex-direction: column;
p{
color: #000;
font-family: sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: -5px;
}
`

export const Country=styled.div`
display:flex;
flex-direction:column;
p{
color: #000;
font-family: sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: -5px;
}
`

export const Timezone=styled.div`
display:flex;
flex-direction:column;
width: 100%;
p{
color: #000;
font-family: sans-serif;
font-size: 25px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-bottom: -5px;
}
`

export const Cancelwrapper=styled.div`
display:flex;
justify-content:end;
button{
    display: flex;
    width: 150px;
    height: 30px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border-radius: 5px;
    border-color:rgba(55, 55, 55, 0.30);;
    margin:20px;
    &:hover{
        background:lightblue ;
        color: white;
        transform: scale(1.05);
        transition: 0.5s (ease);
        cursor: pointer;
        
    }
}`

export const ButtonModal=styled.div`
display:flex;
`
