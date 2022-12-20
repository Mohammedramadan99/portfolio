// import bannerImg1 from "./images/13.jpg";
// import bannerImg2 from "./images/15.jpg";
// import bannerImg3 from "./images/stats.jpg";

// import feat1 from "./images/feat-1.png";
// import feat2 from "./images/feat-2.png";
// import feat3 from "./images/feat-3.png";

// import portf1 from "./images/project.png";
// import portf2 from "./images/portfolioImg-2.png";
// import portf3 from "./images/portfolioImg-3.png";
// import portf4 from "./images/portfolioImg-4.png";
import nextjs from '../public/images/nextjs.svg'
import {
  DiMongodb,
  DiNodejsSmall,
  DiReact,
  DiSass,
  DiJavascript1,
} from "react-icons/di";
import {
  AiOutlineHtml5,
  AiFillLinkedin,
  AiFillGithub,
  AiFillHtml5,
} from "react-icons/ai";
import { CssOutlined, CssRounded, Favorite, Html, Javascript } from "@mui/icons-material";
import { FaNodeJs, FaReact } from "react-icons/fa";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import DataObjectIcon from "@mui/icons-material/DataObject";

const data = {
  bannerData: [
    {
      img: "https://res.cloudinary.com/dtmjc8y9z/image/upload/v1655192414/Portfolio/drew-beamer-3SIXZisims4-unsplash_iic1fn.jpg",
      smallTitle: "السلام عليكم, انا محمد",
      title: "مصمم ومطور ويب",
      text: "  الجودة من متطلبات جميع انواع العمل لذا فاهتممامي بها امر منطقي لانك كعميل يهمك جدا ان يتم انجاز المشروع بجودة عاله وانا يجب ان ارضيك من كل النواحي يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
    },
    {
      img: "https://res.cloudinary.com/dtmjc8y9z/image/upload/v1655192461/Portfolio/christian-lue-qUrIIzSWhh8-unsplash_kiv6fi.jpg",
      smallTitle: "هل تريد",
      title: " ان يكون لديك موقع مميز صديق لمحركات البحث ؟",
      text: "  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد..",
    },
    {
      img: "https://res.cloudinary.com/dtmjc8y9z/image/upload/v1655192440/Portfolio/cytonn-photography-n95VMLxqM2I-unsplash_bfez0h.jpg",
      smallTitle: "المهم هو",
      title: " رضائك بالتصميم الذي يناسب افكارك",
      text: "  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد..",
    },
  ],

  plansData: [
    {
      title: "small",
      price: "20$",
      feats: ["design 3 pages", "responsive", "support for 2 weeks "],
    },
    {
      title: "good",
      price: "50$",
      feats: ["design 7 pages", "responsive", "support for 5 weeks "],
    },
    {
      title: "monster",
      price: "100$",
      feats: [
        "design 10 pages",
        "responsive",
        "support for 5 weeks",
        "login system",
        "payment with paypal , stripe",
      ],
    },
  ],
  // portfolioData: [
  //   {
  //     title: "موقع ماركت",
  //     description:
  //       " موقع ماركت هو متجر الكتروني للملابس في مختلف الاقسام يمكنك من خلاله اضافة المنتج الي السلة و وتاكيد الطلب ثم دفع سعر المنتجات من خلال طرق الدقع المتاحة ومتابعة حالة الطلب  ",
  //     img: portf1,
  //   },
  //   {
  //     title: "قالب كاسبر",
  //     description:
  //       "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية",
  //     img: portf2,
  //   },
  //   {
  //     title: "قالب اي او",
  //     description:
  //       "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية",
  //     img: portf3,
  //   },
  //   {
  //     title: "موقع مدرسة جراد",
  //     description:
  //       "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. إذا كنت تحتاج إلى عدد أكبر من الفقرات يتيح لك مولد النص العربى زيادة عدد الفقرات كما تريد، النص لن يبدو مقسما ولا يحوي أخطاء لغوية",
  //     img: portf4,
  //   },
  // ],
  myskills: [
    {
      key: Math.floor(Math.random() * 100) + 1,
      type:"icon",
      icon: <AiFillHtml5 />
    },
    {
      key: Math.floor(Math.random() * 100) + 1,
      type:"icon",
      icon: <CssOutlined />
    },
    {
      key: Math.floor(Math.random() * 100) + 1,
      type:"icon",
      icon: <DiSass />
    },
    {
      key: Math.floor(Math.random() * 100) + 1,
      type:"icon",
      icon: <DiJavascript1 />
    },
    {
      key: Math.floor(Math.random() * 100) + 1,
      type:"icon",
      icon: <DiReact />
    },
    {
      key: Math.floor(Math.random() * 100) + 1,
      type:"img",
      img: nextjs
    },
    {
      key: Math.floor(Math.random() * 100) + 1,
      type:"icon",
      icon: <DiNodejsSmall />
    },
    {
      key: Math.floor(Math.random() * 100) + 1,
      type:"icon",
      icon: <DiMongodb />
    },
    {
      key: Math.floor(Math.random() * 100) + 1,
      type:"icon",
      icon: <AiFillGithub />
    },

  ],
  favoritesData: [
    {
      icon: <DataObjectIcon />,
      title: "coding",
      desc: "coding is easy, fun time, it's not a job, it's a great game, i enjoy.",
    },
    {
      icon: <LightbulbIcon />,
      title: "learning",
      desc: "i am a self-learner, i learn things i am passionate about, i have knowledge about hardware,coding and networking",
    },
    {
      icon: <FaReact />,
      title: "react library",
      desc: `react is great, it makes every thing easy to do, i like you react!`,
    },
  ],
  // whymeData: [
  //   {
  //     title: "جودة العمل",
  //     text: "  الجودة من متطلبات جميع انواع العمل لذا فاهتممامي بها امر منطقي لانك كعميل يهمك جدا ان يتم انجاز المشروع بجودة عاله وانا يجب ان ارضيك من كل النواحي يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
  //     to: "quality",
  //     img: feat1,
  //   },
  //   {
  //     title: "سرعة التنفيذ",
  //     text: "من المهم ان اوفي بمعاد التنفيذ بالتاكيد ومع ذالك المعاد الذي اقوم باعطاؤه لك يكون بمعدل جيد جدا   هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.  ",
  //     to: "speed",
  //     img: feat2,
  //   },
  //   {
  //     title: "دعم فني",
  //     text: "الدعم الفني المستمر من مميزات العمل معي وذلك تقديرا وضمانا مني لعملي الذي افتخر به لذا فاهتممامي بها امر منطقي يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
  //     to: "support",
  //     img: feat3,
  //   },
  // ],
};
export default data;
