const { Component } = React;
const { Spring } = ReactSpring;



// create a form with a simple structure
// absolute positioned in the center of the screen
const Label = styled.form`
  position: absolute;
  left: 50%;
  top: 25%;
  transform: translate(-50%, -50%);
  padding: 1.2rem 0.8rem;
  box-shadow: 0 0 0 2px #0088ff;
  background: #03031b;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 2;
`;
const LabelText = styled.label`
  color: #fff;
  font-size: 0.7rem;
  margin: 0.25rem 0;
`;

const LabelInput = styled.input`
  background: none;
  border: none;
  border-left: 2px solid #0088ff;
  border-radius: 1px;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 0.25rem 0.75rem;
  color: #fff;


`;
const OutputLabel = ({ label, handleTimerLabelInput }) => {
  return (
    React.createElement(Label, {
      onSubmit: handleTimerLabelInput },
    React.createElement(LabelText, null, "Timer's Label"),
    React.createElement(LabelInput, {
      type: "text",
      placeholder: label })));



};



// show the countdown timer through an SVG element, displaying the countdown in a text element
// wrap the text in a path element, animated to display the theme color as the timer progresses
const OutputDisplay = ({ total, timeTotal, label, isLabel, handleTimerLabel, handleTimerLabelInput }) => {
  // create the number of seconds, minutes and hours from timeTotal
  let s = timeTotal;
  let m = 0;
  let h = 0;
  while (s >= 60) {
    s -= 60;
    m += 1;
  }

  while (m >= 60) {
    m -= 60;
    h += 1;
  }
  // show the hours, minutes, seconds one after the other
  // using the unchanged value representing the total time, describe the amount of time only necessary
  // meaning, if the total is less than an hout, don't show the hour's label
  const time = {};
  if (total >= 3600) {
    time.h = h;
  }
  if (total >= 60) {
    time.m = m;
  }
  time.s = s;

  // detail the entries of the time object
  const timeValues = Object.entries(time);
  // create a text element for each array displaying the label and amount of time
  const Text = timeValues.map((entry, index) => {
    // with 3 items, show them at 25, 50, 75%
    // with 2, at 33, 66%
    const position = 90 / (timeValues.length + 1) * (index + 1);
    return (
      React.createElement("text", {
        x: position,
        y: "50",
        fill: "#0088ff",
        alignmentBaseline: "middle",
        textAnchor: "middle",
        key: entry[0],
        fontWeight: "bold",
        fontSize: "1rem" },

      entry[1],
      React.createElement("tspan", {
        fontSize: "0.35rem",
        alignmentBaseline: "hanging" },

      entry[0])));



  });

  // to animate the path, its length is necessary to animate it into view
  // as the path describes a circle, the length is equal to the perimeter of the circle
  const perimeter = 43 * 2 * 3.14;

  // use a variable ranging between 0-1 to show the colored circle atop the white one
  // animating the strokeDashoffset property until it is equal to strokeDasharray
  const progress = 1 - timeTotal / total;
  // use the same value for the circle element, to rotate it as the path is animated
  // 0-1 range --> 0-360 range
  const transform = `rotate(-${progress * 360}) translate(0 -43) rotate(${progress * 360})`;


  return (
    React.createElement(React.Fragment, null,




    isLabel &&
    React.createElement(OutputLabel, {
      label: label,
      handleTimerLabelInput: handleTimerLabelInput }),


    React.createElement("svg", { viewBox: "0 0 100 100", width: "70%" },

    React.createElement("g", { transform: "translate(5 5)" },


    React.createElement("path", {
      d: "M 45 2 a 43 43 0 0 0 0 86 a 43 43 0 0 0 0 -86",
      stroke: "#fff",
      strokeWidth: "2",
      fill: "none",
      shapeRendering: "geometricPrecision" }),


    React.createElement("path", {
      d: "M 45 2 a 43 43 0 0 0 0 86 a 43 43 0 0 0 0 -86",
      stroke: "#0088ff",
      strokeWidth: "2",
      strokeDasharray: perimeter,
      strokeDashoffset: perimeter - perimeter * progress,
      fill: "none",
      shapeRendering: "geometricPrecision" }),



    React.createElement("circle", {
      r: "3.2",
      cx: "45",
      cy: "45",
      fill: "#0088ff",
      transform: transform }),



    React.createElement("text", {
      x: "45",
      y: "30",
      fill: "#fff",
      alignmentBaseline: "middle",
      textAnchor: "middle",
      fontSize: "0.35rem",
      onClick: handleTimerLabel },

    label),


    Text))));






};



// fabricate the round button nesting the SVG for the start of the timer
const TimerButton = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  padding: 0.6rem;
  color: #0088ff;
  background: #0088ff;
  box-shadow: 0 1px 5px -2px #0088ff;
  &:hover {
    transition: box-shadow 0.2s ease-out;
    box-shadow: 0 1px 5px 0px #0088ff;
  }
