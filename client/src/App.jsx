import React from "react";
import { StreamChat } from "stream-chat";
import { Chat } from "stream-chat-react";
import Cookies from "universal-cookie";



import { ChannelListContainer, ChannelContainer, Auth } from "./components";

const apiKey = "ybaqex9wsn9y";

const client = StreamChat.getInstance(apiKey);

const authToken = false;


const App = () => {

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
