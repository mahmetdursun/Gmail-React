import { 
  AiOutlineMenu, AiOutlineSearch, AiOutlineSetting, AiOutlineQuestionCircle, 
  AiOutlineStar, AiOutlineClockCircle, AiOutlineCaretRight, AiOutlineFile, 
  AiOutlineDown, AiOutlineUp, AiOutlineClose, AiOutlineMinus, AiOutlineLock, AiOutlineEdit, 
  AiOutlineMail,AiFillStar,AiOutlineDelete,AiOutlineArrowLeft, AiOutlineCheckCircle, AiOutlineExclamationCircle
} from 'react-icons/ai';

import { MdTune, MdInbox, MdLabel,MdArchive, MdOutlinePeopleAlt, MdPrint, MdDriveFolderUpload, MdOutlineArchive  } from 'react-icons/md';
import { FaPlus, FaUserCircle, FaImage, FaTrash, FaEnvelopeOpen,FaGripVertical, FaEllipsisV, FaShare } from "react-icons/fa"; 
import { CgMenuGridO } from "react-icons/cg";
import { RiDeleteBinLine,RiReplyFill } from "react-icons/ri";
import { PiPaperPlaneRightBold, PiGoogleDriveLogoDuotone } from "react-icons/pi";
import { ImPencil } from "react-icons/im";
import { BsThreeDotsVertical, BsEmojiLaughing, BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { HiPaperClip } from "react-icons/hi";
import { FaCaretDown, FaRotateRight } from "react-icons/fa6";
import { GoTag } from "react-icons/go";
import { IoMailOpenOutline } from "react-icons/io5";
import { LiaTrashRestoreSolid } from "react-icons/lia";
import { GoClock } from "react-icons/go";
import { CiShare1 } from "react-icons/ci";

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
  restore: <LiaTrashRestoreSolid />,

  openMail: <AiOutlineMail />, 
  closedMail: <IoMailOpenOutline />, 

  archiveFolder: <MdOutlineArchive />,
  back: <AiOutlineArrowLeft />, 
  exclamation: <AiOutlineExclamationCircle />, 
  check: <AiOutlineCheckCircle />, 
  folder: <MdDriveFolderUpload />,
  ellipsis: <FaEllipsisV />,
  clock: <GoClock />,
  print: <MdPrint />,
  share: <CiShare1 />,
  reply: <RiReplyFill />,
};

export default icons;
