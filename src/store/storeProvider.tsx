"use client";
import React, { useRef } from "react";
import { Provider } from "react-redux";
import { AppStore, makeStore } from "@/store/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    // Here is an exemple to initialize data
    // storeRef.current.dispatch(initializeCount(count))
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
