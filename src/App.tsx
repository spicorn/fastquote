import { Contact } from './components/Contact'
import { Faq } from './components/Faq'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Modules } from './components/Modules'
import { Preview } from './components/Preview'
import { ScrollProgress } from './components/ScrollProgress'
import { Stories } from './components/Stories'
import './App.css'

function App() {
  return (
    <div className="fq-page" id="top">
      <a className="fq-skip" href="#main">
        Skip to content
      </a>
      <ScrollProgress />
      <Header />
      <main id="main">
        <Hero />
        <HowItWorks />
        <Modules />
        <Preview />
        <Stories />
        <Faq />
        <Contact />
      </main>
      <footer className="fq-footer">
        <div className="fq-wrap fq-footer__row">
          <img
            src="/brand/fastquote-logo.png"
            alt="Fastquote"
            width={160}
            height={28}
          />
          <p>© {new Date().getFullYear()} Fastquote. Quotes that land.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
