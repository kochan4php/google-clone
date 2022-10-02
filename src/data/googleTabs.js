import { BiNews } from "react-icons/bi";
import { BsFillBarChartFill, BsImage, BsSearch, BsTag } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineFlight, MdOutlineOndemandVideo } from "react-icons/md";

const googleTabs = (input) => [
  {
    title: "Search",
    Icon: BsSearch,
    uri: `/search/${input}`,
  },
  {
    title: "Image",
    Icon: BsImage,
    uri: `/search/${input}/image`,
  },
  {
    title: "News",
    Icon: BiNews,
    uri: `/search/${input}/news`,
  },
  {
    title: "Video",
    Icon: MdOutlineOndemandVideo,
    uri: `/search/${input}/video`,
  },
  {
    title: "Maps",
    Icon: FiMapPin,
    uri: `/search/${input}/hehe1`,
  },
  {
    title: "Shopping",
    Icon: BsTag,
    uri: `/search/${input}/hehe2`,
  },
  {
    title: "Flights",
    Icon: MdOutlineFlight,
    uri: `/search/${input}/hehe3`,
  },
  {
    title: "Finance",
    Icon: BsFillBarChartFill,
    uri: `/search/${input}/hehe4`,
  },
];

export default googleTabs;
