import { PrayerPraise, ShareStatus } from './enums';
import { MessagesStateType } from './types';

interface IAppState {
  accessToken?: string | null;
  auth0: any;
  error?: string | null;
  idToken?: string | null;
  jwtToken?: string | null;
  locale: string;
  profilePic?: string | null;
  sidebarVisible: boolean;
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
  username: string;
}

export type SharedMessageType = ISharedMessage;

interface ISharedMessages {
  displayMessage?: string;
  error?: string;
  expandedMessage?: number;
  loading: boolean;
  messages: ISharedMessage[];
}

export type SharedMessagesType = ISharedMessages;

interface IMessageForEdit {
  id?: number;
  newText?: string;
  newSharedStatus?: ShareStatus;
  messageType?: PrayerPraise;
}

export type MessageForEdit = IMessageForEdit;

interface IMyData {
  displayMessage?: string;
  error?: string;
  loading: boolean;
  myMessages: ISharedMessage[];
  messageForEdit?: MessageForEdit;
}

export type MyData = IMyData;

interface IStateType {
  app: IAppState;
  messages: IMessagesState;
  sharedMessages: ISharedMessages;
  myData: IMyData;
}

export type StateType = IStateType;
