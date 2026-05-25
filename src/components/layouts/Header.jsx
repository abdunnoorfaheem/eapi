import React from 'react'
import Container from '../Container'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
     
     <section>
      <Container>
        <div className="flex justify-between items-center py-4">
          <div className="">Logo</div>
          <div className="">
            <ul className='flex gap-x-8'>
              <li><Link to={"/"}>Home</Link></li>
              <li>About</li>
              <li><Link to={"/products"}>Products</Link></li>
              <li>Blog</li>
              <li>Service</li>

            </ul>
          </div>
          <div className="">
            <div className="">
              <button>Contact</button>
            </div>
          </div>
        </div>
      </Container>
     </section>
    </>
  )
}

export default Header