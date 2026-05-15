import { Check, Play, Download, Smartphone, Users, Award, Clock, Briefcase, Heart, Building2 } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative bg-dark-bg text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-secondary text-dark-bg font-bold text-sm px-4 py-1 rounded-full mb-4">
              EDITAL IMINENTE
            </span>
            
            <h1 className="text-5xl lg:text-7xl font-black tracking-tight mb-4">
              PETROBRAS
            </h1>
            
            <div className="bg-secondary text-dark-bg inline-block px-4 py-2 rounded-lg mb-6">
              <span className="font-bold text-lg">SALÁRIOS INICIAIS DE ATÉ </span>
              <span className="font-black text-2xl">R$ 14 mil</span>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
                NÍVEL MÉDIO E SUPERIOR
              </span>
              <span className="bg-primary px-4 py-2 rounded-full text-sm font-bold">
                +1 mil vagas previstas
              </span>
            </div>
            
            <p className="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed">
              Prepare-se para um dos maiores concursos previstos para 2026 com a plataforma líder em aprovação. Aqui, você encontra conteúdo atualizado, cronograma de estudos, os melhores professores do país e muito mais.
            </p>
          </div>
          
          {/* Right Content - Pricing Cards */}
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            {/* Assinatura Ilimitada */}
            <div className="bg-dark-card border border-primary rounded-2xl p-6 flex-1 min-w-[280px]">
              <div className="bg-primary/20 text-primary text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                PETROBRAS + 25 MIL CURSOS
              </div>
              <h3 className="text-xl font-bold mb-2">ASSINATURA ILIMITADA</h3>
              <p className="text-gray-400 text-sm line-through mb-1">De: 12x R$ 149,90</p>
              <p className="text-gray-300 text-sm mb-2">Por a partir de</p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-gray-300 text-sm">12x R$</span>
                <span className="text-5xl font-black text-secondary">54,90</span>
              </div>
              <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors">
                QUERO ASSINAR
              </button>
            </div>
            
            {/* Cursos Avulsos */}
            <div className="bg-dark-card border border-gray-700 rounded-2xl p-6 flex-1 min-w-[280px]">
              <h3 className="text-xl font-bold mb-4">CURSOS AVULSOS PETROBRAS</h3>
              <p className="text-gray-300 text-sm mb-2">A partir de</p>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-gray-300 text-sm">12x R$</span>
                <span className="text-5xl font-black text-white">34,99</span>
              </div>
              <button className="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg transition-colors border border-gray-600">
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
      description: "Trabalhe em sua área de atuação, em uma empresa séria e com oportunidades sólidas de carreira."
    },
    {
      icon: Heart,
      title: "Salários e benefícios",
      description: "Iniciais de até R$ 14 mil, além de auxílio-alimentação, assistência multidisciplinar de saúde e outros benefícios."
    },
    {
      icon: Building2,
      title: "Plano de aposentadoria",
      description: "A Petrobras oferece a adesão aos planos da Petros para todos os novos empregados admitidos via concurso público."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Por que trabalhar na <span className="text-primary">Petrobras</span>?
        </h2>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          Descubra as vantagens de fazer parte de uma das maiores empresas do Brasil
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-colors text-lg">
            Comece a estudar agora
          </button>
        </div>
      </div>
    </section>
  );
}

