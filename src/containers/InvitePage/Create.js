import React from 'react';
import "./Create.css";
import part from './part.png';

class Create extends React.Component {

    componentDidMount(){
        document.body.style.backgroundColor ="#2E2929";// Set the style
    }

    render() {
        return (
            <div>
                <div style={{float:"left",width:"59%",marginTop:"5%"}}>
                   <h1 className="text-inv">Invite Your Friends!</h1> 
                   <form>
                   <label className="label-inv">Meeting Link</label>
                   <input className="id-inv" type="text" name="name"/>
                   <label className="label-inv">Meeting Code</label>
                   <input className="id-inv" type="text" name="name"/>
                   <button className="button-inv" type="submit">Start Workout</button>
                   </form>
                </div>
                <div class="vl"></div>
                <div style={{float:"right",width:"39%",marginTop:"5%"}}>
                   <h1 className="text-inv">Participants</h1> 
                   <img src={part} style={{width:"60%"}}/>
                </div>
            </div>
        )
    }

}

export default Create;