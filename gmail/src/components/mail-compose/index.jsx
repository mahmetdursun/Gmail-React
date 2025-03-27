import React, { useState } from "react";
import "./style.scss"; 
import icons from "../variables";


function Compose({ toggleCompose }) {

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleSendMail = () => {
    if (!to || !subject || !body) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }
  
    const newMail = {
      id: `sent-${Date.now()}`, // Unique ID oluştur
      sender: to, // Kullanıcıdan gönderildiği için "Me" olarak set edilir
      detail: subject,
      date: new Date().toLocaleDateString(),
      starred: false,
      deleted: false,
      read: true,
      body: body,
      email: to,
    };
    console.log("Gönderilen Mail:", newMail); // ✅ Eklenecek maili kontrol et
  
   // 🛑 **GÜVENLİ LOCALSTORAGE OKUMA (NULL HATASI ENGELLENDİ)**
   let storedMails;
   try {
     storedMails = JSON.parse(localStorage.getItem("mailItems-Sent")) || [];
   } catch (error) {
     console.error("❌ LocalStorage Parse Hatası:", error);
     storedMails = [];
   }

   const updatedMails = [...storedMails, newMail];

   localStorage.setItem("mailItems-Sent", JSON.stringify(updatedMails));

   console.log("📩 Yeni Mail Gönderildi:", newMail);
   console.log("📥 Güncellenmiş Sent Kutusu:", updatedMails);

   toggleCompose();
 };
  


  return (
    <div className="compose">
      <div className="compose__header">
        <p className="compose__header-text">New Message</p>

        <div className="compose__header-icons">
          <span className="compose__header-icons-minimize">{icons.minimize}</span>
          <span className="compose__header-icons-close" onClick={toggleCompose}>{icons.close}</span>
        </div>
      </div>

      <div className="compose__content">
        <div className="compose__content-to">
          <label className="compose__content-to-text" htmlFor="to"></label>
          <input
            className="compose__content-to-input"
            value={to}
            placeholder="To"
            onChange={(e) => setTo(e.target.value)}
            required
          />
          <hr className="compose__content-to-stick" />
        </div>

        <div className="compose__content-subject">
          <input
            className="compose__content-subject-input"
            type="text"
            value={subject}
            placeholder="Subject"
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <hr className="compose__content-subject-stick" />
        </div>

        <textarea
          className="compose__content-body"
          value={body}
          placeholder="Write your message..."
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
      </div>

      <div className="compose__footer">
        <button className="compose__footer-send" onClick={handleSendMail}>
          Send
        </button>
        {/* gap ile boşluk ekle */}
        <div className="compose__footer-icon">
          <span>{icons.paperclip}</span>
          <span>{icons.link}</span>
          <span>{icons.smile}</span>
          <span>{icons.drive}</span>
          <span>{icons.image}</span>
          <span>{icons.lock}</span>
          <span>{icons.edit}</span>
          <span>{icons.threeDots}</span>
        </div>

        <div className="compose__footer-trash">
          <span>{icons.trash}</span>
        </div>
      </div>
    </div>
  );
}

export default Compose;
