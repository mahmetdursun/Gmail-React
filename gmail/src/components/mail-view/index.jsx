import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useNavigate } from "react-router-dom";
import "./style.scss";
import icons from "../variables";
import SidebarOption from "../icon-text-item";

// 📩 **LocalStorage'dan veya Varsayılan Verileri Kullan**
const getStoredMails = (key, defaultMails) => {
  return JSON.parse(localStorage.getItem(key)) || defaultMails;
};

const mailCategories = {
  Primary: getStoredMails("mailItems-Primary", [
    {
      id: "mail-1",
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
      id: "mail-2",
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
      id: "mail-3",
      sender: "Delta Enterprises",
      detail: "Delta Weekly News: Learn about important safety tips",
      date: "Jan, 26",
      starred: true,
      deleted: false,
      read: true,
      body: "Safety tips and updates from Delta Enterprises.",
      email: "delta2879",
    },
  ]),
  Promotions: getStoredMails("mailItems-Promotions", [
    {
      id: "mail-4",
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
      id: "mail-5",
      sender: "Sales Corp.",
      detail: "Upcoming sales event",
      date: "Mar, 15",
      starred: true,
      deleted: false,
      read: true,
      body: "Join our sales event for exclusive deals.",
      email: "salescorp",
    },
    {
      id: "mail-6",
      sender: "Discount Offers",
      detail: "Limited-time discounts",
      date: "Mar, 20",
      starred: false,
      deleted: false,
      read: true,
      body: "Don’t miss our limited-time discounts.",
      email: "offers123",
    },
  ]),
  Social: getStoredMails("mailItems-Social", [
    {
      id: "mail-7",
      sender: "Community Forum",
      detail: "New discussions in your favorite groups",
      date: "Apr, 1",
      starred: true,
      deleted: false,
      read: false,
      body: "Check out new discussions on our forum.",
      email: "community",
    },
    {
      id: "mail-8",
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
      id: "mail-9",
      sender: "Event Invites",
      detail: "You have been invited to an event",
      date: "Mar, 25",
      starred: false,
      deleted: false,
      read: true,
      body: "Join us for the upcoming event!",
      email: "events",
    },
  ]),
};

const tabOptions = [
  { icon: icons.inbox, text: "Primary", category: "Primary" },
  { icon: icons.tag, text: "Promotions", category: "Promotions" },
  { icon: icons.social, text: "Social", category: "Social" },
];

function MailView({ category, starred, sentOnly, bin }) {
  const [selectedTab, setSelectedTab] = useState(category || "Primary");
  const [mailItems, setMailItems] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    let storedMails;
    try {
      if (sentOnly) {
        storedMails = JSON.parse(localStorage.getItem("mailItems-Sent")) || [];
      } else {
        storedMails = JSON.parse(localStorage.getItem(`mailItems-${selectedTab}`)) 
          || mailCategories[selectedTab] // 📌 Eğer localStorage boşsa, mailCategories'den çek
          || [];
      }
    } catch (error) {
      console.error("❌ LocalStorage Parse Hatası:", error);
      storedMails = [];
    }
    setMailItems(storedMails);
  }, [selectedTab, sentOnly]);

  useEffect(() => {
    if (!bin) {
      const storedMails = localStorage.getItem(`mailItems-${selectedTab}`);
      const mergedMails = storedMails ? JSON.parse(storedMails) : [];
      setMailItems(mergedMails);
      localStorage.setItem(`mailItems-${selectedTab}`, JSON.stringify(mergedMails));
    }
  }, [selectedTab]);

  const filteredMails = mailItems.filter(mail => {
    if (bin) return mail.deleted === true; // Çöp kutusundakileri göster
    return mail.deleted === false && (starred ? mail.starred : true);
  });

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const items = [...mailItems];
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setMailItems(items);
    localStorage.setItem(`mailItems-${selectedTab}`, JSON.stringify(items));
  };

  const toggleReadStatus = (email) => {
    const updatedMails = mailItems.map(mail =>
      mail.email === email ? { ...mail, read: !mail.read } : mail
    );
    setMailItems(updatedMails);
    localStorage.setItem(`mailItems-${selectedTab}`, JSON.stringify(updatedMails));
  };

  const toggleStarStatus = (email) => {
    const categoryKeys = ["Primary", "Promotions", "Social", "Sent"];
    let allMails = [];
  
    for (const key of categoryKeys) {
      let mails = JSON.parse(localStorage.getItem(`mailItems-${key}`)) || [];
  
      const updated = mails.map(mail => {
        if (mail.email === email) {
          return { ...mail, starred: !mail.starred };
        }
        return mail;
      });
  
      localStorage.setItem(`mailItems-${key}`, JSON.stringify(updated));
      allMails = [...allMails, ...updated];
    }
  
    // 🔁 Sadece Starred sayfası aktifse tüm kategorilerden yıldızlıları filtrele
    if (starred) {
      const filtered = allMails.filter(mail => mail.starred && !mail.deleted);
      setMailItems(filtered);
    } else {
      const refreshed = getStoredMails(`mailItems-${selectedTab}`, []);
      setMailItems(refreshed);
    }
  };
  

