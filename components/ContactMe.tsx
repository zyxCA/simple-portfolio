"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { log } from "console";
type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = "mailto:1@gmail.com";
  };
  const testSubmit = () => {
    window.location.href = "mailto:1@gmail.com";
  };
  return (
    <div className="h-screen overflow-hidden flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <button className="w-10 h-10 bg-cyan-300" onClick={testSubmit} />
      <h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex  flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Here is my skill set.
          <span className="decoration-[#F7ab0a]/60 underline ">
            Let's Talk.
          </span>
        </h4>
        <div className=" space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+123456789(Please check my resume)</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">jy518jy@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p className="text-2xl">Toronto, ON Canada</p>
          </div>
        </div>
        <form
          action=" "
          className="flex flex-col space-y-2 w-fit mx-auto"
          onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-row space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput"
          />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
