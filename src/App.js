import './App.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './page/HomePage/Home'
const App = () => {
  return (
    <div
      style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
    >
      <div className='container'>
        <Header />
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
