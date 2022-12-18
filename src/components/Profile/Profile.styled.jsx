import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 25%;
    height: 100%;
    border-radius: 5px; 
    margin: 50px auto 0;
    background-color: var(--white-color);
    box-shadow: var(--main-shadow);
    font-family: var(--main-font-family);
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
`;

export const Avatar = styled.img`
    width: 150px;
    padding: 20px 10px 0px 10px;
    border-radius: 50%;
    margin: 30px auto;
    border: var(--main-border);
`;

export const Name = styled.p`
    font-size: 32px;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 0;
    color: #122236;
`;

export const Tag = styled.p`
    font-size: 24px;
    color: #94A0AC;
    margin-top: 20px;
    margin-bottom: 0;
`;

export const Location = styled.p`
    font-size: 24px;
    color: #94A0AC;
    margin-top: 20px;
    margin-bottom: 0;
`;

export const Stats = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: var(--second-border);
    background-color: #e0e4e6;
    padding: 25px 0 25px;

    :not(:last-child) {
        border-right: var(--second-border);
    }
`;

export const StatsLabel = styled.span`
    font-size: 18px;
    color: #94A0AC;
`;

export const StatsQuantity = styled.span`
    font-size: 18px;
    color: #2A3C51;
    font-weight: 600;
`;