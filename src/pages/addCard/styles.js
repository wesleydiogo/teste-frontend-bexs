import styled from 'styled-components';

export const Container = styled.main`
    display: flex;
    flex-direction: row;
`;
export const Sidebar = styled.aside`
    min-width: 325px;
    height: 100vh;
    background-color: #4BDE95;
`;
export const Content = styled.article`
    background-color: #fff;
    width: 100%;
    height: 100vh;
    padding: 65px 5px 65px 203px;

    display: flex;
    justify-content: end;
    align-items: center;
`;

export const Form = styled.form`
    // min-width: 400px;
    width: 80%;

    position: relative;
    right: 0;

    .card__expireData__CVV {
        display: flex;
        gap: 40px;
    }
`;