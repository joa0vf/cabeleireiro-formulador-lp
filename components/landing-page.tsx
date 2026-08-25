'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import {
  FlaskConical,
  Lightbulb,
  CheckCircle2,
  Star,
  Menu,
  X,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus
} from 'lucide-react';
import { AnimatePresence } from 'motion/react';

// --- Helpers ---
const handleContactClick = () => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
        (window as any).fbq('track', 'Contact');
    }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuItems = ['Início', 'O Método', 'Quem Somos', 'Calendário', 'Dúvidas'];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[60] bg-white border-b border-black/5 shadow-sm"
      style={{ transform: 'translateZ(0)', willChange: 'transform' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[4.75rem] items-center justify-between gap-4 py-3 lg:min-h-[5.5rem] lg:py-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Image
              src="/images/logo_ccf.svg"
              alt="CCF Logo"
              width={160}
              height={50}
              className="h-auto w-[13.5rem] sm:w-[15rem] lg:w-[16.5rem] xl:w-[18rem] object-contain"
              priority
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-9">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`}
                className="whitespace-nowrap text-[0.8125rem] xl:text-sm font-serif font-semibold text-brand-dark hover:text-brand-green transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="https://api.whatsapp.com/send/?phone=5521985756901&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleContactClick}
              className="whitespace-nowrap border-2 border-brand-dark text-brand-dark px-5 xl:px-8 py-2.5 rounded-2xl text-sm font-serif font-semibold hover:bg-brand-dark hover:text-white transition-all inline-block"
            >
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-dark p-2 rounded-xl"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — rendered inline inside nav to avoid clipping */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden bg-white border-t border-black/5"
          >
            <div className="px-4 pt-4 pb-8 flex flex-col gap-5">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-')}`}
                  className="text-xl font-serif font-semibold text-brand-dark border-b border-black/5 pb-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
              <a
                href="https://api.whatsapp.com/send/?phone=5521985756901&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleContactClick}
                className="bg-brand-green text-white px-6 py-4 rounded-2xl text-base font-serif font-bold w-full text-center block mt-2"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="pt-28 sm:pt-32 lg:pt-36 pb-12 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative z-10 w-full flex justify-center mt-8 lg:mt-0">
              <Image
                src="/images/neide_dolia.png"
                alt="Profª Neide Dólia - Cabeleireiro Científico Formulador"
                width={800}
                height={1000}
                className="w-full max-w-[26rem] sm:max-w-[31rem] lg:max-w-full h-auto object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-brand-green/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-brand-green/5 rounded-full blur-3xl -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6 order-1 lg:order-2 text-center lg:text-left items-center lg:items-start"
          >
            <h1 className="max-w-full text-[2.25rem] sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-serif font-bold leading-[1.02] tracking-[-0.025em] text-brand-dark uppercase text-balance">
              <span className="block">De Aplicador</span>
              <span className="text-brand-green italic block sm:whitespace-nowrap">a Formulador.</span>
            </h1>
            <p className="text-base md:text-lg text-brand-dark/70 max-w-md leading-relaxed text-pretty">
              Domine a cosmetologia capilar, crie fórmulas personalizadas e eleve sua carreira com o Método CCF.
            </p>
            <div className="pt-4 w-full sm:w-auto">
              <a
                href="https://api.whatsapp.com/send/?phone=5521985756901&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleContactClick}
                className="bg-brand-green text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand-green/30 transform hover:-translate-y-1 inline-block w-full sm:w-auto"
              >
                Fale-conosco
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const productSlides = [
  {
    src: '/images/dolia-hair/dolia-hair-system-01.png',
    alt: 'Dólia Hair System para manutenção de cabelo, pele e unhas',
  },
  {
    src: '/images/dolia-hair/dolia-hair-system-02.png',
    alt: 'Professora Neide Dólia apresentando o Dólia Hair System',
  },
  {
    src: '/images/dolia-hair/dolia-hair-system-03.png',
    alt: 'Frasco de Dólia Hair System em composição botânica',
  },
];

const ProductCarousel = () => {
  const [activeSlide, setActiveSlide] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  React.useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % productSlides.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + productSlides.length) % productSlides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % productSlides.length);
  };

  return (
    <section
      aria-label="Apresentação do Dólia Hair System"
      className="hidden bg-brand-bg pb-14 pt-2 sm:pb-20 sm:pt-4"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="group relative aspect-video overflow-hidden rounded-2xl bg-brand-dark shadow-[0_24px_70px_rgba(0,77,38,0.16)] sm:rounded-[2rem]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, scale: 1.015 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <Image
                src={productSlides[activeSlide].src}
                alt={productSlides[activeSlide].alt}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Mostrar slide anterior"
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-brand-dark/45 text-white backdrop-blur-md transition-all hover:bg-brand-dark/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:left-5 sm:h-12 sm:w-12"
          >
            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Mostrar próximo slide"
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-brand-dark/45 text-white backdrop-blur-md transition-all hover:bg-brand-dark/75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:right-5 sm:h-12 sm:w-12"
          >
            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-brand-dark/45 px-3 py-2 backdrop-blur-md sm:bottom-5">
            {productSlides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Mostrar slide ${index + 1}`}
                aria-current={activeSlide === index ? 'true' : undefined}
                className={`h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${activeSlide === index ? 'w-7 bg-white' : 'w-2 bg-white/55 hover:bg-white/80'}`}
              />
            ))}
          </div>

          <p className="sr-only" aria-live="polite">
            Slide {activeSlide + 1} de {productSlides.length}: {productSlides[activeSlide].alt}
          </p>
        </div>
      </div>
    </section>
  );
};


const About = () => {
  return (
    <section id="quem-somos" className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-8 uppercase tracking-tight">
              Quem Somos?
            </h2>
            <div className="space-y-6 text-brand-dark/80 leading-relaxed">
              <p>
                <strong>Profª Neide Dólia</strong> | Especialista em Saúde do Couro Cabeludo e Fios | Docente da Metodologia Cabeleireiro Científico Formulador RJ
              </p>
              <p>
                Referência no ensino da Terapia Capilar, a Profª Neide Dólia dedica sua trajetória a formar profissionais que desejam ir além do básico. Como professora da metodologia Cabeleireiro Científico Formulador, ela une ciência e prática para capacitar alunos em todo o Brasil.

                Sua atuação é focada em transformar cabeleireiros e terapeutas em especialistas seguros de seus diagnósticos. Através de uma didática única, Neide ajuda seus alunos a conquistarem autoridade e entregarem saúde capilar de verdade, consolidando-se como uma mentora essencial para quem busca crescer através do conhecimento técnico e científico.              </p>
              <p className="italic border-l-4 border-brand-green pl-6 py-2 bg-brand-green/5 rounded-r-xl">
                <strong>Sua missão é clara:</strong> Levar conhecimento científico acessível e transformar carreiras, garantindo liberdade técnica, criativa e financeira para os cabeleireiros de todo o país.
              </p>
              <div className="pt-6">
                <a
                  href="https://api.whatsapp.com/send/?phone=5521985756901&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleContactClick}
                  className="bg-brand-green text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand-green/30 transform hover:-translate-y-1 inline-block w-full sm:w-auto text-center"
                >
                  Fale-conosco
                </a>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col gap-12">
            <div className="flex items-end gap-4">
              <span className="text-7xl font-serif font-semibold text-brand-green leading-none">+2.000</span>
              <span className="text-2xl font-serif font-semibold text-brand-dark uppercase tracking-widest pb-1">Alunos</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden aspect-square relative shadow-lg">
                  <Image src="/images/turma1.jpg" alt="Equipe CCF" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[3/4] relative shadow-lg">
                  <Image src="/images/turma2.jpg" alt="Alunos CCF" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden aspect-[3/4] relative shadow-lg">
                  <Image src="/images/turma3.jpg" alt="Alunos CCF" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-square relative shadow-lg">
                  <Image src="/images/turma4.jpg" alt="Alunos em Aula" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

const IEPSection = () => {
  return (
    <section id="iep" className="py-24 bg-brand-bg relative overflow-hidden">
      {/* Decorative background element — hidden overflow kept within section */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-green/5 -skew-x-12 -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/keyla_sampaio.png"
                alt="Keyla Sampaio - CEO IEP"
                width={800}
                height={1000}
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-green/10 mix-blend-multiply" />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block border border-brand-green/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-green/10 flex items-center justify-center">
                  <FlaskConical className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <div className="text-2xl font-serif font-bold text-brand-dark leading-none">Pioneira</div>
                  <div className="text-xs text-brand-dark/50 uppercase tracking-widest mt-1">No Brasil</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-2 uppercase tracking-tight">
                Conheça a IEP:
              </h2>
              <p className="text-brand-green font-serif text-2xl italic font-semibold">
                In&apos;Nova Educação Profissional
              </p>
            </div>

            <div className="space-y-6 text-brand-dark/80 text-lg leading-relaxed">
              <p>
                A <strong>IEP (In&apos;Nova Educação Profissional)</strong> é uma instituição de ensino pioneira, fundada e liderada pela CEO Keyla Sampaio — Química Industrial e Especialista em Formulação de Cosméticos Capilares. A instituição nasceu com a missão de elevar o padrão técnico do mercado da beleza no Brasil, unindo ciência, prática e inovação.
              </p>
              <p>
                Sob a visão estratégica de Keyla Sampaio, que em 2018 desenvolveu e lançou o aclamado Método Cabeleireiro Científico Formulador, a IEP tornou-se o epicentro dessa transformação. Através de uma metodologia exclusiva, a instituição capacita seus alunos a irem além da simples aplicação de produtos, ensinando a engenharia por trás da cosmética capilar.
              </p>
              <p>
                Com milhares de profissionais formados em cursos presenciais e online por todo o país, a IEP é hoje a principal referência nacional para quem busca domínio técnico total, segurança nos diagnósticos e a liberdade de criar fórmulas personalizadas para resultados de alto impacto, sempre com o selo de autoridade e inovação de sua fundadora.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="https://api.whatsapp.com/send/?phone=5521985756901&text=Quero saber mais sobre a IEP"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleContactClick}
                className="inline-flex items-center gap-3 bg-brand-dark text-white px-10 py-4 rounded-full font-bold hover:bg-brand-green transition-all shadow-lg shadow-brand-dark/20 transform hover:-translate-y-1"
              >
                Saiba Mais Sobre a IEP
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: FlaskConical, title: 'Ciência Capilar' },
            { icon: Lightbulb, title: 'Formulações Inteligentes' },
            { icon: CheckCircle2, title: 'Resultados Comprovados' },
            { icon: Star, title: 'Método Acessível' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center gap-4 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-green/5 flex items-center justify-center group-hover:bg-brand-green group-hover:text-white transition-all duration-300">
                <feature.icon className="w-8 h-8 text-brand-green group-hover:text-white" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-brand-dark leading-tight">{feature.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Method = () => {
  return (
    <section id="o-metodo" className="py-24 bg-brand-dark text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,140,69,0.3),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-serif uppercase tracking-tighter mb-6"
          >
            O Método
          </motion.h2>
          <p className="text-lg md:text-xl text-white/70 leading-relaxed">
            Mais do que um curso, uma formação completa para cabeleireiros que desejam se destacar no mercado com conhecimento técnico, segurança e autoridade científica.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden aspect-video relative shadow-2xl mb-20 border border-white/20"
        >
          <Image
            src="/images/foto-metodo-neide.jpg"
            alt="O Método em Prática - Profª Neide Dólia"
            fill
            className="object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { num: '1', title: 'Metodologia Exclusiva', desc: 'Desenvolvida por especialistas, combina prática e teoria de forma simples, dinâmica e 100% aplicável ao dia a dia do salão.' },
            { num: '2', title: 'Curso 100% Atualizado', desc: 'Conteúdo baseado nas mais recentes descobertas da cosmetologia e ciências capilares, mantendo você sempre à frente do mercado.' },
            { num: '3', title: 'Acesso Ao Portal CCF', desc: 'Uma plataforma exclusiva com materiais de apoio, vídeos, artigos e comunidade profissional para continuar aprendendo mesmo após o curso.' },
            { num: '4', title: 'Certificado Reconhecido', desc: 'Certificação com credibilidade nacional, valorizando sua carreira e destacando seu nome entre os melhores profissionais da área.' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-serif font-semibold text-brand-green">{item.num}.</span>
                <h3 className="text-xl font-semibold uppercase tracking-wide">{item.title}</h3>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MethodBooksBanner = () => {
  return (
    <section aria-label="Livros e métodos CCF" className="bg-brand-bg">
      <div className="mx-auto max-w-[1920px]">
        <Image
          src="/images/banner-metodo-livros.png"
          alt="Conhecimento que transforma: livros Método Loiro Sustentável e Cabeleireiro Científico Formulador"
          width={1920}
          height={1080}
          sizes="100vw"
          className="h-auto w-full"
        />
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="relative overflow-hidden bg-brand-bg py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center font-serif text-4xl font-semibold uppercase tracking-tight text-brand-dark md:text-5xl">
          O que os nossos alunos acham
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video overflow-hidden rounded-2xl border border-brand-dark/10 bg-black shadow-[0_24px_70px_rgba(0,77,38,0.16)] sm:rounded-[2rem]"
        >
          <iframe
            src="https://player.vimeo.com/video/1221149711?badge=0&autopause=0&player_id=0&app_id=58479"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
            title="Depoimento de aluno do Cabeleireiro Científico Formulador"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
};

const Agenda = () => {
  const events = [
    { date: '26 e 27', month: 'JANEIRO', city: 'Rio de Janeiro, RJ', img: '/images/rio.jpg', isPast: true },
    { date: '09 e 10', month: 'FEVEREIRO', city: 'Goiânia, Goiás', img: '/images/goiania.jpg', isPast: true },
    { date: '16 e 17', month: 'MARÇO', city: 'Vitória, ES', img: '/images/vitoria.jpg', isPast: true },
    { date: '13 e 14', month: 'ABRIL', city: 'Rio de Janeiro, RJ', img: '/images/rio.jpg', isPast: true },
    { date: '13 e 14', month: 'JULHO', city: 'Rio de Janeiro, RJ', img: '/images/rio.jpg', isPast: true },
    { date: '27 e 28', month: 'JULHO', city: 'Brasília, DF', img: '/images/brasilia.jpg', isPast: true },
    { date: '14 e 15', month: 'SETEMBRO', city: 'Espírito Santo, ES', img: '/images/vitoria.jpg' },
    { date: '05 e 06', month: 'OUTUBRO', city: 'Rio de Janeiro, RJ', img: '/images/rio.jpg' },
    { date: '19 e 20', month: 'OUTUBRO', title: 'Magistral Rio de Janeiro', city: 'Rio de Janeiro, RJ', img: '/images/rio.jpg' },
  ];

  return (
    <section id="calendario" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-7xl font-serif text-brand-dark text-center mb-16 uppercase tracking-tighter">
          Agenda de 2026
        </h2>

        <div className="space-y-6">
          {events.map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-6 p-6 rounded-3xl border transition-all relative group ${event.isPast
                ? 'bg-black/[0.02] border-black/5 opacity-60 grayscale'
                : 'bg-white border-black/5 hover:border-brand-green/30 hover:shadow-xl hover:shadow-brand-green/5'
                }`}
            >
              {!event.isPast ? (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:top-4 md:right-6 bg-brand-green text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase z-10 animate-pulse shadow-lg shadow-brand-green/20">
                  Vagas Abertas
                </div>
              ) : (
                <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:top-4 md:right-6 bg-brand-dark/10 text-brand-dark/60 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase z-10">
                  Realizado
                </div>
              )}

              <div className={`flex flex-col items-center justify-center min-w-[120px] text-center md:border-r border-black/5 md:pr-6 ${event.isPast ? 'opacity-50' : ''}`}>
                <span className={`text-4xl font-serif font-semibold ${event.isPast ? 'text-brand-dark/40' : 'text-brand-dark'}`}>{event.date}</span>
                <span className={`text-xs font-bold tracking-widest ${event.isPast ? 'text-brand-dark/30' : 'text-brand-green'}`}>{event.month}</span>
              </div>

              <div className="flex-grow flex items-center justify-center md:justify-start gap-4">
                <MapPin className={`${event.isPast ? 'text-brand-dark/20' : 'text-brand-green'} w-5 h-5 shrink-0`} />
                <div className="text-center md:text-left">
                  {event.title && (
                    <span className="mb-1 block text-xs font-bold uppercase tracking-[0.16em] text-brand-green">
                      {event.title}
                    </span>
                  )}
                  <span className={`block text-2xl font-serif font-semibold ${event.isPast ? 'text-brand-dark/40' : 'text-brand-dark'}`}>{event.city}</span>
                </div>
              </div>

              <div className={`w-full md:w-48 h-24 rounded-2xl overflow-hidden relative shadow-md ${event.isPast ? 'opacity-40' : ''}`}>
                <Image
                  src={event.img}
                  alt={event.city}
                  fill
                  className={`object-cover ${!event.isPast ? 'group-hover:scale-110' : ''} transition-transform duration-500`}
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://api.whatsapp.com/send/?phone=5521985756901&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleContactClick}
            className="bg-brand-green text-white px-12 py-5 rounded-full text-lg font-bold hover:bg-brand-dark transition-all shadow-xl shadow-brand-green/20 uppercase tracking-widest inline-block"
          >
            Reserve sua vaga agora
          </a>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "O curso é indicado para quem está começando agora?",
      answer: "Sim! O Método Cabeleireiro Científico Formulador foi estruturado para levar o profissional do zero absoluto até a maestria na formulação. Se você já tem experiência, aprenderá a elevar seu nível técnico com ciência aplicada."
    },
    {
      question: "O certificado é reconhecido?",
      answer: "Sim. Ao concluir o curso, você receberá o certificado de conclusão emitido pela In'Nova Educação Profissional, reconhecido pelo MEC e em todo o território nacional como um selo de excelência técnica."
    },
    {
      question: "Terei suporte após as aulas?",
      answer: "Com certeza. Além do suporte direto com a Profª Neide Dólia durante o curso, você terá acesso à nossa comunidade exclusiva de alunos para troca de experiências e dúvidas contínuas."
    },
    {
      question: "O curso foca apenas em teoria ou tem prática?",
      answer: "O curso é extremamente prático. Você aprenderá a realizar diagnósticos precisos e a 'mão na massa' na bancada, criando fórmulas que entregam resultados imediatos na saúde capilar dos seus clientes."
    }
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section id="duvidas" className="py-24 bg-brand-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-serif text-brand-dark uppercase mb-4">Dúvidas Frequentes</h2>
          <p className="text-brand-dark/60 font-serif italic">Tudo o que você precisa saber para transformar sua carreira</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="border border-black/5 rounded-2xl overflow-hidden bg-white shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-brand-green/5 transition-colors"
              >
                <span className="text-lg font-serif font-semibold text-brand-dark pr-8">{faq.question}</span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openIndex === idx ? 'bg-brand-green text-white' : 'bg-brand-dark/5 text-brand-dark'}`}>
                  {openIndex === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 pb-6 text-brand-dark/70 leading-relaxed border-t border-black/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-dark/60 mb-6">Ainda tem alguma dúvida específica?</p>
          <a
            href="https://api.whatsapp.com/send/?phone=5521985756901&text=Olá, tenho uma dúvida sobre o curso CCF"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleContactClick}
            className="inline-flex items-center gap-2 text-brand-green font-bold hover:text-brand-dark transition-colors border-b-2 border-brand-green pb-1"
          >
            Fale diretamente conosco no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contato" className="bg-brand-dark text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-b border-white/10 pb-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              Torne-Se Um Cabeleireiro <br />
              <span className="text-brand-green italic">Científico Formulador</span>
            </h2>
            <p className="text-white/60 text-lg max-w-md">
              Garanta Sua Vaga No Curso Que Já Transformou A Carreira De Milhares De Profissionais No Brasil.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
            <a
              href="https://api.whatsapp.com/send/?phone=5521985756901&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleContactClick}
              className="bg-brand-green text-white px-10 py-4 rounded-full font-bold hover:bg-white hover:text-brand-dark transition-all text-center"
            >
              Fale Conosco no WhatsApp
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-12 border-b border-white/10">
          <div className="flex flex-col gap-4">
            <h4 className="text-brand-green font-bold tracking-widest uppercase text-sm">Contate-nos</h4>
            <div className="flex flex-col gap-2">
              <a href="mailto:ccformuladorj@gmail.com" className="text-white/80 hover:text-brand-green transition-colors">
                ccformuladorj@gmail.com
              </a>
              <a href="tel:+5521985756901" className="text-white/80 hover:text-brand-green transition-colors">
                (21) 98575-6901
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-brand-green font-bold tracking-widest uppercase text-sm">Localização</h4>
            <p className="text-white/80">
              Rio de Janeiro, RJ<br />
              Brasil
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-brand-green font-bold tracking-widest uppercase text-sm">Horário</h4>
            <p className="text-white/80">
              Segunda - Sexta: 09h às 18h<br />
              Sábado: 09h às 13h
            </p>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center">
            <Image
              src="/images/logo_ccf_branco.svg"
              alt="CCF Logo"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
          </div>

          <div className="text-white/40 text-xs tracking-widest uppercase">
            © 2026 Todos os direitos reservados.
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/profneidedolia/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-white/60 hover:text-brand-green transition-colors uppercase tracking-widest"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/cformuladorj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-white/60 hover:text-brand-green transition-colors uppercase tracking-widest"
            >
              Facebook
            </a>
            <a
              href="https://youtu.be/rULnlCvdvaE?si=ut4OzBkVJEM8MK9A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-white/60 hover:text-brand-green transition-colors uppercase tracking-widest"
            >
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=5521985756901&text&type=phone_number&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleContactClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl z-50 group cursor-pointer"
      title="Fale conosco no WhatsApp"
    >
      <svg
        viewBox="0 0 24 24"
        className="w-8 h-8 text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      <div className="absolute -top-12 right-0 bg-brand-dark text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none shadow-xl">
        WhatsApp
        <div className="absolute bottom-0 right-6 translate-y-1/2 w-2 h-2 bg-brand-dark rotate-45" />
      </div>
    </motion.a>
  );
};

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductCarousel />
      <About />
      <IEPSection />
      <Features />
      <Method />
      <MethodBooksBanner />
      <Testimonials />
      <Agenda />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
