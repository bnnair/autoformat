import { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'

import unreadBadge from './UnreadBadge'
import sidebarStyles from './styles'

export default class Channels extends Component {
  render () {
    const { channels, onOpenChat } = this.props

    return (
      <section className={css(sidebarStyles.section, styles.section)}>
        <div className={css(sidebarStyles.sectionHeader)}>Channels</div>
        <div className={css(sidebarStyles.scrollableList)}>

          <ul className={css(sidebarStyles.list)}>

            {channels.map((channel, index) =>
              <li
                key={index}
                onClick={() => onOpenChat(channel.id, 'channel')}
                className={css(
                  sidebarStyles.listItem,
                  channel.unread > 0 ? sidebarStyles.listItemWithUnreadBadge : null
                )}
              >
                <i className={css(styles.hashtag)}>#</i>
                <span className={css(styles.name)}>{channel.name}</span>

                {channel.unread > 0
                  ? unreadBadge({count: channel.unread, important: channel.unreadImportant})
                  : null}
              </li>
            )}

          </ul>

        </div>
      </section>
    )
  }
}

const styles = StyleSheet.create({
  section: {
    borderBottom: 'none',
  },

  hashtag: {
    fontSize: '20px',
    fontStyle: 'normal',
    fontWeight: 'normal',
    position: 'absolute',
    top: '3px',
    left: '11px',
  },

  name: {
    marginLeft: '15px',
  },
})
