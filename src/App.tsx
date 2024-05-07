import './App.css'
import TopBar from './components/TopBar'
import Main from './components/Main'
import Footer from './components/Footer'
import Friends from './components/Friends'

function App() {
  return (
    <div className="blog-fe">
      <TopBar />
      <div className="middle">
        <div></div>
        <Main />
        <Friends />
      </div>
      <Footer />
    </div>
  )
}

export default App
