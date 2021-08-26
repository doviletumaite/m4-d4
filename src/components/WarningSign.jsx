import { Alert } from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image'

const WarningSign = (props) => (
    <Alert variant="danger" className="text-center">{props.text}</Alert>
)
export default WarningSign