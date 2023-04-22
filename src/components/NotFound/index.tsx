import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin: .5rem 0 1.5rem 0;
  color: #555555;
`;

const Description = styled.p`
  font-size: 2rem;
  margin: .5rem 0 1.5rem 0;
  color: #f5f5f5;
`;

const NotFound = () => {
    return (
        <Container>
            <Title>Ничего не найдено</Title>
            <Description>К сожалению, данная страница отсутствует.</Description>
        </Container>
    );
};

export default NotFound;