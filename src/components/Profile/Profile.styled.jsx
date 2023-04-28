import styled from '@emotion/styled';

export const CardUser = styled.div`
    width: 400px;
    padding-top: 15px;
    background-color: white;
    border-radius: 5px;
    margin-bottom: 50px;
    border: 1px solid gray;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const UserName = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const Avatar = styled.img`
    display: flex;
    margin: 0 auto;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #f3f6f9;
`;

export const Name = styled.p`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 26px;
    line-height: 1.27;
`;

export const Info = styled.p`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    color: #8794a2;
`;

export const Stats = styled.ul`
    list-style: none;
    display: flex;
    background-color: #f3f6f9;
    width: 100%;
    height: 100px;
`;

export const StatsItem = styled.li`
    width: 120px;
    border: 1px solid #e8ecf2;
    padding-top: 30px;
`;

export const StatsInformation = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const StatsInfoQuantity = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-weight: 700;
`;