import { Component } from "react";
import { withRouter } from "react-router-dom";
import RegistrationButton from "./RegistrationButton";

class Layout extends Component {
    render() {
        return (
            <>

          <div>
          {this.props.children}
          <RegistrationButton/>
          </div>
     </>
            )
        }
    }
    
    export default Layout