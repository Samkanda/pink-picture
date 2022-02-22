import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}
.form-label {
    color: pink
}

body {
    background: #f5f2eb;
    font-family: 'Inter', sans-serif;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #D96ED4;
    background: whitesmoke;
    color: black;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #D96ED4;
        color:white;
    }
}

    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color:black;
    }
    h4{
        font-weight: bold;
    }
    span{
        font-weight: bold;
        color:#D96ED4
    }
    a{
        font-size:1.1rem;
    }
    p{
        padding: 3rem 0rem;
        color: black;
        font-size: 1.4rem;
        line-height: 150%;
    }

`


export default GlobalStyle;