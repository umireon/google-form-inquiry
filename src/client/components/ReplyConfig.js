import React from 'react'
import { Link } from 'react-router'
import { Panel, FormGroup, ControlLabel } from 'react-bootstrap'
import Switch from 'react-bootstrap-switch'
import ItemSelectBox from './ItemSelectBox'

export default class ReplyConfig extends React.Component {
  renderSwitch() {
    return (
      <FormGroup>
        <Switch
          state={this.props.isEnabled}
          onChange={this.props.onChangeEnabled}
        />
        <ControlLabel>自動通知</ControlLabel>
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
          <Link to='/reply-template'>テンプレート</Link>
          <ItemSelectBox required
            items={this.props.items}
            label='宛先メールアドレス'
            value={this.props.toEmailItemId}
            required={this.props.isEnabled}
            onChange={this.props.onChangeToEmailItemId}
          />
          <ItemSelectBox required
            items={this.props.items}
            label='宛先名'
            value={this.props.toNameItemId}
            required={this.props.isEnabled}
            onChange={this.props.onChangeToNameItemId}
          />
        </Panel>
      </div>
    )
  }
}
