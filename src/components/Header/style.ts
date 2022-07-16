import styled from 'styled-components'

import backHeaderImg from './../../images/pattern-bg.png'

export const Container = styled.header`

    background-image:url(${backHeaderImg});
    background-size: cover;
    background-repeat: no-repeat;
    height: 250px;
    position: relative;
`

export const Content = styled.div`
    width: 80%;
    margin: auto;
    padding: 20px;
    position: relative;
    z-index: 1000;
   

    h1 {
        color: #fff;
        font-weight: 400;
        text-align: center;
        margin-bottom: 30px;
    }

    .input-button {
        display: flex;
        align-items: flex-end;
        justify-content: center;
        margin-bottom: 30px;
    }

    input {
        padding: 15px;
        max-width: 500px;
        width: 100%;
        border: none;
        border-radius: 10px 0 0 10px;
        color: var(--Dark-Gray);
        font-weight: 600;
        font-size: 16px;
        outline: none;

        &::placeholder {
            color: var(--Dark-Gray);
            font-weight: 600;
            font-size: 16px;
        }

    }

    button {
        padding: 16px 20px;
        border: none;
        outline: none;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        position: relative;
        cursor: pointer;
        background-color: var(--Very-Dark-Gray);
        transition: background-color 0.3s;

        &:hover {
            background-color: var(--Dark-Gray);
        }
    }

    .results-info{
        width: 100%;
        background-color: #fff;
        border-radius: 10px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 30px 20px;
        border: 1px solid hsla(0, 0%, 59%, 0.2);
        box-shadow: 0 0 10px hsla(0, 0%, 59%, 0.5);
        div:not(div:last-child){
            border-right: 1px solid hsla(0, 0%, 59%, 0.2);
        }

        div {
            padding: 0 20px;
            flex: 1;

            span {
                color: var(--Dark-Gray);
                font-weight: 700;
            }

            p {
                color: var(--Very-Dark-Gray);
                font-weight: 700;
                font-size: 30px;
                margin-top: 20px;
            }
        }
    }

    
    @media screen and (max-width: 900px) {
            .results-info {
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                padding: 10px 20px;

                div {
                    border: none !important;
                    text-align: center;
                    margin: 10px auto;
                    

                    span {
                        font-size: 12px;
                    }
            
                    p {
                        margin: auto;
                        font-size: 25px;
                    }
                }
            }
        }

`