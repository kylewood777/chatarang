import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import RoomLink from './RoomLink'

class RoomList extends Component {
  state = {
    rooms: {
      general: {
        name: 'general',
        description: 'Chat about anything',
      },

      random: {
        name: 'random',
        description: 'Cat GIFs',
      },

      food: {
        name: 'food',
        description: 'Twammiches and whatnot',
      },
    }
  }

  render() {
    return (
      <nav
        className={`RoomList ${css(styles.nav)}`}
      >
        <h2 className={css(styles.h2)}>Rooms</h2>
        <ul className={css(styles.list)}>
          {
            Object.keys(this.state.rooms).map(
              roomName => (
                <RoomLink
                  key={roomName}
                  room={this.state.rooms[roomName]}
                  loadRoom={this.props.loadRoom}
                />
              )
            )
          }
        </ul>
      </nav>
    )
  }
}

const styles = StyleSheet.create({
  nav: {
    padding: '0 1rem',
  },

  h2: {
    fontSize: '1rem',
  },

  list: {
    listStyle: 'none',
    marginLeft: 0,
    paddingLeft: 0,
  },
})

export default RoomList