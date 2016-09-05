import React from 'react'
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { omit } from 'lodash'

export default class FormControlWithLabel extends React.Component {
  render() {
    const restProps = omit(this.props, 'label')
    return (
      <FormGroup>
        <ControlLabel>{this.props.label}</ControlLabel>
        <FormControl {...restProps} />
      </FormGroup>
    )
  }
}
