import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <Container className='hero' as='main'>
      <h1>Welcome to the Rijks Museum</h1>
      <Link className='btn homebtn' to='/paintings'> Paintings</Link>
      <Link className='btn homebtn' to='/sculptures'> Sculptures</Link>
      <Link className='btn homebtn' to='/ships'> Ships</Link>
    </Container>
  )

}
export default Home