export function FeaturesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Aqui você tem <span className="text-primary">tudo o que precisa</span>
        </h2>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          Faça como milhares de alunos aprovados e estude com a plataforma mais completa do país.
        </p>
        
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Garanta sua preparação na plataforma que mais aprova no país
              </h3>
              <p className="text-muted mb-6 leading-relaxed">
                Tudo reunido em um só lugar: conteúdo sempre atualizado + método comprovado + tecnologia para acelerar sua aprovação.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Videoaulas com os melhores professores",
                  "PDFs e Audiobooks para estudar do jeito que quiser",
                  "Cronograma automático de estudos",
                  "App nº 1 para concursos",
                  "Mais de 25 mil cursos disponíveis"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white">
              <div className="text-sm font-medium opacity-80 mb-2">ASSINATURA ILIMITADA</div>
              <div className="text-sm line-through opacity-60 mb-1">De: 12x R$ 149,90</div>
              <div className="text-sm opacity-80 mb-2">Por a partir de</div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-xl">12x R$</span>
                <span className="text-6xl font-black">54,90</span>
              </div>
              
              <ul className="space-y-3 mb-6">
                {[
                  "Videoaulas, PDFs e Audiobooks",
                  "App nº 1 para concursos",
                  "Professores renomados",
                  "Cronograma automático",
                  "Mais de 25 mil cursos"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-secondary hover:bg-secondary-dark text-dark-bg font-bold py-4 px-6 rounded-lg transition-colors">
                QUERO ASSINAR AGORA
              </button>
              <p className="text-xs text-center mt-3 opacity-70">
                *Oferta especial por tempo limitado
              </p>
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
    { icon: Smartphone, text: "App nº 1 para concursos" },
    { icon: Users, text: "Professores de alta performance" },
    { icon: Clock, text: "Cronograma automático de estudos" },
    { icon: Award, text: "Mais de 25 mil cursos" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">
          Escolha o <span className="text-primary">plano ideal</span> para você
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Cursos Avulsos */}
          <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-primary transition-colors">
            <div className="text-sm text-muted font-medium mb-2">Cursos Avulsos</div>
            <h3 className="text-2xl font-bold mb-4">Cursos Avulsos Petrobras</h3>
            <p className="text-muted mb-2">A partir de</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-xl">12x R$</span>
              <span className="text-5xl font-black text-primary">34,99</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {avulsosFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold py-3 px-6 rounded-lg transition-colors">
              VER CURSOS AVULSOS
            </button>
          </div>
          
          {/* Assinatura Ilimitada */}
          <div className="border-2 border-primary bg-primary/5 rounded-2xl p-8 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-dark-bg text-xs font-bold px-4 py-1 rounded-full">
              MAIS POPULAR
            </div>
            
            <div className="text-sm text-primary font-medium mb-2">Completo: Petrobras + 25 mil cursos</div>
            <h3 className="text-2xl font-bold mb-4">Assinatura Ilimitada</h3>
            <p className="text-muted line-through mb-1">De: 12x R$ 149,90</p>
            <p className="text-muted mb-2">Por a partir de</p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-xl">12x R$</span>
              <span className="text-5xl font-black text-primary">54,90</span>
            </div>
            
            <ul className="space-y-3 mb-8">
              {assinaturaFeatures.map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors">
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
      subject: "Português",
      bio: "Licenciado em Letras e mestre em Linguística pela UnB. Professor há 18 anos. Ex-servidor da SEDF. Escritor com 2 obras publicadas."
    },
    {
      name: "Kitéria Karoline",
      subject: "Física",
      bio: "Mestre em Ensino de Física pela UnB. Servidora Pública na SEDUCGO (3º lugar) e SEDF (1º lugar). Autora de 3 livros."
    },
    {
      name: "Wagner Aguiar",
      subject: "Matemática",
      bio: "Licenciado em Matemática (UESB), mestre em Ensino de Matemática (UFBA). Professor em preparatórios há mais de 20 anos."
    }
  ];

  return (
    <section className="py-16 bg-dark-bg text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Aprenda com os <span className="text-secondary">melhores professores</span> do Brasil
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Profissionais experientes e didáticos que vão te guiar até a aprovação
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {teachers.map((teacher, index) => (
            <div key={index} className="bg-dark-card rounded-2xl p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold">{teacher.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
              <span className="text-primary text-sm font-medium">{teacher.subject}</span>
              <p className="text-gray-400 mt-4 text-sm leading-relaxed">{teacher.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Faça parte do nosso <span className="text-primary">time de aprovados</span>
        </h2>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          Temos os maiores índices de aprovação nos concursos mais disputados do Brasil, comprovados por histórias reais
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Maria Silva", position: "Aprovada - Petrobras 2024", text: "A plataforma foi fundamental para minha aprovação. O cronograma automático me ajudou a organizar os estudos." },
            { name: "João Santos", position: "Aprovado - Petrobras 2024", text: "Os professores são incríveis e as aulas muito didáticas. Consegui minha aprovação em menos de 1 ano de estudo." },
            { name: "Ana Costa", position: "Aprovada - Petrobras 2024", text: "O app me permitiu estudar em qualquer lugar. Aproveitei cada minuto do meu tempo para chegar à aprovação." }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <span className="text-primary text-sm">{testimonial.position}</span>
                </div>
              </div>
              <p className="text-muted italic">&quot;{testimonial.text}&quot;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatsAppSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Receba novidades do concurso Petrobras em primeira mão!
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Alertas do edital, materiais gratuitos, aulas especiais e orientações de estudo direto no seu WhatsApp. Entre agora e fique à frente da concorrência.
        </p>
        <button className="bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors text-lg inline-flex items-center gap-3">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
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
    { label: "App nº 1 dos concursos", icon: Smartphone },
    { label: "+2 milhões de alunos", icon: Users },
    { label: "Heptacampeão Reclame Aqui", icon: Award }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
          Somos a <span className="text-primary">Edtech mais inovadora</span> da América Latina
        </h2>
        <p className="text-center text-muted mb-12 max-w-2xl mx-auto">
          Tecnologia para acelerar o aprendizado e a aprovação
        </p>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-dark-bg text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold">
            <span className="text-primary">Gran</span> Cursos
          </div>
          <p className="text-gray-400 text-sm">
            © 2013 - 2026 Gran Tecnologia e Educação S/A
          </p>
        </div>
      </div>
    </footer>
  );
}
