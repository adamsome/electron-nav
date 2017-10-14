// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Sidebar, Container, Menu, Header, Icon } from 'semantic-ui-react'

export default class Home extends Component {
  state = { visible: true }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div className="full-height">
        <Menu fixed="top">
          <Menu.Item as="a" onClick={this.toggleVisibility}>
            <Icon name="sidebar" size="big" />
            Nav
          </Menu.Item>
          <Menu.Item as="a" header>
            <Link to="/counter">Counter</Link>
          </Menu.Item>
        </Menu>
        <div className="full-height" style={{ paddingTop: '3.8em' }}>
          <Sidebar.Pushable>
            <Sidebar
              as={Menu}
              animation="push"
              width="wide"
              icon="labeled"
              vertical
              visible={visible}
            >
              <Menu.Item name="home">
                <Icon name="home" />
                Home
              </Menu.Item>
              <Menu.Item name="gamepad">
                <Icon name="gamepad" />
                Games
              </Menu.Item>
              <Menu.Item name="camera">
                <Icon name="camera" />
                Channels
              </Menu.Item>
            </Sidebar>
            <Sidebar.Pusher>
              <Container>
                <Header as="h1">Home</Header>
                <Link to="/counter">to Counter</Link>
              </Container>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </div>
      </div>
    )
  }
}
