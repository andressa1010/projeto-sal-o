import React from "react";
import Menu from "../components/menu";
import {
  ContainerBanner,
  ContainerServicos,
  ContainerTrabalhos,
  ContainerTratamentos,
  ContainerZap,
  DivLogo,
  LogoTipo,
} from "../Styles/styled";
import bannerUm from "../assets/Story de instagram de salão de beleza elegante branco e marrom.png"
import imgZap from "../assets/whatsapp.png"
import videoCabelo from "../assets/cabelo2.mp4"
import videoTratamento from"../assets/tratamento-video.mp4"
import bannerQuatro from "../assets/Corte tratamento divulgação salão de beleza preço story do instagram (1).png"
import bannerTres from "../assets/Corte tratamento divulgação salão de beleza preço story do instagram.png"
import bannerDois from "../assets/Story de instagram de salão de beleza moderno vermelho.png"
import logo from "../assets/Logo minimalista loja de produtos naturais creme (6) (1).png";


const trabalhosRealizados = [
  {
    id: 1,
    name: "Realinhamento Capilar Orgânica",
    video: "/cabelo1.mp4",
  },
  {
    id: 2,
    name: "Realinhamento Capilar Orgânica",
    video: "/Hitube_JtEhivBdiD_2024_12_03_18_24_27.mp4",
  },
  {
    id: 3,
    name: "Realinhamento Capilar Orgânica",
    video: "/Hitube_mc7Ninu6qD_2024_12_03_18_21_33.mp4",
  },
  {
    id: 4,
    name: "Realinhamento Capilar Orgânica",
    video: "/video-progressiva.mp4",
  },
  {
    id: 5,
    name: "Realinhamento Capilar Orgânica",
    video: "/cabelo06.mp4",
  },
  {
    id: 6,
    name: "Realinhamento Capilar Orgânica",
    video: "/botox-video.mp4",
  },
  {
    id: 7,
    name: "Realinhamento Capilar Orgânica",
    video: "/Hitube_lpQzvuH0WL_2024_12_03_18_26_17.mp4",
  },
  {
    id: 8,
    name: "Realinhamento Capilar Orgânica",
    video: "/Hitube_fzHeY1nbPm_2024_12_03_18_27_10.mp4",
  },
];

const Servicos = () => {
  return (
    <>
      <Menu />

      <DivLogo>
        <LogoTipo src={logo} />
      </DivLogo>

      <ContainerBanner>
        <div className="container-img">
          <img
            src={bannerUm}
            alt="imagem"/>
        </div>
        <div className="container-img">
          <img
            src={bannerTres}
            alt="imagem"
          ></img>
        </div>
        <div className="container-img">
          <img
            src={bannerDois}
            alt="imagem"
          ></img>
        </div>
        <div className="container-img">
          <img
            src={bannerQuatro}
            alt="imagem"
          ></img>
        </div>
      </ContainerBanner>

      <ContainerTrabalhos>
        <p>
          Transforme o seu visual com a progressiva! Uma solução prática para
          quem busca cabelos mais lisos, alinhados e com brilho intenso. Ideal
          para reduzir o frizz, facilitar o dia a dia e realçar sua beleza
          natural. Seja para um evento especial ou para o cotidiano, a
          progressiva oferece praticidade e sofisticação!
        </p>
        <video src={videoCabelo} autoPlay muted loop></video>
      </ContainerTrabalhos>

      <ContainerServicos>
        {trabalhosRealizados.map((produtos) => (
          <div key={produtos.id} className="produto">
            <h2> {produtos.name} </h2>
            <video src={produtos.video} autoPlay muted loop></video>
          </div>
        ))}
      </ContainerServicos>

      <ContainerTratamentos>
        <p>
          Cuide do seu cabelo com os melhores tratamentos! Hidratação poderosa:
          Recupera a maciez e o brilho dos fios ressecados. Cronograma capilar
          personalizado: Nutrição, reconstrução e hidratação na medida certa
          para cada tipo de cabelo. Cuidado profissional: Transforme a saúde dos
          seus fios com técnicas e produtos de alta qualidade. Seu cabelo merece
          esse carinho! Agende seu tratamento e sinta a diferença!
        </p>
        <video src={videoTratamento} autoPlay muted loop></video>
      </ContainerTratamentos>

      <ContainerZap>
        <a href="https://api.whatsapp.com/message/GXPMSYFCO2KHN1?autoload=1&app_absent=0">
          <img src={imgZap} alt="imagem whatsapp"></img>
        </a>
      </ContainerZap>
    </>
  );
};

export default Servicos;
