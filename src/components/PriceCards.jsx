import React from "react";
import ".././CSS/PriceCard.css";

const PriceCards = () => {
  return (
    <>
      {priceCardData.map((card) => (
        <div key={card.id} className="priceCard">
          <h2>{card.title}</h2>
          <div className="amountArea">
            <h1>
              <span>$</span>
              {card.price}
            </h1>
            <p>Month/User</p>
          </div>

          <div className="bottomArea">
            {card.middleInfo.map((info) => (
              <p key={info}>{info}</p>
            ))}
            <div className="btn">
              <button>{card.btnName}</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PriceCards;

const priceCardData = [
  {
    id: 1,
    title: "Inquiry & Forms",
    price: 10,
    middleInfo: ["Custome Forms", "Inquiry Funel", "Clients Management"],
    btnName: "Start Free",
  },

  {
    id: 2,
    title: "Time & Leavess",
    price: 15,
    middleInfo: ["Staff Timesheets", "Leaves Management", "Leave Approvals"],
    btnName: "Start Free",
  },
  {
    id: 3,
    title: "Job & Schedules",
    price: 20,
    middleInfo: ["Job Management", "Visual Scheduler", "Custom Job Statuses"],
    btnName: "Start Free",
  },
  {
    id: 4,
    title: "Premium",
    price: 25,
    middleInfo: [
      "All features of",
      "Jobs & Schedules",
      "Inquiry & Forms | Time & Leaves plans",
    ],
    btnName: "Start Free",
  },
];
