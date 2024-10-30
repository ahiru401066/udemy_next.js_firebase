"use client";

import { User, onAuthStateChanged} from "firebase/auth";
import React, { ReactNode, createContext, useEffect, useState } from "react";
// import { auth } from "../../firebase";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";


type AppProviderProps = {
  children: ReactNode;
};

type AppContextType = {
  user: User | null;
  userId: string | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  selectedRoom: string | null;
  setSelectedRoom: React.Dispatch<React.SetStateAction<string | null>>;
  selecRoomName: string | null;
  setSelectRoomName: React.Dispatch<React.SetStateAction<string | null>>;
}

const defalutContextData = {
  user: null,
  userID: null,
  setUser: () => {},
  selectedRoom: null,
  setSelectedRoom: () => {},
};

const AppContext = createContext(defalutContextData);

export function AppProvider({ children }: AppProviderProps) {
  const[user, setUser] = useState<any | null>(null);
  const[userId, setUserId] = useState<string | null>(null);
  const[selectedRoom, setSelectedRoom] = useState<string | null>(null);

  return <AppContext.Provider value={{ user, userId, setUser, selectedRoom, setSelectedRoom}}>{ children }</AppContext.Provider>
}
