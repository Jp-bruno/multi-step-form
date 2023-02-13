import styled from 'styled-components';
import FormsBox from './Forms/FormsBox';
import StepsBox from './StepsBox';

const StyledBox = styled.div`
    width: 65%;
    height: 80%;
    border-radius: 10px;
    display: grid;
    padding: 13px;
    grid-template-columns: 239px auto;
    background-color: hsl(0, 0%, 100%);
`;

export default function MainBox() {
    return (
        <StyledBox>
            <StepsBox />
            <FormsBox />
        </StyledBox>
    )
}