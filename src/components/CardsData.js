import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime, faUserClock,faVanShuttle,faNetworkWired,faSearchLocation,faCloudUpload,faUserTie, faEdit } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";


const cardsData = [
  {
    id: 1,
    icon: <FontAwesomeIcon icon={faBusinessTime} />,
    cardTitle: "Save admin time",
    paragraph:
      "Reduce time you spend on scheduling jobs and searching client data, managing staff records, leaves and documents all in one place",
  },
  {
    id: 2,
    icon: <FontAwesomeIcon icon={faUserClock} />,
    cardTitle: "Accurately record time",
    paragraph:
      "Enable your team to log time accurately via fleetonstreet's easy to use mobile app. Generate reports calculate accurate billable hours",
  },
  {
    id: 3,
    icon: <FontAwesomeIcon icon={faVanShuttle} />,
    cardTitle: "Reduce response time",
    paragraph:
      "Capture job requests directly from your website or create one while on a client call. Staff and clients get notified immediately on job progress.",
  },
  {
    id:4,
    icon: <FontAwesomeIcon icon={faNetworkWired} />,
    cardTitle: "Stay connected always",
    paragraph:
      "Real time notifications among other communication features like team chat on fleetonstreet's portal and mobile app keep you and your team updated.",
  },
  {
    id:5,
    icon: <FontAwesomeIcon icon={faSearchLocation} />,
    cardTitle: "Monitor on the go",
    paragraph:
      "Notifications, location tracer and smart scheduler features keep you upraised of work status 24/7. Admins can use the mobile app when you are not on a PC",
  },
  {
    id:6,
    icon: <FontAwesomeIcon icon={faCloudUpload} />,
    cardTitle: "Store data securely",
    paragraph:
      "Store and access documents and files related to staff, clients, jobs or your organisation in fleetonstreet, hosted securely on the cloud.",
  },
  {
    id:7,
    icon: <FontAwesomeIcon icon={faEdit} />,
    cardTitle: "Configure to your needs",
    paragraph:
      "Configure and use fleetonstreet to match your unique business workflows and operational structure..",
  },
  {
    id:8,
    icon: <FontAwesomeIcon icon={faUserTie} />,
    cardTitle: "1 Stop shop",
    paragraph:
      "Talk to one of our experienced business tech consultants to explore bespoke solutions for your business.",
  },
  {
    id:9,
    icon: <FontAwesomeIcon icon={faComments} />,
    cardTitle: "Quick Tech support",
    paragraph:
      "Our tech team is available from 7 am to 11 pm every day. We usually respond to all your support queries the same day..",
  },
];

export { cardsData };
