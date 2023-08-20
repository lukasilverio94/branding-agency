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
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  );
}
