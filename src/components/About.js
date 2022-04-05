import React,{useState} from 'react'

export default function About() {
    const [myStyle, setmyStyle] = useState({
        color:'black',
        backgroundColor:'white',
        border:'1px solid white'
    })
    const [btnText, setbtnText] = useState('Enable Dark Mode')
    let toggleStyle=()=>
    {
        if(myStyle.color==='black'){
            setmyStyle({
                color:'white',
                backgroundColor:'black',
                border:'1px solid white'
            })
            setbtnText("Enable Light Mode")
        }
        else {
            setmyStyle({
                color:'black',
                backgroundColor:'white'
            })
            setbtnText("Enable Dark Mode")
        }
    }
  return (
    <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" >
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Feature 1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils helps the user to convert a text into uppercase or lowercase.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Feature 2
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        TextUtils helps the user to remove all the numbers present inside the entered text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Function 3 
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      It also helps the user to remove all the extra spaces present inside the entered text.
      </div>
    </div>
  </div>
</div>
<div className="container my-3"></div>
<button onClick={toggleStyle} type="button" class="btn btn-primary">{btnText}</button>
    </div>
  )
}
