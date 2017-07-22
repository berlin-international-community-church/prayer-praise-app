import { PrayerPraise, ShareStatus } from './enums';
import { MessagesStateType } from './types';

interface IAppState {
  accessToken?: string;
  auth0: any;
  error?: string;
  idToken?: string;
  jwtToken?: string;
  profilePic?: string;
  tokenExpiresAt?: number;
  username?: string;
}
export type AppStateType = IAppState;

interface IMessagesState {
  messageType: PrayerPraise;
  messageText: string;
  sharedStatus: ShareStatus;
  loading: boolean;
  error?: string;
  displayMessage?: string;
}
export type MessagesStateType = IMessagesState;

interface ISharedMessage {
  id: number;
  messageType: PrayerPraise;
  messageText: string;
  sharedStatus: ShareStatus;
  shortUsername: string;
}

export type SharedMessageType = ISharedMessage;

interface ISharedMessages {
  displayMessage?: string;
  error?: string;
  loading: boolean;
  messages: ISharedMessage[];
}

export type SharedMessagesType = ISharedMessages;

interface IMyData {
  displayMessage?: string;
  error?: string;
  loading: boolean;
  myMessages: ISharedMessage[];
}

export type MyData = IMyData;

interface IStateType {
  app: IAppState;
  messages: IMessagesState;
  sharedMessages: ISharedMessages;
  myData: IMyData;
}

export type StateType = IStateType;
