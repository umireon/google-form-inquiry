import React from 'react'
import { Link } from 'react-router'
import { Panel, FormGroup, ControlLabel, FormControl } from 'react-bootstrap'
import Switch from 'react-bootstrap-switch'
import FormControlWithLabel from './FormControlWithLabel'

export default class NotifyConfig extends React.Component {
  renderSwitch() {
    return (
      <FormGroup>
        <Switch
          state={this.props.isEnabled}
          onChange={this.props.onChangeEnabled}
        />
        <ControlLabel>自動返信</ControlLabel>
      </FormGroup>
    )
  }

  render() {
    return (
      <div>
        <Panel
          header={this.renderSwitch()}
          collapsible
          expanded={this.props.isEnabled}
        >
          <Link to='/notify-template'>テンプレート</Link>
          <FormControlWithLabel
            label='宛先メールアドレス'
            type='email'
            value={this.props.toEmail}
            required={this.props.isEnabled}
            onChange={this.props.onChangeToEmail}
          />
          <FormControlWithLabel
            label='宛先名'
            value={this.props.toName}
            onChange={this.props.onChangeToName}
          />
          <FormControl
            componentClass='button'
            onClick={this.props.onClickSubmitTest}
          >
            テスト送信
          </FormControl>
        </Panel>
      </div>
    )
  }
}
