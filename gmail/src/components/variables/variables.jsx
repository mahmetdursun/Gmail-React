import { AiOutlineMenu, AiOutlineSearch, AiOutlineSetting, AiOutlineQuestionCircle, AiOutlineUser, AiOutlineStar, AiOutlineClockCircle, AiOutlineCaretRight, AiOutlineFile, AiOutlineDown, AiFillDelete } from 'react-icons/ai';
import { MdTune, MdGridView, MdInbox } from 'react-icons/md';
import { FaPen, FaPlus } from "react-icons/fa"; 

const icons = {
  menu: <AiOutlineMenu />,
  search: <AiOutlineSearch />,
  settings: <AiOutlineSetting />,
  help: <AiOutlineQuestionCircle />,
  user: <AiOutlineUser />,
  tune: <MdTune />,
  grid: <MdGridView />,
  
  inbox: <MdInbox />,
  star: <AiOutlineStar />,
  snooze: <AiOutlineClockCircle />,
  sent: <AiOutlineCaretRight />,
  drafts: <AiOutlineFile />,
  more: <AiOutlineDown />,
  trash: <AiFillDelete />,
  
  compose: <FaPen />,
  add: <FaPlus /> // ✅ Burada `FaPlus` eklenmiş olmalı!
};

export default icons; // 🔹 Dışa aktarma doğru mu kontrol et!
