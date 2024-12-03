import { FC } from 'react'
import './Intro.css'

const FormHeader:FC = () => {
  return (
    <div className='form-header-container'>
        <div className='img-container'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Cannon_fire_-_M109_self-propelled_howitzer.jpg/800px-Cannon_fire_-_M109_self-propelled_howitzer.jpg" alt="Artillery" className="header-img"></img>
        </div>
        <div className='text-container'>
            <h2 className="header-h2">טופס העדפות שירות צבאי</h2>
            <p className="header-text">מלא את העדפותיך לשירות הצבאי</p>
        </div>
    </div>
  )
}

export default FormHeader