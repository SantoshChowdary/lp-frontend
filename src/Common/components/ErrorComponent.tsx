// INFO - ErrorComponent
// Will be shown if there was any error during loading and if we got error from the server.
// Required Props - width, height. 


const ErrorComponent = ({width, height} : {width: number, height: number}) => {
    return (
        <div>
            <img src="https://img.freepik.com/premium-vector/flat-vector-man-upset-error-404-maintenance-concept_939213-325.jpg" alt="Error Block" width={width} height={height} />
        </div>
      )
};

ErrorComponent.defaultProps = {
    width : 200,
    height : 200
}


export default ErrorComponent;