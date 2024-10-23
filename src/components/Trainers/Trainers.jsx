import React from "react";

const Trainers = () => {
  const trainers = [
    {
      name: "Esra ÜNAL",
      specialty: "Pilates Trainer",
      image: "public/images/trainer1.jpg",
    },
    {
      name: "Yakup Eren ERMURAT",
      specialty: "Functional Trainer",
      image: "public/images/trainer2.jpg",
    },
    {
      name: "Fatma ÇAKIR",
      specialty: "Cardio Trainer",
      image: "public/images/trainer3.jpg",
    },
  ];

  return (
    <section className="trainer" id="trainer">
      <div className="trainer-container">
        <h2>OUR BEST TRAINERS</h2>
        <div className="line"></div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit aut iste. Amet consectetur adipisicing elit
        </p>
        <div className="trainers-container">
          {trainers.map((trainer, index) => (
            <div className="trainer-portfolio" key={index}>
              <img src={trainer.image} alt={trainer.name} />
              <div className="trainer-layer">
                <h4>{trainer.name}</h4>
                <p>{trainer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;