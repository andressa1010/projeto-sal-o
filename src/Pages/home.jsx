import React from "react";
import Menu from "../components/menu";
import {
  ContainerConteudo,
  ContainerDescricao,
  ContainerDiv,
  ContainerMotivos,
  ContainerServicos, 
  ContainerZap,
  DivFotos,
  DivLogo,
  DivTitulo,
  LogoTipo,
  MapsLocalizacao,
} from "../Styles/styled";
import logo from "../assets/Logo minimalista loja de produtos naturais creme (6) (1).png";

const trabalhosRealizados = [
  {
    id: 1,
    name: "Realinhamento Capilar Orgânica",
    video: "src/assets/cabelo1.mp4",
  },
  {
    id: 2,
    name: "Realinhamento Capilar Orgânica",
    video: "src/assets/cabelo2.mp4",
  },
  {
    id: 3,
    name: "Realinhamento Capilar Orgânica",
    video: "src/assets/cabelo3.mp4",
  },
  {
    id: 4,
    name: "Realinhamento Capilar Orgânica",
    video: "src/assets/cabelo4.mp4",
  },
  {
    id: 5,
    name: "Realinhamento Capilar Orgânica",
    video: "src/assets/cabelo06.mp4",
  },
  {
    id: 6,
    name: "Botox Capilar Orgânica liss",
    video: "src/assets/botox-video.mp4",
  },
  {
    id: 7,
    name: "Realinhamento Capilar Orgânica",
    video: "src/assets/Hitube_lpQzvuH0WL_2024_12_03_18_26_17.mp4",
  },
  {
    id: 8,
    name: "Realinhamento Capilar Orgânica",
    video: "src/assets/Hitube_fzHeY1nbPm_2024_12_03_18_27_10.mp4",
  },
];

const Home = () => {
  return (
    <>
      <Menu />

      <DivLogo>
        <LogoTipo src={logo} />
      </DivLogo>

      <ContainerDiv>
        <p>
          A fim de renovar a autoestima feminina, o Studio Grace Benini realiza
          seu trabalho com excelência e maestria, fazendo uso dos produtos de
          maior qualidade do mercado para garantir a satisfação de nossas
          clientes.
        </p>
        <img
          src="src/assets/Photoroom-20241115_164642.png"
          alt="imagem grace"
        ></img>
      </ContainerDiv>

      <ContainerConteudo>
        <img src="src/assets/cabelo-liso.jpg" alt="imagem cabelo"></img>
        <p>
          Cuidar dos seus cabelos é mais que estética, é autoestima! Descubra
          nossos tratamentos exclusivos de progressivas, hidratações e cuidados
          especiais que transformam e valorizam sua beleza. Agende agora e sinta
          a diferença!
        </p>
      </ContainerConteudo>

      <DivTitulo>
        <h2>
          Embarque em uma jornada de transformação onde cada detalhe revela um
          novo capítulo do seu brilho único.{" "}
        </h2>
      </DivTitulo>

      <DivFotos>
        <div className="div-fotos">
          <h2>Botox</h2>
          <img src="src/assets/cabelos-grace03.jpg" alt="imagem cabelo"></img>
        </div>
        <div className="div-fotos">
          <h2>Progressiva</h2>
          <img src="src/assets/cabelos-grace.jpg" alt="imagem cabelo"></img>
        </div>
        <div className="div-fotos">
          <h2>Progressiva</h2>
          <img src="src/assets/cabelos-grace01.jpg" alt="imagem cabelo"></img>
        </div>
        <div className="div-fotos">
          <h2>Progressiva</h2>
          <img src="src/assets/cabelos-grace02.jpg" alt="imagem cabelo"></img>
        </div>
      </DivFotos>

      <ContainerDescricao>
        <p>
          Um dia no salão de beleza é um ato de amor-próprio capaz de
          transformar o seu humor e de elevar a sua autoestima. Não há nada mais
          relaxante do que deixar as suas preocupações de lado e se permitir um
          momento de beleza e bem-estar.
        </p>
        <img
          src="src/assets/cabelo-liso-e-dominante-ou-recessivo.jpg"
          alt="imagem"
        ></img>
      </ContainerDescricao>

      <ContainerServicos>
        {trabalhosRealizados.map((produtos) => (
          <div key={produtos.id} className="produto">
            <h2> {produtos.name} </h2>
            <video src={produtos.video} autoPlay muted loop></video>
          </div>
        ))}
      </ContainerServicos>

      <ContainerMotivos>
        <p>
          Por que fazer a progressiva e tratamentos comigo? Profissional
          especializada: Experiência e cuidado para transformar o seu cabelo com
          segurança e qualidade. Cronograma personalizado: Tratamentos como
          hidratação, nutrição e reconstrução adaptados às suas necessidades.
          Resultados incríveis: Cabelos saudáveis, alinhados e cheios de brilho!
          Agende já e experimente o cuidado que o seu cabelo merece!
        </p>
        <img
          src="src/assets/Photoroom-20241115_164629.png"
          alt="imagem grace"
        ></img>
      </ContainerMotivos>

      <DivTitulo>
        <h2>Venha Conhecer o Studio Grace Benini</h2>
      </DivTitulo>

      <MapsLocalizacao>
        <div className="maps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.0458802326707!2d-46.5142001!3d-23.638527900000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce681fa1f4e997%3A0xd243f3d6b71c2ee1!2sR.%20Est%C3%B4nia%2C%20279%20-%20Parque%20das%20Na%C3%A7%C3%B5es%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009280-170!5e0!3m2!1spt-BR!2sbr!4v1733272369043!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Localização"
          ></iframe>
        </div>
      </MapsLocalizacao>

      <ContainerZap>
        <a href="https://api.whatsapp.com/message/GXPMSYFCO2KHN1?autoload=1&app_absent=0">
          <img src="src/assets/whatsapp.png" alt="imagem whatsapp"></img>
        </a>
      </ContainerZap>
    </>
  );
};

export default Home;
