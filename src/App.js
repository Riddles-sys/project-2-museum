import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './Components/NotFound'
import Home from './Components/Home'
import Paintings from './Components/Paintings'
import Header from './Components/Header'
import SingleObj from './Components/SingleObj'
import FooterPage from './Components/FooterPage'
import Sculptures from './Components/Sculptures'
import Ships from './Components/Ships'

const App = () => {
  return (
    <div className="site-wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/paintings" element={<Paintings />} />
          <Route path="/:num" element={<SingleObj />} />
          <Route path="/sculptures" element={<Sculptures />}/>
          <Route path="/ships" element={<Ships />}/>
          {/* <Route path="/" element={< />}/> */}
          <Route path="/*" element={<NotFound />} />
        </Routes>
        <FooterPage />
      </BrowserRouter>
    </div>

  )
}

export default App