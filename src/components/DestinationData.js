import { Component } from "react";
import "./DestinationStyle.css";
class DestinationData extends Component
{
    render(){
        return(
            <div className={this.props.className}>
            <div className="des-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text1}</p>
            </div>
            <div className="image">
                <img alt="this taal volcano" src={this.props.img1}/>
            <img alt="2" src={this.props.img2}/>
            </div>
        </div>

        )
    }
}
export default DestinationData;
