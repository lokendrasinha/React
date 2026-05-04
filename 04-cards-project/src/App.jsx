import React from 'react'
import { Bookmark } from 'lucide-react';
import './app.css'
const App = () => {
  return (
    <div className='parent'>
      <div className="card">
        <div >
          <div className="top">
          <img src="https://logocreator.io/wp-content/uploads/2023/11/01cada77a0a7d326d85b7969fe26a728-768x803.jpg" alt="" />
          <button>Save<Bookmark size={16} color='#b1b1b1' /></button>
        </div>
        <div className="center">
          <h3>Amazon <span>5 days ago</span></h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div></div>
        <div className="bottom">
          <div>
              <h3>$120/hr</h3>
              <p>Mumbai, India</p>
          </div>
            <button>Apply Now</button>
          
        </div>

      </div>
    </div>
  )
}

export default App