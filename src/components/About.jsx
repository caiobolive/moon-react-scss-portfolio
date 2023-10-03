import "../styles/components/about.scss";
import MoonWindowParallax from "./MoonWindowParallax";
import Loading from "./Loading";
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

const About = () => {
  const { lang } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500); 
  }, []);

  return (
    <section id="about" className="about">
      <div>
        {isLoading ? <Loading /> : null}
      </div>
      <MoonWindowParallax/>
      <div className="about__content">
        <div className="about__content__section-wrapper">
          <div className="about__content__section-wrapper__window-wrapper">
            <div className="about__content__section-wrapper__window-wrapper__window-spacer"></div>
            <div className="about__content__section-wrapper__window-wrapper__window-text">
              <div className="about__content__section-wrapper__window-wrapper__window-text__text-section">
                {lang === "en" && <h4 className="neon-text">My name is</h4>}
                {lang === "en" && <h1 className="neon-text">Caio Oliveira</h1>}
                {lang === "pt" && <h4 className="neon-text">Meu nome é</h4>}
                {lang === "pt" && <h1 className="neon-text">Caio Oliveira</h1>}
              </div>
              <div className="about__content__section-wrapper__window-wrapper__window-text__text-section">
                {lang === "en" && <h6 className="neon-text">I'm a</h6>}
                {lang === "en" && <h4 className="neon-text">Graduated Computer Engineer</h4>}
                {lang === "pt" && <h6 className="neon-text">Eu sou</h6>}
                {lang === "pt" && <h4 className="neon-text">Formado em Engenharia de Computação</h4>}
              </div>
              <div className="about__content__section-wrapper__window-wrapper__window-text__text-section">
                {lang === "en" && <h6 className="neon-text">more specifically a</h6>}
                {lang === "en" && <h4 className="neon-text">Front End Web Developer</h4>}
                {lang === "en" && <h6 className="neon-text">with 2+ years of experience</h6>}
                {lang === "pt" && <h6 className="neon-text">mais especificamente um</h6>}
                {lang === "pt" && <h4 className="neon-text">Desenvolvedor Web Front End</h4>}
                {lang === "pt" && <h6 className="neon-text">com 2+ anos de experiência</h6>}
              </div>
            </div>
          </div>
          <div className="about__content__section-wrapper__more-info-wrapper">
            <div className="about__content__section-wrapper__more-info-wrapper__text-section">
              {lang === "en" && <h1 className="neon-text">My Journey</h1>}
              {lang === "pt" && <h1 className="neon-text">Minha Jornada</h1>}
              <div className="about__content__section-wrapper__more-info-wrapper__text-section__subsection">
                <h4 className="neon-text">2017-2022</h4>
                {lang === "en" && <span>Attended to my university PUC-GO (Pontifical Catholic University of Goiás) for five years in the bachelor degree of computer engineering (totaling 4100+ hours), the degree fully prepares the student for everything to do with:</span>}
                {lang === "en" && <span style={{marginTop: "4px"}}>Logic and Programming: starting from basic algorithm and going through OOP, Data structures (I-II), Programming techniques (I-II), Discrete Mathematics (Computer Fundamentals) (I-IV), Machine Language, Data Banks, Compilers, Recursion, Algorythm Project and Analysis, Dynamic Programming (What I used to write my final paper) and so on.</span>}
                {lang === "en" && <span style={{marginTop: "4px"}}>Math: starting from calculus I and II through Analytic Geometry (I and II), Linear Algebra, Ordinary Differential Equations (ODEs) and Statistics</span>}
                {lang === "en" && <span style={{marginTop: "4px"}}>Electrics: Digital Systems, Electric Circuits (I-II), Microprocessors, Microcontrollers, Computer Architecture, Industrial Automations</span>}
                {lang === "en" && <span style={{marginTop: "4px"}}>Software: Software Engineering, Requirements Engineering, System Security, Operational Systems, AI</span>}
                {lang === "pt" && <span>Estudei na PUC-GO (Pontifícia Universidade Católica de Goiás) por cinco anos no curso de engenharia da computação (totalizando 4100+ horas), o curso prepara totalmente o aluno para tudo relacionado a:</span>}
                {lang === "pt" && <span style={{marginTop: "4px"}}>Lógica e Programação: começando a partir do algoritmo básico e passando por POO, Estruturas de Dados (I-II), Técnicas de Programação (I-II), Matemática Discreta (Fundamentos de Computação) (I-IV), Linguagem de Máquina, Bancos de Dados, Compiladores, Recursividade, Projeto e Análise de Algoritmos, Programação Dinâmica (o que usei para escrever meu TCC) e assim por diante.</span>}
                {lang === "pt" && <span style={{marginTop: "4px"}}>Matemática: começando pelo cálculo I e II até Geometria Analítica (I e II), Álgebra Linear, Equações Diferenciais Ordinárias (EDOs) e Estatísticas.</span>}
                {lang === "pt" && <span style={{marginTop: "4px"}}>Elétrica: Sistemas Digitais, Circuitos Elétricos (I-II), Microprocessadores, Microcontroladores, Arquitetura de Computadores, Automação Industrial.</span>}
                {lang === "pt" && <span style={{marginTop: "4px"}}>Software: Engenharia de Software, Engenharia de Requisitos, Segurança de Sistemas, Sistemas Operacionais, Inteligência Artificial.</span>}
              </div>
              <div className="about__content__section-wrapper__more-info-wrapper__text-section__subsection">
                <h4 className="neon-text">2021-2022</h4>
                {lang === "en" && <span>Published my Final Paper on a Application to Define Vaccine Procurement Scheduling, Using Dynamic Programming to Reduce Financial Costs, using Dynamic Programming</span>}
                {lang === "pt" && <span>Publiquei meu TCC criando uma Aplicação para Definir o Agendamento de Aquisição de Vacinas, Utilizando Programação Dinâmica para Reduzir Custos Financeiros, usando Programação Dinâmica.</span>}
              </div>
              <div className="about__content__section-wrapper__more-info-wrapper__text-section__subsection">
                <h4 className="neon-text">2021-2022</h4>
                {lang === "en" && <span>Finished the course "100 Days Of Code - 2023 Web Development Bootcamp" from Academind, taught by Maximilian Schwarzmüller (80h) it goes through every essential for both Front and Back End with up to date material</span>}
                {lang === "pt" && <span>Terminei o curso "100 Days Of Code - 2023 Web Development Bootcamp" da Academind, com o professor Maximilian Schwarzmüller (80h) passando por tudo que é essencial tanto para Front quanto Back End com materiais atualizados</span>}
              </div>
              <div className="about__content__section-wrapper__more-info-wrapper__text-section__subsection">
                {lang === "en" && <h4 className="neon-text">2022-Current</h4>}
                {lang === "pt" && <h4 className="neon-text">2022-Atual</h4>}
                {lang === "en" && <span>Worked as a Front End Web Developer at Cilia Technology - Working mainly on Angular, I also had the opportunity to learn and put to practise many concepts of good practises, security, web design, scrum, unit testing, etc.</span>}
                {lang === "pt" && <span>Trabalhei como Desenvolvedor Front End na Cilia Tecnologia - Trabalhando principalmente com Angular, tive também a oportunidade de aprender e colocar em prática muitos conceitos de boas práticas, segurança, design web, Scrum, testes unitários, etc.</span>}
              </div>
              <div className="about__content__section-wrapper__more-info-wrapper__text-section__subsection">
                <h4 className="neon-text">2023</h4>
                {lang === "en" && <span>Finished the course "Angular - The Complete Guide (2023 Edition)" from Academind, taught by Maximilian Schwarzmüller (36h)</span>}
                {lang === "pt" && <span>Completei o curso "Angular - The Complete Guide (2023 Edition)" da Academind, ensinado por Maximilian Schwarzmüller (36h)</span>}
              </div>
              <div className="about__content__section-wrapper__more-info-wrapper__text-section__subsection">
                <h4 className="neon-text">2023</h4>
                {lang === "en" && <span>Finished the course "React - The Complete Guide 2023 (incl. React Router & Redux)" from Academind, taught by Maximilian Schwarzmüller (55h)</span>}
                {lang === "pt" && <span>Completei o curso "React - The Complete Guide 2023 (incl. React Router & Redux)" da Academind, ensinado por Maximilian Schwarzmüller (55h)</span>}
              </div>              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
