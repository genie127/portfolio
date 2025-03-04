import styled from "styled-components";
const pointColor = '#467A00'

export const Wrap = styled.div`
    width: 1470px; padding: 0 15px; margin: 0 auto; max-width:100%; position: relative;
`
export const FilterLi = styled.li`
background: ${pointColor}; color:#fff; font-size:14px; padding: 5px 10px; border-radius:3px; margin: 5px 2.5px 0; @media(max-width:480px){font-size:3.2vw; padding: 1.8vw 1.8vw 1.2vw;}`

export const Button = styled.div`border:1px solid ${pointColor}; padding: ${(props)=>props.$p ||'20px'}; color:${pointColor}; font-family: 'Arimo', sans-serif; font-style: italic; display: block; width: ${(props)=>props.$w || '300px'}; margin: ${(props)=>props.$m || '50px auto 0'}; text-align: center; font-size:${(props)=>props.$fz || '16px'}; transition:.3s; cursor:pointer; max-width:100%;
     &:hover{background: ${pointColor}; color:#fff}
     @media(max-width:991px){padding: ${(props)=>props.$mp ||'10px'}; margin:${(props)=>props.$mm || '30px auto 0'};}
`