var ClickableImage = function (props) {
    return (
        <a href={props.href}>
            <img src={props.src} />
        </a>);
};

<ClickableImage href="" src="" />