import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`


  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&family=Roboto+Condensed:wght@400;700&family=Ubuntu:wght@300;400;500;700&display=swap');

body{
    /* background-color: grey; */
    /* overflow-y: hidden; */
    overflow-x: hidden;

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.logo img{
    width: 8rem;
    height: auto;
}

.nav{
width: 80%;

li{
    margin-right: 1rem;
}
}

.flex{
    display: flex;
}
.a-center{
    align-items: center;
}
.j-center{
    justify-content: center;
}
.p-abs{
    position: absolute;
}
li{
    list-style: none;
}

.svg-cyan{
    /* border: 1px solid #000; */
    height: 100vh;
    position: absolute;
}

.svg-orange{
    width:100vw;
    height: 100Vh;
    position: absolute;
}

.heroSection{
margin-top:.1px;
width: 100vw;
height:100vh;
}

.left-hero{
    position: absolute;
    width: 30rem;
    height: 100vh;
    /* background-color: red; */
}

.l-heading{
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    font-size: 3rem;
}
.right-hero{
    position: absolute;
    right: 2rem;
    width: 18rem;
    height: 80vh;
    background-color: green;
}
.categories-containt{
    margin: auto;
    width: 90vw;
}
.categories-cards{
    width: 90vw;
    height: 14rem;
    /* background-color:yellow; */
    display: flex;
    /* margin: auto; */
}

.categories-heading{
    margin-bottom: 1.5rem;
}

.categories-card{
width: 10rem;
height: 14rem;
background-color: grey;
border-radius: 2rem;
margin-right: 1.5rem;
}
`