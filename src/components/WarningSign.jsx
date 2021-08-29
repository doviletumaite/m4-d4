import { Alert } from 'react-bootstrap'


const WarningSign = (props) => (
    <Alert variant="danger" className="text-center">{props.text}</Alert>
)
export default WarningSign