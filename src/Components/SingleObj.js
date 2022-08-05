import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const SingleObj = () => {
  const { num } = useParams()
  console.log(num)

  const navigate = useNavigate()
  const handleClick = () => {
    
    navigate(-1)
  }

  const [object, setObject] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://www.rijksmuseum.nl/api/en/collection/${num}?key=KzSd11Gm`)
        setObject(data.artObject)
        console.log(data, 'SINGLE')
        console.log(object.webImage.url)
      } catch (err) {
        console.log(err)
        setErrors(true)
      }
    }
    getData()
  }, [])

  return (

    <Container>
      <Row>
        {object ?
          <>
            <h1>{object.title}</h1>
            <Col md="6">
              {/*insomnia:  $.artObject.webImage.url */}
              {object && object.webImage && <img className='singleImg' src={object.webImage.url} alt={object.title} />}
            </Col>
            <Col md="6 h-75">
              <h3><span>🧑‍🎨 </span> Artist</h3>
              <p className='artist'>{object.principalMaker}</p>
              <hr />
              {/* Description */}
              <h3>Description</h3>
              <p>{object.plaqueDescriptionEnglish ? object.plaqueDescriptionEnglish : object.longTitle}</p>
              <hr />
              <h3>Dimensions</h3>
              <p>{object.subTitle}</p>
              <hr />
              {/* Link back to all object */}

              <button className='btn' onClick={handleClick}>Go Back</button>

              {/* <Link to="/paintings" className='btn dark'>Back to all paintings</Link> */}
              {/* <Link to={`/${num}/${painting.principalMaker}`} className='btn dark'>More from this artist</Link> */}
            </Col>
          </>
          :
          <h2>
            {errors ? 'Something went wrong' : 'Loading...'}
          </h2>
        }
      </Row>
    </Container>
  )
}
export default SingleObj