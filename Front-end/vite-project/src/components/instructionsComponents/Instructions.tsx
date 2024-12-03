import React from 'react'
import './Instructions.css'
const Instructions = () => {
  return (
    <div className='instructions-container'>
      <div className='inner-instructions-container'>
        <div className='instructions'>
          <div className="logo-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert logo1">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
              <path d="M12 9v4"></path>
              <path d="M12 17h.01"></path>
            </svg>
            <h3 className="h3-class">הנחיות למילוי המנילה</h3>
          </div>
          <div className="animation-container">
            <div className="animation-line">
              <span>5</span>
              <div className="moving-line-container">
                <div className="moving-line"></div>
              </div>
              <span>1</span>
            </div>
            <div className="If604jsx">
              <span>5 - רוצה מאוד</span>
              <span>1 - לא רוצה בכלל</span>
            </div>
          </div>
          <div className="p1">
            <p>צה"ל אינו מתחייב לשבץ אתכם על פי העדפותיכם, אך אנו עושים מאמץ להתחשב בהן</p>
          </div>
          <div className="p2">
            <p>מילוי הערות אישיות מגדיל את הסיכוי שנוכל להתאים את השיבוץ להעדפותיכם</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instructions

