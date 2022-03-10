import styled from 'styled-components';

export const Container = styled.div`
    width: 492px;
    height: 302px;
    background: radial-gradient(73.06% 104.31% at 14.59% 58.06%, #BFBFBF 0%, #A8A8A8 33.7%, #727272 100%);
    color: #FFF;
    font-weight: 400;
    padding: 46px 56px;
    border-radius: 8px;

    position: absolute;
    left: 5px;
    bottom: 98px;

    box-shadow: 8px 8px 10px #808080;

    display: flex;
    flex-direction: column;
    justify-content: end;

    .card__number {
        font-size: 26px;
        margin-bottom: 38px;
    }
    
    .card__info__date {
        font-size: 22px;
        display: flex;
        justify-content: space-between;
    }

    .card__name {
        text-transform: uppercase;
    }

    .card__date {

    }
`;