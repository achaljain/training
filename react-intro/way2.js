class Timer extends React.Component {

    constructor(props) {
        super(props);
        this.state = { counter: this.props.initialSeconds };
        this.myRef = React.createRef()
    }

    componentDidMount() {
        let currentCounter;
        this.timerId = setInterval(() => {
            currentCounter = this.state.counter; 
            if (currentCounter === 1) {
                clearInterval(this.timerId);
            }
            this.setState({ counter: currentCounter - 1 });
        }, 1000);
    } 
    
    render() {
        return (<div ref={this.myRef}>{this.state.counter}</div>
        );
    }
}

ReactDOM.render(<Timer initialSeconds={42} />,
    document.getElementById("like_button_container"));