`;

/*
   div displaying the contents of the two interfaces in a single column layout
   horizontally centered
   */
const OutputContainer = styled.div`
  max-width: 380px;
  width: 90vw;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const OutputControls = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-column-gap: 2rem;
  grid-template-columns: repeat(3, 80px);
  align-items: center;
  justify-items: center;
`;

const TimerOutput = ({ total, timeTotal, label, isLabel, isPlaying, handleTimerToggle, handleTimerNew, handleTimerAdd, handleTimerReset, handleTimerLabel, handleTimerLabelInput }) => {
  // render the display atop a series of buttons enabling the project's functionalities
  return (
    React.createElement(Spring, {
      from: { opacity: 0, transform: 'translateY(2.5rem)' },
      to: { opacity: 1, transform: 'translateY(0)' } },


    ({ opacity, transform }) =>


    React.createElement(OutputContainer, {
      style: { opacity, transform } },

    React.createElement(OutputDisplay, {
      total: total,
      timeTotal: timeTotal,
      label: label,
      isLabel: isLabel,
      handleTimerLabel: handleTimerLabel,
      handleTimerLabelInput: handleTimerLabelInput }),


    React.createElement(OutputControls, null,


    React.createElement("button", {
      onClick: handleTimerNew }, "New Timer"),





    React.createElement(TimerButton, {
      onClick: handleTimerToggle },


    isPlaying ?

    React.createElement("svg", {
      viewBox: "0 0 100 100" },

    React.createElement("rect", {
      x: "30",
      y: "30",
      width: "10",
      height: "40",
      stroke: "#eee",
      strokeWidth: "6px",
      fill: "currentColor" }),

    React.createElement("rect", {
      x: "60",
      y: "30",
      width: "10",
      height: "40",
      stroke: "#eee",
      strokeWidth: "6px",
      fill: "currentColor" })) :





    React.createElement("svg", {
      viewBox: "0 0 100 100" },

    React.createElement("path", {
      d: "M 40 30 l 30 20 l -30 20 Z",
      stroke: "#eee",
      strokeWidth: "7px",
      fill: "currentColor" }))),







    isPlaying ?
    React.createElement("button", {
      onClick: handleTimerAdd }, "Add +1:00") :






    React.createElement("button", {
      onClick: handleTimerReset }, "Reset Timer")))));














};


// display the time and the button removing the last digit side by side
const Input = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #ffffff11;
  transition: color 0.2s ease-out;
  // style the color of the text (and the svg element through the currentColor property) based on the props boolean
  color: ${props => props.isInput ? '#ffffff' : '#ffffff55'};
`;

// display the span elements side by side, in a heading stretching to occupy as much space as available
const InputTime = styled.h2`
  flex-grow: 1;
  display: flex;
  font-size: 2rem;
  font-weight: 500;
`;
const InputSpan = styled.span`
  flex-grow: 1;
  width: 0;
  margin: 0 0.75rem;
  position: relative;

  // add the short label for hours, minutes, seconds by accessing the suffix argument passed through props
  &:after {
    content: '${props => props.suffix}';
    font-size: 0.8rem;
    margin-left: 0.15rem;
  }
`;

const InputButton = styled.button`
  width: 70px;
  height: 50px;
  padding: 0.3rem;
`;

// function formatting the time, to always show two digits (zero-padded values)
function formatTime(time) {
  return time >= 10 ? time : `0${time}`;
}


const InputDisplay = ({ isInput, time, handleDialBack }) => {
  // create three span elements out of the hours, minutes and seconds depicted in the time object
  /* structured as follows
  {
    h,
    m,
    s
  }
  */
  const InputPair = Object.entries(time);
  const InputSpans = InputPair.map((pair) =>
  React.createElement(InputSpan, {
    key: pair[0],
    suffix: pair[0] },

  formatTime(pair[1])));




  return (
    React.createElement(Input, {
      isInput: isInput },

    React.createElement(InputTime, null,

    InputSpans),




    React.createElement(InputButton, {
      onClick: handleDialBack },

    React.createElement("svg", {
      viewBox: "0 0 100 100" },

    React.createElement("path", {
      d: "M 50 37.5 l 25 25",
      strokeWidth: "5px",
      stroke: "currentColor",
      fill: "none" }),


    React.createElement("path", {
      d: "M 50 62.5 l 25 -25",
      strokeWidth: "5px",
      stroke: "currentColor",
      fill: "none" }),


    React.createElement("path", {
      d: "M 40 20 h 50 v 60 h -50 l -20 -30 Z",
      strokeWidth: "5px",
      stroke: "currentColor",
      fill: "none" })))));




};




