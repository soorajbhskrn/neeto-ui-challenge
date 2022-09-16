import { Notes, Download, UserCircle } from "neetoicons";

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDENAV_LINKS = [
  {
    label: "Notes",
    to: "/notes",
    icon: Notes,
  },
  {
    label: "Profile",
    to: "/logout",
    icon: UserCircle,
  },
  {
    label: "Settings",
    to: "/settings",
    icon: Download,
  },
];
