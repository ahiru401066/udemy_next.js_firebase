"use client";

import { collection, onSnapshot, orderBy, query, Timestamp, where } from "firebase/firestore";
import React, { useEffect, useState } from 'react'
import { BiLogOut } from "react-icons/bi";
import{ db } from "../../../firebase";

type Room = {
  id: string;
  name: string;
  createdAt: Timestamp;
}

const Sidebar = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  useEffect(() => {
    const fetchRooms = async () => {
      const roomCollectionRef = collection(db,"rooms");
      const q = query(
        roomCollectionRef, 
        where("userId", "==", "lInVfRerJ9dNZoNJT3jj4wpPRpj2"),
        orderBy("createdAt")
      );
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const newRooms = snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          createdAt: doc.data().createdAt,
        }));
        setRooms(newRooms);
      });

      return () => {
        unsubscribe();
      };
    };

    fetchRooms();
  },[]);



  return (
    <div className="bg-cyan-950 h-full overflow-y-auto px-5 flex flex-col">
      <div className="flex-grow">
        <div className="cursor-pointer flex justify-evenly items-center border mt-2 rounded-md hover:bg-blue-800 duration-150">
          <span className="text-white p-4 text-2xl">＋</span>
          <h1 className="text-white text-xl font-semibold p-4">New Chat</h1>
        </div>
        <ul>
          {rooms.map((room) => (
            <li 
              key={room.id} 
              className="cursor-pointer border-b p-4 text-slate-100 hover:bg-slate-700 duration-150"
            >
              {room.name}
            </li>
          ))}
        </ul>
      </div>

      <div
        className="text-lg flex items-center justify-evenly mb-2 cursor-pointer p-4 text-slate-100 hover:bg-slate-700 duration-150"
      >
        <BiLogOut />
        <span>ログアウト</span>
      </div>
    </div>
  );
}

export default Sidebar
