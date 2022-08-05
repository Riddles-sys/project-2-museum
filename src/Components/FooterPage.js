import { Link } from 'react-router-dom'

const FooterPage = () => {
  return (
    <footer className="footer mt-auto">
      <div className="container d-flex justify-content-between">
        <a target='_blank' rel="noreferrer" href='https://github.com/Riddles-sys'>Ridwan Arshad</a>
        {/* target + rel -> opens in a new tab */}
        <a target='_blank' rel="noreferrer" href='https://www.rijksmuseum.nl/en'>Explore more of the Museum</a> 
        <a target='_blank' rel="noreferrer" href='https://github.com/silverjana'>Arianna Giordano</a>
      </div>
    </footer>
  )
}
export default FooterPage