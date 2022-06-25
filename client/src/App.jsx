import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";
import { ChannelListContainer, ChannelContainer, Auth } from "./components";
import './App.css'

const cookies = new Cookies()

const apiKey = "ybaqex9wsn9y";
const authToken = cookies.get('token');

const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser({
    id: cookies.get('userId'),
    name: cookies.get('username'),
    fullName: cookies.get('fullName'),
    image: cookies.get('avatarUrl'),
    hashedPassword: cookies.get('hashedPassword'),
    phoneNumber: cookies.get('phoneNumber'),
  }, authToken)
}

const App = () => {
  // if (authToken) return <Auth/>
  // use the line above to test frontend without having to log in

  if (!authToken) return <Auth/>
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer />
        <ChannelContainer />
      </Chat>
    </div>
  );
};
export default App;
