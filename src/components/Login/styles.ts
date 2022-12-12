import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #0ccaba;
    flex-direction: column;
    height: 100vh;
    align-items: center;
    justify-content: center;

`

export const Main = styled.div`
    width: 60%;
    border: 1px solid white;
    border-radius: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5em;
    gap: 4em;
    h1{
        color: white;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 4em;
        width: 80%;
        align-items: center;
    }
    input{
        padding: 1em;
        border-radius: 1em;
        outline: none;
        border: none;
        width: 100%;
    }
    svg{
        color: white;
        font-size: 150px;
        text: center;
    }
    button{
        padding: 1em;
        border-radius: 1em;
        font-weight: 700;
        background-color: #0ccaba;
        color: white;
        border: 1px solid white;
    }
    button:hover{
        border:none;
        background-color: white;
        color: #0ccaba;
    }
`