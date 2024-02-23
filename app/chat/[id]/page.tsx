'use client';

import ChatHeader from "@/src/components/Chat/ChatHeader";
import ChatList from "@/src/components/Chat/ChatList";
import MessageList from "@/src/components/MessageList/MessageList";
import Navbar from "@/src/components/Navbar/Navbar";
import { useParams } from "next/navigation";
import React from "react";

const SingleMessage = () => {
    const params = useParams();
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto -mt-1">
        <div className="min-w-full border rounded flex lg:grid lg:grid-cols-3">
          <div className="w-[100px] border-r border-t-0 border-gray-300 lg:col-span-1 md:w-full">
            <ChatHeader />
            <ChatList id={Number(params.id)} />
          </div>
          <div className="w-full lg:col-span-2 lg:block">
            <MessageList id={Number(params.id)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMessage;
