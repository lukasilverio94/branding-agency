import React, { useState } from "react";
import Card from "../Card";
import "./style.css";

export default function WorkExperienceSection(props) {
  // BANCO DE DADOS CARDS:
  const workExperienceData = [
    {
      date: "JUNHO 2012 - 2016",
      title: "Web Designer",
      company: "Pied Piper StartUp.",
      paragraph:
        "Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores",
    },
    {
      date: "AGOSTO 2012 - 2016",
      title: "Product Designer",
      company: "E Corp",
      paragraph:
        "Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra",
    },
    {
      date: "FEVEREIRO 2019 - 2021",
      title: "Digital Consulting",
      company: "Arasaka Inc.",
      paragraph:
        "Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução",
    },
  ];

  return (
    <main
      id="work-experience-section"
      className={props.isDarkMode ? "main-light-mode" : "main-dark-mode"}
    >
      <div
        id="header-work-experiences"
        className={
          props.isDarkMode ? "container-light-mode" : "container-dark-mode"
        }
      >
        <h2>Experiências De Trabalho</h2>
        <p>
          Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.
        </p>
      </div>
      {/* cards */}
      <div className="cards">
        {workExperienceData.map(
          (
            item,
            index //map() para percorrer os itens da coleção de arrays e aplica uma função a cada um deles
          ) => (
            <Card
              isDarkMode={props.isDarkMode}
              key={index} // usar único key por card.
              date={item.date}
              title={item.title}
              company={item.company}
              paragraph={item.paragraph}
            />
          )
        )}
      </div>
    </main>
  );
}
