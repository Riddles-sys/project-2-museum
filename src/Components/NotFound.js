import { Link } from 'react-router-dom'


const NotFound = () => {
  return (
    <>
      <h1>Page not found</h1>
      <Link to='/'>Back Home</Link>
    </>
  )
}

export default NotFound