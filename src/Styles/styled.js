import styled from "styled-components";

export const NavBar = styled.header`
  display: flex;
  justify-content: center;

  nav ul li {
    display: inline-block;
    padding: 10px;
    font-size: 28px;
    font-family: "Pacifico", serif;
    font-weight: 400;
    font-style: normal;
  }

  a {
    text-decoration: none;
    color: #daa550;
  }

  a:hover {
    color: #ffffff;
  }
`;

export const DivLogo = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoTipo = styled.img`
  padding: 10px;
`;

export const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 20px;
    max-width: 600px;
    font-size: 28px;
    font-family: "Pacifico", serif;
    font-weight: 400;
    font-style: normal;
    color: goldenrod;
  }

  img {
    width: 400px;
  }

  @media (max-width: 500px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
      margin: 10px;
    }
  }
`;

export const ContainerConteudo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 25px;
    max-width: 600px;
    font-family: "Pacifico", serif;
    font-weight: 400;
    font-style: normal;
    color: goldenrod;
  }

  img {
    margin: 10px;
    width: 400px;
    border-radius: 40px;
  }

  @media (max-width: 500px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
      margin: 10px;
    }
  }
`;

export const DivTitulo = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    font-size: 30px;
    font-family: "Pacifico", serif;
    font-weight: 400;
    font-style: normal;
    color: goldenrod;
  }

  @media (max-width: 500px) {
    h2 {
      font-size: 25px;
      font-family: "Pacifico", serif;
      font-weight: 400;
      font-style: normal;
      color: goldenrod;
    }
  }
`;

export const DivFotos = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;

  h2 {
    color: goldenrod;
  }

  .div-fotos {
    margin: 10px;
    padding: 10px;
    width: 300px;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 40px;
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .div-fotos {
      margin: 10px;
      padding: 10px;
      width: calc(
        50% - 20px
      ); /* Ajusta para 50% do espaço disponível, com margem */
      text-align: center;
      box-sizing: border-box;
    }
  }
`;

export const ContainerDescricao = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 26px;
    max-width: 600px;
    color: goldenrod;
  }

  img {
    width: 400px;
    border-radius: 40px;
  }

  @media (max-width: 500px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
      margin: 10px;
    }
  }
`;

export const ContainerServicos = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;

  h2 {
    color: goldenrod;
  }

  .produto {
    margin: 10px;
    padding: 10px;
    width: 300px;
    text-align: center;
  }

  video {
    max-width: 100%;
    height: auto;
    border-radius: 40px;
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    .produto {
      margin: 10px;
      padding: 10px;
      width: calc(
        50% - 20px
      ); /* Ajusta para 50% do espaço disponível, com margem */
      text-align: center;
      box-sizing: border-box;
    }
  }
`;

export const ContainerBanner = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px;

  .container-img{
    margin: 10px;
    padding: 10px;
    width: 300px;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 40px;
  }

  @media (max-width: 500px) {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;

      .container-img{
        margin: 10px;
      padding: 10px;
      width: calc(
        50% - 20px
      ); /* Ajusta para 50% do espaço disponível, com margem */
      text-align: center;
      box-sizing: border-box;
      }
  }
`;

export const ContainerTrabalhos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  p {
    font-size: 26px;
    max-width: 600px;
    color: goldenrod;
  }

  video {
    width: 300px;
    border-radius: 40px;
  }

  @media (max-width: 500px) {
    p {
      font-size: 20px;
    }
    video {
      width: 200px;
    }
  }
`;

export const ContainerMotivos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 26px;
    max-width: 600px;
    color: goldenrod;
  }

  img {
    width: 400px;
  }

  @media (max-width: 500px) {
    img {
      width: 200px;
    }
    p {
      font-size: 16px;
      margin: 10px;
    }
  }
`;

export const ContainerTratamentos = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 26px;
    color: goldenrod;
    max-width: 600px;
  }

  video {
    width: 300px;
    border-radius: 40px;
  }

  @media (max-width: 500px) {
    p {
      font-size: 20px;
    }
    video {
      width: 200px;
    }
  }
`;

export const MapsLocalizacao = styled.div`
  display: flex;
  justify-content: center;

  .maps {
    width: 600px;
  }

  iframe {
    border-radius: 40px;
  }
`;

export const ContainerZap = styled.div`
  display: flex;
  justify-content: end;

  img {
    height: 60px;
  }
`;
