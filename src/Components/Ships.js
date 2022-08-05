
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import errorImg from '../images/error.png'
import spinnerImg from '../images/spinner.gif'

const Ships = () => {


  const [ships, setShips] = useState([])

  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('https://www.rijksmuseum.nl/api/en/collection?key=KzSd11Gm&type=fully%20rigged%20model&imgonly=True&toppieces=true&ps=50')

        console.log(data)
        setShips(data.artObjects)
      } catch (err) {
        console.log(err)
        setError(true)
      }
    }
    getData()
  }, [])

  return (
    <Container as='main'>
      <h1>Ships</h1>
      <Row>
        {ships.length > 0 ?
          <>
            {ships.map(ship => {
              const { title, id, objectNumber } = ship
              const { url } = ship.webImage
              return (
                <Col className="mb-4" md='3' key={id}>
                  <Link className="mb-4" to={`/${objectNumber}`}>
                    <Card className='card ship'>
                      <Card.Img variant='top' className='w-100' src={url}></Card.Img>
                      <Card.Body><Card.Title>{title}</Card.Title></Card.Body>
                    </Card>
                  </Link>
                </Col>
              )
            })}
          </>
          :
          <h1>
            {error ? <img src={errorImg} alt='error img'/> : <img src={spinnerImg} alt='load img'/>}
          </h1>
        }

      </Row>
    </Container >


  )



}
export default Ships