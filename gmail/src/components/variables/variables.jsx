import { AiOutlineMenu, AiOutlineSearch, AiOutlineSetting, AiOutlineQuestionCircle, AiOutlineStar, AiOutlineClockCircle, AiOutlineCaretRight, AiOutlineFile, AiOutlineDown, AiOutlineUp, AiFillDelete } from 'react-icons/ai';
import { MdTune, MdInbox, MdLabel } from 'react-icons/md';
import { FaPlus, FaUserCircle } from "react-icons/fa"; 
import { CgMenuGridO } from "react-icons/cg";
import { RiDeleteBinLine } from "react-icons/ri";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { ImPencil } from "react-icons/im";

const icons = {
  menu: <AiOutlineMenu />,
  search: <AiOutlineSearch />,
  settings: <AiOutlineSetting />,
  help: <AiOutlineQuestionCircle />,
  user: <FaUserCircle />,
  tune: <MdTune />,
  grid: <CgMenuGridO />,
  
  inbox: <MdInbox />,
  star: <AiOutlineStar />,
  snooze: <AiOutlineClockCircle />,
  sent: <PiPaperPlaneRightBold />,
  drafts: <AiOutlineFile />,
  more: <AiOutlineDown />,
  less: <AiOutlineUp />,
  trash: <RiDeleteBinLine />,
  label:<MdLabel />,
  
  compose: <ImPencil />,
  add: <FaPlus /> 
};

export default icons; 
