import styled from '@emotion/styled';


export const Section = styled.section`
    font-family: var(--main-font-family);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    height: 100%;
    border-radius: 3px;
    margin: 50px auto 0;
    background-color: var(--white-color);
    box-shadow: var(--main-shadow);
`;

export const Title = styled.h2`
    font-family: var(--main-font-family);
`;

export const StatList = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
`;

export const StatListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
`;

export const Label = styled.span`
    color: var(--white-color);
`;

export const Percentage = styled.span`
    color: var(--white-color);
    font-size: 24px;
    font-weight: 500;
`;

