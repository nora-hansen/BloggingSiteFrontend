import './App.css'
import TopBar from './components/TopBar/TopBar'
import Main from './components/Main/Main'
import Footer from './components/Footer/Footer'
import Friends from './components/Friends/Friends'

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
