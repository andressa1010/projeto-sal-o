import React from "react";
import Menu from "../components/menu";
import { ContainerServicos, ContainerZap, DivLogo, LogoTipo } from "../Styles/styled";
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

const Galeria = () => {
  return (
    <>
      <Menu />

      <DivLogo>
        <LogoTipo src={logo} />
      </DivLogo>

      <ContainerServicos>
        {trabalhosRealizados.map((produtos) => (
          <div key={produtos.id} className="produto">
            <h2> {produtos.name} </h2>
            <video src={produtos.video} autoPlay muted loop></video>
          </div>
        ))}
      </ContainerServicos>

      <ContainerZap>
        <a href="https://api.whatsapp.com/message/GXPMSYFCO2KHN1?autoload=1&app_absent=0">
          <img src="src/assets/whatsapp.png" alt="imagem whatsapp"></img>
        </a>
      </ContainerZap>
    </>
  );
};

export default Galeria;
