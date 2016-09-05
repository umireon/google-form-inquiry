import React from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export default class ItemSelectBox extends React.Component {
  render() {
    const blankOption = <option key='0' disabled></option>
    const options = this.props.items.map(item =>
      <option key={item.id} value={item.id}>{item.title}</option>
    )
    return (
      <FormGroup>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          componentClass="select"
          value={this.props.value}
          required={this.props.required}
          onChange={this.props.onChange}
        >
          {[blankOption].concat(options)}
        </FormControl>
      </FormGroup>
    )
  }
}