// GÜNCELLENMİŞ toggleDeleteStatus
const toggleDeleteStatus = (email) => {
  const categoryKeys = ["Primary", "Promotions", "Social", "Sent"];
  let allMails = [];

  for (const key of categoryKeys) {
    let mails = JSON.parse(localStorage.getItem(`mailItems-${key}`)) || [];

    const updated = mails.map(mail => {
      if (mail.email === email) {
        if (!mail.deleted) {
          return { ...mail, deleted: true, originalCategory: key };
        } else {
          return { ...mail, deleted: false };
        }
      }
      return mail;
    });

    localStorage.setItem(`mailItems-${key}`, JSON.stringify(updated));
    allMails = [...allMails, ...updated];
  }

  if (bin) {
    const filtered = allMails.filter(mail => mail.deleted);
    setMailItems(filtered);
  } else {
    const refreshed = getStoredMails(`mailItems-${selectedTab}`, []);
    setMailItems(refreshed);
  }
};

// GÜNCELLENMİŞ useEffect tüm durumları kapsar
useEffect(() => {
  let allMails = [
    ...getStoredMails("mailItems-Primary", []),
    ...getStoredMails("mailItems-Promotions", []),
    ...getStoredMails("mailItems-Social", []),
    ...getStoredMails("mailItems-Sent", []) 
  ];

  if (starred) {
    allMails = allMails.filter(mail => mail.starred && !mail.deleted);
  } else if (bin) {
    allMails = allMails.filter(mail => mail.deleted);
  } else {
    allMails = getStoredMails(`mailItems-${selectedTab}`, mailCategories[selectedTab]);
  }

  setMailItems(allMails);
}, [selectedTab, starred, bin]);

  // useEffect(() => {
  //   let allMails = [
  //     ...getStoredMails("mailItems-Primary", []),
  //     ...getStoredMails("mailItems-Promotions", []),
  //     ...getStoredMails("mailItems-Social", []),
  //     ...getStoredMails("mailItems-Sent", []) 
  //   ];
  
  //   if (starred) {
  //     allMails = allMails.filter(mail => mail.starred && !mail.deleted);
  //   } else {
  //     allMails = getStoredMails(`mailItems-${selectedTab}`, mailCategories[selectedTab]);
  //   }
  
  //   setMailItems(allMails);
  // }, [selectedTab, starred]);




  const getCategoryPath = (tab) => {
    switch (tab) {
      case "Primary":
        return "inbox";
      case "Promotions":
        return "promotions";
      case "Social":
        return "social";
      case "Sent":
        return "sent";
      default:
        return "inbox";
    }
  };
  
  const handleMailClick = (mail) => {
    const pathCategory = getCategoryPath(selectedTab);
    navigate(`/gmail/${pathCategory}/mail/${mail.id}`, { state: { mail } });
  };
  

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
          <p className="mailview__controller-interval-text">1-{filteredMails.length} of {filteredMails.length}</p>
          <span className="mailview__controller-interval-left">{icons.chevronLeft}</span>
          <span className="mailview__controller-interval-right">{icons.chevronRight}</span>
        </div>
      </div>

      {!sentOnly && (
        <div className="option__category">
          {tabOptions.map((tab, index) => (
            <SidebarOption
              key={index}
              icon={tab.icon}
              text={tab.text}
              onClick={() => setSelectedTab(tab.category)}
              variant="category"
            />
          ))}
        </div>
      )}

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="mails">
          {(provided) => (
            <table className="mailview__list" {...provided.droppableProps} ref={provided.innerRef}>
              <tbody>
                {filteredMails.map((mail, index) => (
                  <Draggable key={mail.id} draggableId={mail.id} index={index}>
                    {(provided) => (
                      <tr
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={`mailview__list-mail ${mail.read ? "read" : "unread"}`}
                      onClick={() => handleMailClick(mail)}
                    >
                        <td className="mailview__list-mail-select">
                          <span className="mailview__list-mail-select-vertical">{icons.grip}</span>
                          <input type="checkbox" className="mailview__list-mail-select-check" />
                          <span
                            className={`mailview__list-mail-select-star ${mail.starred ? "starred" : ""}`}
                            onClick={(e) => {
                              e.stopPropagation(); // 🔹 Satırın tıklanmasını engelle
                              toggleStarStatus(mail.email);
                            }}
                          >
                            {mail.starred ? icons.solidStar : icons.star}
                          </span>
                        </td>
                        <td className="mailview__list-mail-user">
                          <span className="mailview__list-mail-user-sender">{mail.sender}</span>
                          <span className="mailview__list-mail-user-detail">{mail.detail}</span>
                        </td>
                        <td className="mailview__list-mail-date">{mail.date}</td>
                        <td className="mailview__list-mail-icons">
                        <span>{icons.archive}</span>
                        <span onClick={(e) => {
                            e.stopPropagation();
                            toggleDeleteStatus(mail.email);
                          }}>
                            {mail.deleted ? icons.restore : icons.trash}
                          </span>
                          <span onClick={(e) => {
                            e.stopPropagation();
                            toggleReadStatus(mail.email);
                          }}>
                            {mail.read ? icons.closedMail : icons.openMail}
                          </span>
                          <span>{icons.snooze}</span>
                        </td>
                      </tr>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </tbody>
            </table>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default MailView;

