import React from "react";

export interface Item {
  userId: number;
  id: React.Key;
  title: string;
  body: string;
}

export type RootStackParamList = {
  Home: undefined;
  Details: {item: Item} | undefined;
};
