import React, { useState } from "react";
import "./style.scss";
import icons from "../variables";
import MailList from "../mail-list";
import SidebarOption from '../icon-text-item';

const mailCategories = {
  Primary: [
    {
      sender: "Acme Inc.",
      detail: "Insights: The latest in industrial equipment and tools",
      date: "Feb, 26",
      starred: false,
      deleted: false,
      read: false,
      body: "This is the detailed body of the email from Acme Inc.",
      email: "acme2233",
    },
    {
      sender: "Travel Tales",
      detail: "Our latest Adventures and Destinations",
      date: "March, 26",
      starred: false,
      deleted: false,
      read: false,
      body: "Travel stories and destinations in detail.",
      email: "travel6695",
    },
    {
      sender: "Delta Enterprises",
      detail: "Delta Weekly News: Learn about important safety tips",
      date: "Jan, 26",
      starred: false,
      deleted: false,
      read: true,
      body: "Safety tips and updates from Delta Enterprises.",
      email: "delta2879",
    },
  ],
  Promotions: [
    {
      sender: "Promotion Inc.",
      detail: "New deals on equipment",
      date: "Apr, 5",
      starred: false,
      deleted: false,
      read: false,
      body: "Get 50% off on selected equipment.",
      email: "promo123",
    },
    {
      sender: "Sales Corp.",
      detail: "Upcoming sales event",
      date: "Mar, 15",
      starred: false,
      deleted: false,
      read: true,
      body: "Join our sales event for exclusive deals.",
      email: "salescorp",
    },
    {
      sender: "Discount Offers",
      detail: "Limited-time discounts",
      date: "Mar, 20",
      starred: false,
      deleted: false,
      read: true,
      body: "Don’t miss our limited-time discounts.",
      email: "offers123",
    },
  ],
  Social: [
    {
      sender: "Community Forum",
      detail: "New discussions in your favorite groups",
      date: "Apr, 1",
      starred: false,
      deleted: false,
      read: false,
      body: "Check out new discussions on our forum.",
      email: "community",
    },
    {
      sender: "Social Updates",
      detail: "Your friends shared new posts",
      date: "Apr, 3",
      starred: false,
      deleted: false,
      read: false,
      body: "See what your friends are sharing.",
      email: "social",
    },
    {
      sender: "Event Invites",
      detail: "You have been invited to an event",
      date: "Mar, 25",
      starred: false,
      deleted: false,
      read: true,
      body: "Join us for the upcoming event!",
      email: "events",
    },
  ],
};

const tabOptions = [
  { icon: icons.inbox, text: "Primary", category: "Primary" },
  { icon: icons.tag, text: "Promotions", category: "Promotions" },
  { icon: icons.social, text: "Social", category: "Social" },
];

function MailView() {
  const [selectedTab, setSelectedTab] = useState("Primary");

  return (
    <div className="mailview">
      <div className="mailview__controller">
        <input className="mailview__controller-check" type="checkbox" />
        <span className="mailview__controller-down">{icons.down}</span>
        <span className="mailview__controller-refresh">{icons.refresh}</span>
        <span className="mailview__controller-other">{icons.threeDots}</span>
        <span className="mailview__controller-trash">{icons.trash}</span>
        <span className="mailview__controller-open">{icons.openMail}</span>

        <div className="mailview__controller-interval">
          <p className="mailview__controller-interval-text">1-16 of 16</p>
          <span className="mailview__controller-interval-left">
            {icons.chevronLeft}
          </span>
          <span className="mailview__controller-interval-right">
            {icons.chevronRight}
          </span>
        </div>
      </div>

      <div className="option__medium">
        {tabOptions.map((tab, index) => (
          <SidebarOption
            key={index}
            icon={tab.icon}
            text={tab.text}
            onClick={() => setSelectedTab(tab.category)}
            variant="medium"
          />
        ))}
      </div>

      <MailList mails={mailCategories[selectedTab]} />
    </div>
  );
}

export default MailView;
