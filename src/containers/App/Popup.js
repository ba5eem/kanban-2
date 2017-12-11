import React, {Component} from 'react';
import PopPop from 'react-poppop';


export default class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }

  }

  toggleShow = show => {
    this.setState({show});
  }
   changeValue(event) {
    this.props.setValue(event.currentTarget.value);
  }

  render() {
    const {show} = this.state;

    return (
      <div>
        <PopPop position="centerLeft"
                open={this.props.show}
                closeBtn={true}
                closeOnEsc={true}
                onClose={() => this.toggleShow(false)}
                contentStyle={{overflow: "hidden", marginLeft: 60}}
                closeOnOverlay={true}>
          {this.props.children}
        </PopPop>

      </div>
    )
  }
}

