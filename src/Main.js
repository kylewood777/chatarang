import React, { Component } from 'react'

import Sidebar from './Sidebar'
import Chat from './Chat'
import base from './base'

class Main extends Component {
  state = {
    room: {},
    rooms:{}
  }

  componentDidMount() {
    base.syncState(
      'rooms',
      {
        context: this,
        state: 'rooms',
      }
    )
    this.loadRoom({
      name: this.props.match.params.roomName,
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.roomName !== this.props.match.params.roomName) {
      this.loadRoom({
        name: this.props.match.params.roomName,
        description: this.state.rooms[this.props.match.params.roomName].description
      })
    }
  }

  addRoom = (room) => {
    const rooms = {...this.state.rooms}
    rooms[room.name] = room
    this.setState({ rooms })
  }

  loadRoom = (room) => {
    if(room==='new')return null

    if(room){
      this.setState({ room })
    }else{
      this.loadValidRoom()
    }
    
  }

  loadValidRoom = () => {
    const roomName = Object.keys(this.state.rooms)[0]
    this.props.history.push(`/rooms/${roomName}`)
  }

  render() {
    return (
      <div className="Main" style={styles}>
        <Sidebar
          user={this.props.user}
          signOut={this.props.signOut}
          rooms={this.state.rooms}
          addRoom={this.addRoom}
        />
        <Chat
          user={this.props.user}
          room={this.state.room}
        />
      </div>
    )
  }
}

const styles = {
  display: 'flex',
  alignItems: 'stretch',
  height: '100vh',
}

export default Main