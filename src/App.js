import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <header>
        <div className="list">
          <ul>
            <li>Noticias</li>
            <li>Parcerias</li>
            <li>Social</li>
            <li>Sobre</li>
          </ul>
        </div>
      </header>
      <div className="main-container">
        <div className="background1-container back-img1"></div>
        <div className="primary-info">
          <h1>Leva Tech</h1>
          <h2>
            Leva-Tech: Visão sem Limites Somos idealistas movidos pela
            inovação.Acreditamos que nosso olho é o maior inimigo da nossa
            visão,porque só enxerga o agora — e nós criamos o que vem
            depois.Leva-Tech: tecnologia com propósito, visão além do visível.
          </h2>
        </div>
        <div className="logo"></div>
      </div>
      <main>
        <div className="container">
          <div className="background1-container back-img2"></div>
          <div className="text-info">
            <h3>
              A Leva-Tech é um projeto de empreendedorismo que nasceu em
              Criciúma, impulsionado por uma necessidade real observada durante
              minha atuação como motoboy na cidade. Ao longo do tempo, percebi a
              falta de sistemas de software eficazes para auxiliar entregadores
              e empresas de logística no dia a dia. As ferramentas existentes
              eram incompletas, desatualizadas e muitas vezes dificultavam mais
              do que ajudavam.
              <br />
              <br />
              Sou Pedro Alves, estudante de Sistemas de Informação na ESUCRI, e
              foi durante o desenvolvimento de um trabalho acadêmico focado em
              design de software que encontrei a inspiração para criar uma
              solução prática e inovadora para um problema que eu mesmo vivencio
              nas ruas. Um exemplo marcante foi minha experiência na empresa
              JadLog. O sistema utilizado para roteirização era extremamente
              trabalhoso, com localizações desatualizadas e falhas na geração de
              rotas precisas. A execução das tarefas exigia conhecimento prévio
              da cidade, o que dificultava a adaptação de novos funcionários.
              <br />
              <br />
              Outras empresas, como a Neto Express e a Logan, que trabalham com
              serviços terceirizados de coleta e entrega, também apresentavam
              falhas: a comunicação era feita exclusivamente por WhatsApp e os
              dados operacionais, como valores e históricos de entrega,
              simplesmente não existiam de forma estruturada. A ausência dessas
              informações compromete a eficiência, o controle e a transparência
              das operações.
              <br />
              <br />
              No mundo atual, a informação é um dos ativos mais importantes para
              o desempenho de qualquer negócio. A missão da Leva-Tech é
              justamente essa: desenvolver soluções tecnológicas que tragam
              resultados reais para empresas e profissionais autônomos,
              promovendo organização, eficiência e acesso facilitado às
              informações cruciais da operação logística.
            </h3>
          </div>
        </div>
      </main>
      <footer>
        <h1>© 2025 Todos os direitos reservados, LevaTech.</h1>
      </footer>
    </div>
  );
}
