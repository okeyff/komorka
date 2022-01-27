import React from 'react';
import {
  MdHome,
  MdNotifications,
  MdEmail,
  MdSettings,
  MdLogout,
  MdOutlineCreate,
  MdDeleteForever,
} from 'react-icons/md';
import { Notifications, Logout, Messages, CreateMessage, RemovedMessage } from './pages';
import Home from './pages/Home/Home';

export enum RoutePath {
  LOG_IN = '/login',
  FORGOT_PASSWORD = '/forgot-password',
  HOME = '/',
  MESSAGES = '/messages',
  INBOX = '/inbox',
  NOTIFICATIONS = '/notifications',
  SETTINGS = '/settings',
  CREATE_MESSAGE = '/create-message',
  REMOVED_MESSAGE = '/removed-message',
  LOG_OUT = '/log-out',
}

export const defaultSidebarNavItems: SidebarNavItem[] = [
  {
    name: 'Главная',
    path: RoutePath.HOME,
    icon: MdHome,
  },
  {
    name: 'Уведомления',
    path: RoutePath.NOTIFICATIONS,
    icon: MdNotifications,
  },
  {
    name: 'Сообщения',
    path: RoutePath.MESSAGES,
    icon: MdEmail,
  },
  {
    name: 'Настройки',
    path: RoutePath.SETTINGS,
    icon: MdSettings,
    bottom: true,
  },
];

export const messagesSidebarNavItems: SidebarNavItem[] = [
  {
    name: 'Главная',
    path: RoutePath.HOME,
    icon: MdHome,
  },
  {
    name: 'Написать',
    path: 'RoutePath.CREATE_MESSAGE',
    icon: MdOutlineCreate,
  },
  {
    name: 'Проверить',
    path: RoutePath.MESSAGES,
    icon: MdEmail,
  },
  {
    name: 'Удалить',
    path: RoutePath.REMOVED_MESSAGE,
    icon: MdDeleteForever,
  },
];

export const routes: Route[] = [
  {
    name: 'Главная',
    path: RoutePath.HOME,
    component: Home,
    sidebarNavItems: defaultSidebarNavItems,
  },
  {
    name: 'Выйти',
    path: RoutePath.LOG_OUT,
    component: Logout,
  },
  {
    name: 'Уведомления',
    path: RoutePath.NOTIFICATIONS,
    component: Notifications,
    sidebarNavItems: defaultSidebarNavItems,
  },
  {
    name: 'Сообщения',
    path: RoutePath.MESSAGES,
    component: Messages,
    sidebarNavItems: messagesSidebarNavItems,
  },
  {
    name: 'Написать',
    path: RoutePath.CREATE_MESSAGE,
    component: CreateMessage,
    sidebarNavItems: messagesSidebarNavItems,
  },
  {
    name: 'Удалить',
    path: RoutePath.REMOVED_MESSAGE,
    component: RemovedMessage,
    sidebarNavItems: messagesSidebarNavItems,
  },
];

export interface SidebarNavItem {
  name: string;
  path: string;
  icon: React.ComponentType;
  bottom?: boolean;
}

export interface Route {
  name: string;
  path: RoutePath;
  sidebarNavItems?: SidebarNavItem[];
  component: React.ComponentType;
}
