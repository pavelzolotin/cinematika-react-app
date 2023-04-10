import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 200px;
`;

const Content = styled.div``

const H2 = styled.h2`
  font-size: 36px;
  color: #f5f5f5;
`

const Loading = () => {
    return (
        <Container>
            <Content>
                <H2>Идёт загрузка...</H2>
            </Content>
        </Container>
    );
};

export default Loading;