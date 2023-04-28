import styled from '@emotion/styled';

export const  Section = styled.section`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  text-align: center;
  background-color: white;
`;

export const SectionTitle = styled.h2`
display: flex;
justify-content: center;
align-items: center;
text-transform: uppercase;
font-size:20px;
padding:20px;
`;

export const StatList = styled.ul`
display: flex;
list-style: none;
text-decoration: none`;



export const StatListItem = styled.li`
  display: flex;
  width: 80px;
  flex-direction: column;`;

export const ItemLabel = styled.span`
 padding-top: 10px;
  padding-bottom: 10px;`;

export const ItemPercentage = styled.span`
padding-bottom:10px`;