// in the dial show the digits from 0 to 9, in a grid
const Dial = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 85%;
  grid-gap: 1.8rem 1rem;
	margin-bottom: 1.25rem;
`;

// for the digits, these are included through buttons styled to change their appearance on hover/focus
const Digit = styled.button`
  font-size: 2rem;
  transition: all 0.2s ease-out;
  font-weight: 600;
  position: relative;
  color: #ffffff55;
	// for the focus and active state substitute the default outline highlighting the button through a fully opaque color and a pseudo element
	outline: none;
  // push the first digit, 0, to the very bottom of the timer
  &:nth-of-type(1) {
    grid-row: 4/5;
    grid-column: 1/-1;
  }
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    transform:  translate(-50%, -50%) scale(0);
    background: #fff;
    border-radius: 50%;
  }
  &:hover, &:focus {
    color: #fff;
  }
  &:hover:before, &:focus:before {
    transition: all 0.2s ease-out;
    // transition occurring only as the mouse hovers in the element
    transition-delay: 0.1s;
    transform:  translate(-50%, -50%) scale(1);
    opacity: 0;
  }
`;

const InputDial = ({ handleDial }) => {
  // create an array of ten items, including the digits from 0 to 9 in the styled button
  const Digits = [];
  for (let i = 0; i < 10; i += 1) {
    Digits.push(
    React.createElement(Digit, {
      key: i,
      onClick: handleDial },

    i));


  }
  return (
    React.createElement(Dial, null,

    Digits));



};


/*
   div displaying the contents of the two interfaces in a single column layout
   horizontally centered
   */
const InputContainer = styled.div`
  max-width: 380px;
  width: 90vw;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const TimerInput = ({ input, time, handleDial, handleDialBack, handleTimerStart }) => {
  // render the display atop the dial and the button
  return (
    React.createElement(Spring, {
      from: { opacity: 0, transform: 'translateY(-2.5rem)' },
      to: { opacity: 1, transform: 'translateY(0)' } },


    ({ opacity, transform }) =>

    React.createElement(InputContainer, {
      style: { opacity, transform } },




    React.createElement(InputDisplay, {
      isInput: input.length !== 0,
      time: time,
      handleDialBack: handleDialBack }),




    React.createElement(InputDial, {
      handleDial: handleDial }),




    input &&
    // start the timer when clicking the button
    React.createElement(TimerButton, { onClick: handleTimerStart },
    React.createElement("svg", { viewBox: "0 0 100 100" },
    React.createElement("path", {
      d: "M 40 30 l 30 20 l -30 20 Z",
      stroke: "#eee",
      strokeWidth: "7px",
      fill: "currentColor" }))))));










};


/*
   div displaying the contents of the two interfaces in a single column layout
   horizontally centered
   */

// main component rendered through index.js
class Timer extends Component {
  constructor(props) {
    super(props);
    /* in the state specify the following
                  - input, keeping track of the digits included through the dial in a string
                  - time, keeping track of the number of hours, minutes and seconds in an object
                  - timeTotal, keeping track of the number of seconds specified through the time object
                  - total, to save the total number of seconds and use it to reset the timer to this value
                  - label, a string describing the text shown in the output
                  - isTimer, to show the input or output interface
                  - isPlaying, to toggle between play and pause in the output interface
                  - isLabel, to toggle the label component
                  */
    this.state = {
      input: '',
      time: {
        h: 0,
        m: 0,
        s: 0 },

      timeTotal: 0,
      total: 0,
      label: 'Label',
      isTimer: false,
      isPlaying: false,
      isLabel: false };


    // bind the functions to update the state and enable the timer's functionalities
    this.handleDial = this.handleDial.bind(this);
    this.handleDialBack = this.handleDialBack.bind(this);
    this.handleTimerStart = this.handleTimerStart.bind(this);
    this.handleTimerToggle = this.handleTimerToggle.bind(this);
    this.handleTimerAdd = this.handleTimerAdd.bind(this);
    this.handleTimerNew = this.handleTimerNew.bind(this);
    this.handleTimerReset = this.handleTimerReset.bind(this);
    this.handleTimerLabel = this.handleTimerLabel.bind(this);
    this.handleTimerLabelInput = this.handleTimerLabelInput.bind(this);
  }

  // function updating time and TimeTotal, on the basis of the 6 letters top string
  updateTime(input) {
    // based on the input string, create a six-letter long string (adding 0 at the beginning)
    const inputTime = input.padStart(6, 0);
    // separate the hours, minutes and seconds
    let h = parseInt(inputTime.substring(0, 2), 10);
    let m = parseInt(inputTime.substring(2, 4), 10);
    let s = parseInt(inputTime.substring(4));
    // compute the total
    const timeTotal = h * 60 * 60 + m * 60 + s;

    const time = {
      h,
      m,
      s };


    // update the object and the integer
    this.setState({
      time,
      timeTotal,
      total: timeTotal });

  }

