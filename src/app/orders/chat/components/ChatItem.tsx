import React from 'react'

interface ChatItemProps {
	item: number;
}

const ChatItem:React.FC<ChatItemProps> = ({item}) => {
  return (
    <div>ChatItem {item}</div>
  )
}

export default ChatItem;