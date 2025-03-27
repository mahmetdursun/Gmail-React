import React, { useEffect } from "react";
import { useParams, useLocation, useNavigate } from 
"react-router-dom"; // Yönlendirme için
import icons from "../variables";
import "./style.scss";

function MailDetails({ onToggleStar, onDelete }) {
  const { category, id } = useParams(); // ✅ URL'den kategori ve mail ID çek
  const location = useLocation();
  const navigate = useNavigate();
  const mail = location.state?.mail; // ✅ State'ten mail verisini çek

  useEffect(() => {
    if (!mail) {
      // Eğer mail state içinde değilse, localStorage'dan çek
      const storedMails = JSON.parse(localStorage.getItem(`mailItems-${category}`)) || [];
      const foundMail = storedMails.find(m => m.id === id);
      setMail(foundMail);
    }
  }, [category, id, mail]);

  if (!mail) {
    return <div className="mail-details">Mail bulunamadı.</div>;
  }

  return (
    <div className="mdetail">
      {/* Üst kontrol çubuğu */}
      <div className="mdetail__icons">
        <span className="mdetail__icons-back" onClick={() => navigate(-1)}>{icons.back}</span>
        <span className="mdetail__icons-archive">{icons.archive}</span>
        <span className="mdetail__icons-exclamation">{icons.exclamation}</span>
        <span className="mdetail__icons-trash" onClick={() => {
          onDelete(mail.email);
          navigate(`/gmail/${category}`); // ✅ Silince geri yönlendir
        }}>{icons.trash}</span>
        <span className="mdetail__icons-stick">{icons.ellipsis}</span>
        <span className="mdetail__icons-open">{icons.openMail}</span>
        <span className="mdetail__icons-clock">{icons.clock}</span>
        <span className="mdetail__icons-check">{icons.check}</span>
        <span className="mdetail__icons-stick">{icons.ellipsis}</span>
        <span className="mdetail__icons-folder">{icons.folder}</span>
        <span className="mdetail__icons-left">{icons.label}</span>
        <span className="mdetail__icons-vertical">{icons.ellipsis}</span>

        <div className="mdetail__icons-interval">
          <p className="mdetail__icons-interval-text">1-16 of 16</p>
          <span className="mdetail__icons-interval-left">{icons.chevronLeft}</span>
          <span className="mdetail__icons-interval-right">{icons.chevronRight}</span>
        </div>
      </div>

      {/* Mail içeriği */}
      <div className="mdetail__content">
        <p className="mdetail__content-text">{mail.detail}</p>

        <div className="mdetail__content-inbox">
          <p className="mdetail__content-inbox-text">Inbox</p>
          <span className="mdetail__content-inbox-cancel">{icons.close}</span>
        </div>

        <div className="mdetail__content-icons">
          <span className="mdetail__content-print">{icons.print}</span>
          <span className="mdetail__content-share">{icons.share}</span>
        </div>
      </div>

      {/* Gönderen bilgileri */}
      <div className="mdetail__sender">
        <span className="mdetail__sender-user">{icons.user}</span>
        <span className="mdetail__sender-name">
          {mail.sender}  
          <p className="mdetail__sender-name-mail">&lt;{mail.email}@gmail.com&gt;</p> 
        </span>

        <div className="mdetail__sender-info">
          <p className="mdetail__sender-info-text">{mail.date}</p>
          <span className="mdetail__sender-info-star" onClick={() => onToggleStar(mail.email)}>
            {mail.starred ? icons.solidStar : icons.star}
          </span>
          <span className="mdetail__sender-info-reply">{icons.reply}</span>
          <span className="mdetail__sender-info-stick">{icons.ellipsis}</span>
        </div>
      </div>

      {/* Mail içeriği */}
      <div className="mdetail__explanation">
        <p className="mdetail__explanation-text">{mail.body || "No additional content available."}</p>
        <hr className="mdetail__explanation-divider" />
      </div>
    </div>
  );
}

export default MailDetails;
