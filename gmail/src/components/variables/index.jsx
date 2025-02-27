import { 
  AiOutlineMenu, AiOutlineSearch, AiOutlineSetting, AiOutlineQuestionCircle, 
  AiOutlineStar, AiOutlineClockCircle, AiOutlineCaretRight, AiOutlineFile, 
  AiOutlineDown, AiOutlineUp, AiOutlineClose, AiOutlineMinus, AiOutlineLock, AiOutlineEdit, 
  AiOutlineMail,AiFillStar,AiOutlineDelete,
} from 'react-icons/ai';

import { MdTune, MdInbox, MdLabel,MdArchive, MdOutlinePeopleAlt } from 'react-icons/md';
import { FaPlus, FaUserCircle, FaImage, FaTrash, FaEnvelopeOpen,FaGripVertical } from "react-icons/fa"; 
import { CgMenuGridO } from "react-icons/cg";
import { RiDeleteBinLine } from "react-icons/ri";
import { PiPaperPlaneRightBold, PiGoogleDriveLogoDuotone } from "react-icons/pi";
import { ImPencil } from "react-icons/im";
import { BsThreeDotsVertical, BsEmojiLaughing, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiPaperClip } from "react-icons/hi";
import { FaCaretDown, FaRotateRight } from "react-icons/fa6";
import { GoTag } from "react-icons/go";

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
  label: <MdLabel />,
  
  compose: <ImPencil />,
  add: <FaPlus />,
  close: <AiOutlineClose />,
  minimize: <AiOutlineMinus />,
  
  paperclip: <HiPaperClip />,
  link: <AiOutlineCaretRight />,
  smile: <BsEmojiLaughing />,
  drive: <PiGoogleDriveLogoDuotone />,
  image: <FaImage />,
  lock: <AiOutlineLock />,
  edit: <AiOutlineEdit />,
  threeDots: <BsThreeDotsVertical />,

  check: <AiOutlineMail />,  
  down: <FaCaretDown />, 
  refresh: <FaRotateRight />, 
  trashAlt: <FaTrash />, 
  openMail: <FaEnvelopeOpen />, 
  chevronLeft: <BsChevronLeft />, 
  chevronRight: <BsChevronRight />, 


  tag:<GoTag />,
  social:<MdOutlinePeopleAlt />,

  grip: <FaGripVertical />,
  solidStar: <AiFillStar />,
  archive: <MdArchive />,
  delete: <AiOutlineDelete />,
};

export default icons;
