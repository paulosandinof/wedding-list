import * as React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.closePopup = this.closePopup.bind(this);
    this.openPopup = this.openPopup.bind(this);
    this.state = {
      popupOpen: false
    }
  }

  closePopup(){
    this.setState({
      popupOpen: false
    })
  }

  openPopup(){
    this.setState({
      popupOpen: true
    })
  }

  render() {
    return (
      <div className={"header"}>
        <div className={"header-remind-me-wrapper"}>
          {/*<button type="button" onClick={this.openPopup} className="btn btn-primary header-remind-me-button">Remind Me About This Later</button>*/}
          {/*Don't mount / unmount because the form needs to stay on the DOM to finish submitting*/}
        </div>
        <h1 className={"header-heading"}>Casamento Joanalyce e Bruno</h1>
      </div>
    );
  }
}

Header.defaultProps = {};

export default Header;