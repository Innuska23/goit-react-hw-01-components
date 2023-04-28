import styled from '@emotion/styled';

export const  TransactionHistoryTable = styled.table`
width: 870px;
border-radius: 10px;
margin-top: 50px;
border: 1px solid gray;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const TableTr = styled.tr`
height: 50px;
font-size: 12px;
&:nth-of-type(even) {
background-color: #ecf1f4;
}
`;

export const TableTh = styled.th`
text-transform: uppercase;
background-color: #01bcd5;
color: white;
border: 1px solid #e9e9e9;
`;

export const TableThead = styled.thead`
height: 40px;
text-align: center;
`;

export const TableBody = styled.tbody``;

export const TableBodyList = styled.tr`
background-color: white;
&:nth-of-type(even) {
background-color: #ecf1f4;
}
`

export const TableBodyItem = styled.td`
height: 40px;
text-align: center;
color: #6e6f71;
border: 1px solid #e9e9e9;
`;