  // function handling a press on the dial's buttons
  handleDial(e) {
    // retrieve the button's text element (0-9 value)
    const { textContent } = e.target;
    // retrieve the input from the state
    let { input } = this.state;
    const { length } = input;
    // if the button pressed is 0 and the input doesn't already have a value, preemptively exit the function
    if (textContent === '0' && length === 0) {
      return;
    }
    // if the input is less than 6 characters long (hhmmss), add the digit to the input string and update the state
    if (length < 6) {
      input += textContent;
      this.setState({
        input });

      // update the time and timeTotal
      this.updateTime(input);
    }
  }

  // function handling a press on the dial's back button
  handleDialBack(e) {
    // retrieve the input from the state
    let { input } = this.state;
    const { length } = input;
    // if input has at least a character, remove the last digit
    if (length > 0) {
      input = input.substring(0, length - 1);
      // update the state
      this.setState({
        input });

    }
    // update the time and timeToal
    this.updateTime(input);
  }


  // function starting the timer
  startTimer() {
    // start a timer from timeTotal, decreasing its value one second at a time
    this.intervalID = setInterval(() => {
      let { timeTotal } = this.state;
      timeTotal -= 1;
      this.setState({
        timeTotal: timeTotal });

      // when reaching 0, clear the interval
      if (timeTotal === 0) {
        clearInterval(this.intervalID);
      }
    }, 1000);
  }

  // function handling a press on the button starting the timer
  handleTimerStart() {
    // update the UI showing the output interface and the pause button
    this.setState({
      isTimer: true,
      isPlaying: true });

    // start the timer
    this.startTimer();
  }

  // function handling a press on the button pausing/starting the timer
  handleTimerToggle() {
    // based on the isPlaying boolean stop the interval or start it anew
    const { isPlaying } = this.state;
    if (isPlaying) {
      clearInterval(this.intervalID);
    } else
    {
      this.startTimer();
    }
    // update the UI of the button
    this.setState({
      isPlaying: !this.state.isPlaying });

  }

  // function handling a press on the +1:00 button
  handleTimerAdd() {
    // add a minute to the total
    const { timeTotal, total } = this.state;
    this.setState({
      timeTotal: timeTotal + 60,
      total: total + 60 });

  }

  // function handling a press on the new timer button
  handleTimerNew() {
    // stop the ongoing interval, if there's one
    clearInterval(this.intervalID);
    // reset the input and update the state showing the input UI
    const input = '';
    this.setState({
      isTimer: false,
      input });

    // update the time with the now empty input
    this.updateTime(input);
  }

  // function handling a press on the reset button
  handleTimerReset() {
    // stop the ongoing interval
    clearInterval(this.intervalID);
    // retrieve the input value
    const { input } = this.state;

    // update the timer with the old existing value and start the timer
    this.updateTime(input);
    this.handleTimerStart();
  }

  // function handling a press on the label text
  handleTimerLabel() {
    this.setState({
      isLabel: true });

  }
  // function handling input in the label component
  handleTimerLabelInput(e) {
    e.preventDefault();
    // update the label with the input value
    const { value: label } = e.target.querySelector('input');
    if (label) {
      this.setState({
        label,
        isLabel: false });

    }
  }

  render() {
    // destructure the necessary information from the state
    const { input, time, isTimer, isPlaying, timeTotal, total, label, isLabel } = this.state;

    // based on the boolean show the input or output component
    return (
      React.createElement("div", null,


      isTimer ?


      /* TimerOutput
                displaying the countdown timer through **timeTotal**
                showing the pause/play button according to **isPlaying**
                handling functionalities such as pausing/starting the timer, adding a minute, resetting and finally removing the timer */
      React.createElement(TimerOutput, {
        total: total,
        timeTotal: timeTotal,
        label: label,
        isPlaying: isPlaying,
        isLabel: isLabel,
        handleTimerToggle: this.handleTimerToggle,
        handleTimerNew: this.handleTimerNew,
        handleTimerAdd: this.handleTimerAdd,
        handleTimerReset: this.handleTimerReset,
        handleTimerLabel: this.handleTimerLabel,
        handleTimerLabelInput: this.handleTimerLabelInput }) :




      /* TimerInput
                                                               adding the digits to **input**
                                                               displaying the digits as per **time**
                                                               handling functionalities such as adding digits, removing them, starting the timer */

      React.createElement(TimerInput, {
        input: input,
        time: time,
        handleDial: this.handleDial,
        handleDialBack: this.handleDialBack,
        handleTimerStart: this.handleTimerStart })));




  }}




ReactDOM.render(React.createElement(Timer, null), document.getElementById('root'));