import React from "react";
import './Countdown.css';
import moment from 'moment';

export default class Countdown2 extends React.Component {
    state = {
        minutes: undefined,
        seconds: undefined
    }
    
    componentDidMount() {
        this.interval = setInterval(() => {
            const {minutes, seconds} = this.props;
            this.setState({minutes, seconds});
        }, 1);
    }

    componentWillUnmount() {
        if(this.interval) {
            clearInterval(this.interval);
        }
    }
    
    render() {
        const { minutes, seconds } = this.state;
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

        return (
            <div>
                <div className='countdown-wrapper'>
                        <div className='countdown-item'>
                            <SVGCircle radius={minutesRadius} />
                            {minutes} 
                            <span>minutes</span>
                        </div>
                        <div className='countdown-item'>
                            <SVGCircle radius={secondsRadius} />
                            {seconds} 
                            <span>seconds</span>
                        </div>
                </div>
            </div>
        );
    }
}

const SVGCircle = ({ radius }) => (
    <svg className='countdown-svg'>
        <path fill="none" stroke="#333" stroke-width="4" d={describeArc(50, 50, 48, 0, radius)}/>
    </svg>
);

// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}

// Stackoverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
  return (number - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}