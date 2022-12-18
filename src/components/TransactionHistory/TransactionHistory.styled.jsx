import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
    width: 50%;
    margin: 50px auto 50px;
    box-shadow: var(--main-shadow);
    font-family: var(--main-font-family);
    font-size: 18px;
    text-align: center;
    line-height: 2;
    text-transform: capitalize;

    tbody tr:nth-of-type(odd) {
        background-color: #ECF1F4;
    }

    tbody tr:nth-of-type(even) {
        background-color: #FFFFFF;
    }

    thead {
        background-color: #00BCD5;
    }
`;