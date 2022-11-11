

function Puppy(props) {
    return (
        <div>
             {props.name} has <Bowl bowlShape='square' bowlStatus='full' />
        </div>
    );
};

export default Puppy;


function Bowl(props) {
    return (
        <span>
            {props.bowlShape} - shaped bowl, and it is currently {props.bowlStatus}
        </span>
    )
}

