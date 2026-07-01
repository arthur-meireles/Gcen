import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import './CTA.css';

const EASE = [0.16, 1, 0.3, 1];

const WHATSAPP_NUMBER = '5567000000000';
const CONTACT_EMAIL = 'contato@gcen.com.br';

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
  </svg>
);

export default function CTA() {
  const [form, setForm] = useState({ nome: '', email: '', telefone: '', mensagem: '' });
  const reduce = useReducedMotion();

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const whatsappHref = () => {
    const text =
      `Olá! Sou ${form.nome || '(nome)'} e gostaria de falar com a GCEN.` +
      (form.mensagem ? `\n\n${form.mensagem}` : '');
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = `Contato pelo site - ${form.nome}`;
    const body =
      `Nome: ${form.nome}\n` +
      `E-mail: ${form.email}\n` +
      `Telefone: ${form.telefone}\n\n` +
      `${form.mensagem}`;
    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contato" className="cta">
      <div className="cta__overlay" aria-hidden="true" />
      <div className="cta__inner">
        <motion.div
          className="cta__intro"
          initial={reduce ? false : { opacity: 0, x: -40 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <span className="cta__tag">Fale Conosco</span>
          <h2 className="cta__title">
            Vamos conversar sobre<br />
            o seu <span className="accent-ribbon"><span>negócio</span></span>
          </h2>
          <p className="cta__text">
            Preencha o formulário ou chame a GCEN no WhatsApp. Nossos especialistas
            respondem produtores, investidores e parceiros de todo o Brasil.
          </p>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="cta__whatsapp"
          >
            <span className="cta__whatsapp-icon">
              {!reduce && (
                <motion.span
                  className="cta__whatsapp-ring"
                  aria-hidden="true"
                  animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeOut' }}
                />
              )}
              <WhatsAppIcon />
            </span>
            Falar no WhatsApp
          </a>
        </motion.div>

        <motion.form
          className="cta__form"
          onSubmit={handleSubmit}
          initial={reduce ? false : { opacity: 0, x: 40 }}
          whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.12, ease: EASE }}
        >
          <div className="cta__field">
            <label htmlFor="cta-nome">Nome</label>
            <input id="cta-nome" name="nome" type="text" value={form.nome} onChange={update} required autoComplete="name" />
          </div>
          <div className="cta__field">
            <label htmlFor="cta-email">E-mail</label>
            <input id="cta-email" name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
          </div>
          <div className="cta__field">
            <label htmlFor="cta-telefone">Telefone</label>
            <input id="cta-telefone" name="telefone" type="tel" value={form.telefone} onChange={update} autoComplete="tel" />
          </div>
          <div className="cta__field">
            <label htmlFor="cta-mensagem">Mensagem</label>
            <textarea id="cta-mensagem" name="mensagem" rows="4" value={form.mensagem} onChange={update} required />
          </div>
          <button type="submit" className="cta__submit btn-wipe">
            Enviar mensagem
            <svg className="cta__submit-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </motion.form>
      </div>
    </section>
  );
}
