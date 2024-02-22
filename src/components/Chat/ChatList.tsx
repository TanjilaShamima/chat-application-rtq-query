"use client";

import { useSelector } from "@/lib/redux";
import { useGetConversationQuery } from "@/lib/redux/slices/conversationSlice/conversationApi";
import { getConversationUser } from "@/src/utils/appCommonMethods";
import gravatarUrl from "gravatar-url";
import moment from "moment";
import Link from "next/link";
import React from "react";

const ChatList = () => {
  const auth = JSON.parse(localStorage.getItem("auth") || "");
  const { data } = useGetConversationQuery(auth.user?.email);

  console.log("data", data);
  // bg-gray-100
  return (
    <ul className="overflow-auto">
      <li>
        {data?.map((d) => {
          return (
            <Link href={`/chat/${d.id}`} className="flex items-center px-3 py-2 text-sm transition duration-150 ease-in-out border-b border-gray-300 cursor-pointer hover:bg-gray-100 focus:outline-none">
              <img
                className="object-cover w-10 h-10 rounded-full"
                src={gravatarUrl(auth.user?.email, {
                  size: 80
                })}
                alt="username"
              />
              <div className="w-full pb-2 hidden md:block">
                <div className="flex justify-between">
                  <span className="block ml-2 font-semibold text-gray-600">
                    {getConversationUser(d?.users, auth.user?.email)}
                  </span>
                  <span className="block ml-2 text-sm text-gray-600">
                    {moment(d.timestamp).fromNow()}
                  </span>
                </div>
                <span className="block ml-2 text-sm text-gray-600">{d.message}</span>
              </div>
            </Link>
          );
        })}
      </li>
    </ul>
  );
};

export default ChatList;
