"use client";

import { cn } from "@/utils/cn";
import { useState } from "react";

import Tab1Icon from "@/assets/icons/tabs/tab1.svg";
import Tab2Icon from "@/assets/icons/tabs/tab2.svg";
import Tab3Icon from "@/assets/icons/tabs/tab3.svg";
import Tab4Icon from "@/assets/icons/tabs/tab4.svg";
import Tab5Icon from "@/assets/icons/tabs/tab5.svg";
import Tab6Icon from "@/assets/icons/tabs/tab6.svg";

import ArrowIcon from "@/assets/icons/arrow.svg";

const tabs = [
  {
    id: 0,
    title: "Bibendum tellus",
    icon: <Tab1Icon />,
  },
  {
    id: 1,
    title: "Cras eget",
    icon: <Tab2Icon />,
  },
  {
    id: 2,
    title: "Dolor pharetra",
    icon: <Tab3Icon />,
  },
  {
    id: 3,
    title: "Amet, fringilla",
    icon: <Tab4Icon />,
  },
  {
    id: 4,
    title: "Amet nibh",
    icon: <Tab5Icon />,
  },
  {
    id: 5,
    title: "Sed velit",
    icon: <Tab6Icon />,
  },
];

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <ul className="no-scrollbar flex w-full flex-shrink-0 flex-row gap-4 overflow-x-scroll px-1 py-2 lg:w-64 lg:flex-col lg:overflow-visible">
      {tabs.map((tab) => (
        <li key={tab.id} className="overflow-visible">
          <button
            onClick={() => setSelectedTab(tab.id)}
            className={cn(
              "flex w-full items-center rounded-lg p-4 text-xl font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-byellow",
              selectedTab === tab.id
                ? "bg-white shadow-tab"
                : "hover:bg-white hover:bg-opacity-40 hover:shadow-sm",
            )}
          >
            {tab.icon}
            <span className="whitespace-nowrap pl-4">{tab.title}</span>
            {selectedTab === tab.id && (
              <ArrowIcon className="ml-auto hidden lg:block" />
            )}
          </button>
        </li>
      ))}
    </ul>
  );
}
