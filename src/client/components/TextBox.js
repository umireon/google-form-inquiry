import React from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

export default class TextBox extends React.Component {
  render() {
    return (
      <FormGroup>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl
          type='text'
          value={this.props.value}
          required={this.props.required}
          onChange={this.props.onChange}
        />
      </FormGroup>
    )
  }
}
