"use client";

import { UserType } from "@/types/post/post";
import { ReactNode, createContext, useState } from "react";

interface UserContext {
  getUser: () => UserType | undefined;
  createUser: Function;
}

export const UserContext = createContext<UserContext>({
  getUser: () => undefined,
  createUser: () => undefined,
});

export default function UserContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [user, setUser] = useState<UserType | undefined>();
  function createUser(name?: string, email?: string) {
    if (name && email)
      setUser({
        id: Math.trunc(Math.random() * 100000),
        name,
        email,
      });
    else {
      setUser(undefined);
    }
  }
  function getUser() {
    return user;
  }
  return (
    <UserContext.Provider value={{ getUser, createUser }}>
      {children}
    </UserContext.Provider>
  );
}
