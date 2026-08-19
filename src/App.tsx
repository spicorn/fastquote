import { Contact } from './components/Contact'
import { Customers } from './components/Customers'
import { Faq } from './components/Faq'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { HowItWorks } from './components/HowItWorks'
import { Pricing } from './components/Pricing'
import { ScrollProgress } from './components/ScrollProgress'
import { asset } from './asset'
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
        <Customers />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <footer className="fq-footer">
        <div className="fq-wrap fq-footer__row">
          <img
            src={asset('brand/fastquote-logo.png')}
            alt="Fastquote"
            width={160}
            height={28}
          />
          <p>© {new Date().getFullYear()} Fastquote</p>
        </div>
      </footer>
    </div>
  )
}

export default App
