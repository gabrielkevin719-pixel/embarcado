import { Check, Play, Download, Smartphone, Users, Award, Clock, Briefcase, Heart, Building2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-dark-bg text-white">
      <div className="container mx-auto px-4 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <span className="inline-block bg-secondary text-dark-bg font-bold text-xs px-3 py-1 mb-4">
              EDITAL IMINENTE
            </span>
            
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
              PETROBRAS
            </h1>
            
            <div className="mb-4">
              <span className="bg-secondary text-dark-bg font-bold text-lg px-1">
                SALARIOS INICIAIS DE ATE R$ 14 mil
              </span>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-white font-medium text-sm">
                NIVEL MEDIO E SUPERIOR
              </span>
              <span className="bg-primary text-white px-3 py-1 text-xs font-bold">
                +1 mil vagas previstas
              </span>
            </div>
            
            <p className="text-gray-400 max-w-lg leading-relaxed text-sm">
              Prepare-se para um dos maiores concursos previstos para 2026 com a plataforma lider em aprovacao. Aqui, voce encontra conteudo atualizado, cronograma de estudos, os melhores professores do pais e muito mais.
            </p>
          </div>
          
          {/* Right Content - Pricing Cards */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Assinatura Ilimitada */}
            <div className="bg-white rounded-lg p-5 min-w-[260px]">
              <div className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 inline-block mb-2">
                PETROBRAS + 25 MIL CURSOS
              </div>
              <h3 className="text-dark-bg text-lg font-bold mb-1">ASSINATURA ILIMITADA</h3>
              <p className="text-gray-400 text-xs line-through">De: 12x R$ 149,90</p>
              <p className="text-gray-600 text-xs mb-1">Por a partir de</p>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-gray-600 text-xs">12x R$</span>
                <span className="text-4xl font-black text-primary">54,90</span>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-4 rounded text-sm transition-colors">
                QUERO ASSINAR
              </button>
            </div>
            
            {/* Cursos Avulsos */}
            <div className="bg-white rounded-lg p-5 min-w-[220px]">
              <h3 className="text-dark-bg text-base font-bold mb-3">CURSOS AVULSOS<br/>PETROBRAS</h3>
              <p className="text-gray-600 text-xs mb-1">A partir de</p>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-4xl font-black text-dark-bg">34,99</span>
              </div>
              <button className="w-full bg-white hover:bg-gray-50 text-dark-bg font-bold py-2.5 px-4 rounded text-sm transition-colors border border-gray-300">
                VER CURSOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  const benefits = [
    {
      icon: Briefcase,
      title: "Vagas para diferentes especialidades",
      description: "Trabalhe em sua area de atuacao, em uma empresa seria e com oportunidades solidas de carreira."
    },
    {
      icon: Heart,
      title: "Salarios e beneficios",
      description: "Iniciais de ate R$ 14 mil, alem de auxilio-alimentacao, assistencia multidisciplinar de saude e outros beneficios."
    },
    {
      icon: Building2,
      title: "Plano de aposentadoria",
      description: "A Petrobras oferece a adesao aos planos da Petros para todos os novos empregados admitidos via concurso publico."
    }
  ];

  return (
    <section id="beneficios" className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-3">
          Por que trabalhar na <span className="text-primary">Petrobras</span>?
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto text-sm">
          Descubra as vantagens de fazer parte de uma das maiores empresas do Brasil
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center px-4">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-dark-bg">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section id="planos" className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <span className="inline-block bg-primary text-white font-bold text-xs px-3 py-1 mb-4">
            Comece a estudar agora
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold mb-3">
            Aqui voce tem <span className="text-primary">tudo o que precisa</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Faca como milhares de alunos aprovados e estude com a plataforma mais completa do pais.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Side - Features List */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-dark-bg">
                Garanta sua preparacao na plataforma<br/>
                <span className="text-primary">que mais aprova no pais</span>
              </h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">
                Tudo reunido em um so lugar: conteudo sempre atualizado + metodo comprovado + tecnologia para acelerar sua aprovacao.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Videoaulas com os melhores professores",
                  "PDFs e Audiobooks para estudar do jeito que quiser",
                  "Cronograma automatico de estudos",
                  "App no 1 para concursos",
                  "Mais de 25 mil cursos disponiveis"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-primary rounded-sm flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-dark-bg text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Side - Pricing Card */}
            <div className="bg-primary rounded-lg p-6 text-white min-w-[300px]">
              <div className="text-xs font-medium opacity-90 mb-1">ASSINATURA ILIMITADA</div>
              <div className="text-xs line-through opacity-60">De: 12x R$ 149,90</div>
              <div className="text-xs opacity-80 mb-1">Por a partir de</div>
              <div className="flex items-baseline gap-1 mb-5">
                <span className="text-sm">12x R$</span>
                <span className="text-5xl font-black">54,90</span>
              </div>
              
              <ul className="space-y-2 mb-5">
                {[
                  "Videoaulas, PDFs e Audiobooks",
                  "App no 1 para concursos",
                  "Professores renomados",
                  "Cronograma automatico",
                  "Mais de 25 mil cursos"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-xs">
                    <Check className="w-3 h-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-secondary hover:bg-secondary-dark text-dark-bg font-bold py-3 px-6 rounded text-sm transition-colors">
                QUERO ASSINAR AGORA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CoursesSection() {
  const avulsosFeatures = [
    { icon: Play, text: "Videoaulas" },
    { icon: Play, text: "Audioaulas" },
    { icon: Clock, text: "120 dias para acessar" },
    { icon: Download, text: "Download ilimitado das aulas" },
    { icon: Smartphone, text: "Acesso no Android, iOS, Windows e Mac" }
  ];

  const assinaturaFeatures = [
    { icon: Play, text: "Videoaulas, PDFs e Audiobooks" },
    { icon: Smartphone, text: "App no 1 para concursos" },
    { icon: Users, text: "Professores de alta performance" },
    { icon: Clock, text: "Cronograma automatico de estudos" },
    { icon: Award, text: "Mais de 25 mil cursos" }
  ];

  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Escolha o <span className="text-primary">plano ideal</span> para voce
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Cursos Avulsos */}
          <div className="border border-gray-200 rounded-lg p-6 hover:border-primary transition-colors">
            <div className="text-xs text-gray-500 font-medium mb-1">Cursos Avulsos</div>
            <h3 className="text-xl font-bold mb-4 text-dark-bg">Cursos Avulsos Petrobras</h3>
            <p className="text-gray-500 text-sm mb-1">A partir de</p>
            <div className="flex items-baseline gap-1 mb-5">
              <span className="text-lg">12x R$</span>
              <span className="text-4xl font-black text-primary">34,99</span>
            </div>
            
            <ul className="space-y-2 mb-6">
              {avulsosFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full border border-primary text-primary hover:bg-primary hover:text-white font-bold py-2.5 px-4 rounded text-sm transition-colors">
              VER CURSOS AVULSOS
            </button>
          </div>
          
          {/* Assinatura Ilimitada */}
          <div className="border-2 border-primary bg-primary/5 rounded-lg p-6 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-dark-bg text-[10px] font-bold px-3 py-1 rounded-full">
              MAIS POPULAR
            </div>
            
            <div className="text-xs text-primary font-medium mb-1">Completo: Petrobras + 25 mil cursos</div>
            <h3 className="text-xl font-bold mb-4 text-dark-bg">Assinatura Ilimitada</h3>
            <p className="text-gray-400 line-through text-sm">De: 12x R$ 149,90</p>
            <p className="text-gray-500 text-sm mb-1">Por a partir de</p>
            <div className="flex items-baseline gap-1 mb-5">
              <span className="text-lg">12x R$</span>
              <span className="text-4xl font-black text-primary">54,90</span>
            </div>
            
            <ul className="space-y-2 mb-6">
              {assinaturaFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <feature.icon className="w-4 h-4 text-primary" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-4 rounded text-sm transition-colors">
              QUERO ASSINAR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TeachersSection() {
  const teachers = [
    {
      name: "Elias Santana",
      subject: "Portugues",
      bio: "Licenciado em Letras e mestre em Linguistica pela UnB. Professor ha 18 anos. Ex-servidor da SEDF. Escritor com 2 obras publicadas."
    },
    {
      name: "Kiteria Karoline",
      subject: "Fisica",
      bio: "Mestre em Ensino de Fisica pela UnB. Servidora Publica na SEDUCGO (3o lugar) e SEDF (1o lugar). Autora de 3 livros."
    },
    {
      name: "Wagner Aguiar",
      subject: "Matematica",
      bio: "Licenciado em Matematica (UESB), mestre em Ensino de Matematica (UFBA). Professor em preparatorios ha mais de 20 anos."
    }
  ];

  return (
    <section id="professores" className="py-14 bg-dark-bg text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-3">
          Aprenda com os <span className="text-secondary">melhores professores</span> do Brasil
        </h2>
        <p className="text-center text-gray-400 mb-10 max-w-2xl mx-auto text-sm">
          Profissionais experientes e didaticos que vao te guiar ate a aprovacao
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-dark-card rounded-lg p-5 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">{teacher.name.charAt(0)}</span>
              </div>
              <h3 className="text-lg font-bold mb-1">{teacher.name}</h3>
              <span className="text-primary text-xs font-medium">{teacher.subject}</span>
              <p className="text-gray-400 mt-3 text-xs leading-relaxed">{teacher.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section id="aprovados" className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-3">
          Faca parte do nosso <span className="text-primary">time de aprovados</span>
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto text-sm">
          Temos os maiores indices de aprovacao nos concursos mais disputados do Brasil, comprovados por historias reais
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name: "Maria Silva", position: "Aprovada - Petrobras 2024", text: "A plataforma foi fundamental para minha aprovacao. O cronograma automatico me ajudou a organizar os estudos." },
            { name: "Joao Santos", position: "Aprovado - Petrobras 2024", text: "Os professores sao incriveis e as aulas muito didaticas. Consegui minha aprovacao em menos de 1 ano de estudo." },
            { name: "Ana Costa", position: "Aprovada - Petrobras 2024", text: "O app me permitiu estudar em qualquer lugar. Aproveitei cada minuto do meu tempo para chegar a aprovacao." }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{testimonial.name}</h4>
                  <span className="text-primary text-xs">{testimonial.position}</span>
                </div>
              </div>
              <p className="text-gray-500 italic text-sm">&quot;{testimonial.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatsAppSection() {
  return (
    <section className="py-14 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl lg:text-3xl font-bold mb-3">
          Receba novidades do concurso Petrobras em primeira mao!
        </h2>
        <p className="text-sm opacity-90 mb-6 max-w-2xl mx-auto">
          Alertas do edital, materiais gratuitos, aulas especiais e orientacoes de estudo direto no seu WhatsApp. Entre agora e fique a frente da concorrencia.
        </p>
        <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-6 rounded transition-colors text-sm inline-flex items-center gap-2">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          ENTRAR NO GRUPO DO WHATSAPP
        </button>
      </div>
    </section>
  );
}

export function StatsSection() {
  const stats = [
    { label: "Pioneiros na Assinatura Ilimitada", icon: Award },
    { label: "App no 1 dos concursos", icon: Smartphone },
    { label: "+2 milhoes de alunos", icon: Users },
    { label: "Heptacampeao Reclame Aqui", icon: Award }
  ];

  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-3">
          Somos a <span className="text-primary">Edtech mais inovadora</span> da America Latina
        </h2>
        <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto text-sm">
          Tecnologia para acelerar o aprendizado e a aprovacao
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow-sm">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                <stat.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-dark-bg font-medium text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark-bg text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-2xl font-bold">
            <span className="text-white">Gran</span>
            <span className="text-primary"> Cursos</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-xs">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Termos de uso
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Politica de privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Central de ajuda
            </a>
          </nav>
          
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-6 text-center text-gray-400 text-xs">
          <p>&copy; 2026 Gran Cursos Online. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
