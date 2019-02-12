var Timer = React.createClass({
    getInitialState: function () {
        return { counter: this.props.initialSeconds };
    },

    propTypes: {
        initialSeconds: React.PropTypes.number 
    },

    getDefaultProps() {
        return { initialSeconds: 0 }; 
    },

    componentDidMount: function () {
        var component = this;
        var currentCounter; 
        component.timerId = setInterval(function () {
            currentCounter = component.state.counter; 
            if (currentCounter === 1) {
                clearInterval(component.timerId);
            }
            component.setState({ counter: currentCounter - 1 });
        }, 1000);
    },
    render: function () {
        return <div>{this.state.counter}</div>;
    }
});
ReactDOM.render(<Timer initialSeconds={42} />,
            document.getElementById("like_button_container"));