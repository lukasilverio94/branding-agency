import Card from "../Card";
import "./style.css";

export default function WorkExperienceSection() {
  return (
    <main id="work-experience-section">
      <div className="header-work-experiences">
        <h2>Experiências De Trabalho</h2>
        <p>
          Há mais de 10 anos no mercado de Branding, Desing Gráfico, Criação de
          Sites e Marketing Digital, nos empenhamos diariamente para entregar
          resultados que tragam impacto aos nossos clientes.
        </p>
      </div>
      {/* cards */}
      <div className="cards">
        <Card
          date="JUNHO 2012 - 2016"
          title="Web Designer"
          company="Pied Piper StartUp."
          paragraph="Criação de Landing pages, sites institucionais e E-commerces completamente personalizados e otimizados para buscadores"
        />
        <Card
          date="AGOSTO 2012 - 2016"
          title="Product Designer"
          company="E Corp"
          paragraph="Criação de modelos estratégicos de conversão identificando o cliente e mapeando toda a sua jornada de compra"
        />
          <Card
          date="FEVEREIRO 2019 - 2021"
          title="Digital Consulting"
          company="Arasaka Inc."
          paragraph="Consultoria em estratégias digitais para todas as etapas do ciclo do projeto, desde a definição inicial até a execução"
        />
      </div>
    </main>
  );
}
