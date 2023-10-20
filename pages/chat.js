import { useState, useEffect } from "react";
import io from "socket.io-client";
import { useUserAuth } from "../firebase/UserAuthContext";
import moment from "moment-timezone";

let socket;

export default function Home() {
  const [username, setUsername] = useState("");
  const [chosenUsername, setChosenUsername] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  
  const { user } = useUserAuth();
  const uid = user?.uid;
  const name = user?.displayName;
  const displayImg = user?.photoURL || "/images/user.svg";

  useEffect(() => {
    if (name && name.trim() !== "") {
      setChosenUsername(name);
    } else {
      setChosenUsername("Guest");
    }
  }, [user]);

  useEffect(() => {
    socketInitializer();
  }, []);

  const socketInitializer = async () => {
    await fetch("/api/socket");
  
    socket = io();
  
    socket.on("newIncomingMessage", (msg) => {
      setMessages((currentMsg) => [
        ...currentMsg,
        formatMessage(msg),
      ]);
    });
  };
  
  const formatMessage = (msg) => {
    const { author, message, img, time } = msg;
    return { author, message, img, time };
  };
  

  const sendMessage = async () => {
    socket.emit("createdMessage", { author: chosenUsername, message });
    setMessage("");
  };

  const handleKeypress = (e) => {
    if (e.keyCode === 13) {
      if (message) {
        sendMessage();
      }
    }
  };

  return (
    <div className="page bg-gray-300 min-h-screen ">
      <h1 className="page-heading bg-white">Live Chats</h1>
      <div className="flex flex-col   m-2 bg-white rounded-md h-[calc(100vh-55px)] shadow-md  ">
        <div className=" h-full   flex gap-4 flex-col p-4  overflow-y-scroll   ">
          {messages.map((msg, i) => {
            return (
              <div className="w-full  border-b border-gray-200" key={i}>
                <div className="flex  relative">
                  <img
                    src={msg.img || "/images/user.svg"}
                    referrerpolicy="no-referrer"
                    className="rounded-full w-10 h-10"
                    alt={chosenUsername}
                  />
                  <div className=" px-2 leading-tight ">
                    <div className="flex gap-2 mb-1 items-center">
                      <div className="font-medium text-lg ">{msg.author}</div>
                      <div className=" text-xs font-normal ">
                        {moment
                          .tz(msg?.time, "Asia/Kolkata")
                          .format("hh:mm A DD MMM YYYY")}
                      </div>
                    </div>
                    <div className="">{msg.message}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="border-t border-gray-300 w-full flex rounded-bl-md">
          <input
            type="text"
            placeholder="New message..."
            value={message}
            className="outline-none py-2 px-2 rounded-bl-md flex-1"
            onChange={(e) => setMessage(e.target.value)}
            onKeyUp={handleKeypress}
          />
          <div className="border-l border-gray-300 flex justify-center items-center  rounded-br-md group hover:bg-purple-500 transition-all">
            <button
              className="group-hover:text-white px-3 h-full"
              onClick={() => {
                sendMessage();
              }}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
