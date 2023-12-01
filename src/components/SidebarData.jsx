import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPlus } from "@fortawesome/free-solid-svg-icons";


export const SidebarData = [
  {
    title: "Home",
    icon: <FontAwesomeIcon icon={faHouse} />,
    link: "/",
  },
  {
    title: "Tasks",
    icon: <FontAwesomeIcon icon={faPlus} />,
    link: "/add",
  },
];
