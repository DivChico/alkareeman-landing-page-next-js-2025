"use client";

import React, { useActionState } from "react";
import Form from "next/form";
import Button from "./Button";
import { Loader2 } from "lucide-react";
const initialState = {
  message: "",
};
const ContactUsForm = ({ action }) => {
  const [state, formAction, isPending] = useActionState(action, initialState);

  return (
    <Form action={formAction} className="flex items-center gap-2 flex-col">
      <input
        type="text"
        name="name"
        autoComplete="name"
        required
        placeholder="الاسم رباعي"
        id="name"
        className="mt-0.5  min-w-xs  md:min-w-xs rounded-4xl  bg-bgSecondary/10 border border-bgSecondary text-black/80 text-right py-2 px-4 active:text-black    shadow-sm sm:text-sm"
      />
      <input
        type="email"
        id="email"
        name="email"
        autoComplete="email"
        required
        placeholder="البريد الالكتروني "
        className="mt-0.5  min-w-xs  md:min-w-xs rounded-4xl  bg-bgSecondary/10 border border-bgSecondary text-black/80 text-right py-2 px-4 active:text-black    shadow-sm sm:text-sm"
      />
      <input
        type="text"
        required
        name="massage"
        placeholder=" الرسالة المراد إرسالها لنا "
        id="massage"
        className="mt-0.5  min-w-xs  md:min-w-xs rounded-4xl  bg-bgSecondary/10 border border-bgSecondary text-black/80 text-right py-2 px-4 active:text-black    shadow-sm sm:text-sm"
      />
      <button
        type="submit"
        disabled={isPending}
        className="flex   items-center justify-center  shadow-lg rounded-2xl bg-fontPrimary px-8 py-3 font-bold text-white transition duration-100 ease-in-out hover:scale-110 hover:shadow-xl focus:ring-3 focus:outline-hidden "
      >
        {isPending ? (
          <React.Fragment>
            <Loader2 className="h-6 w-6 animate-spin" />
          </React.Fragment>
        ) : (
          <>
            <span className="tracking-wide "> إرسال الرسالة </span>
          </>
        )}{" "}
      </button>
      {state?.message && state.message.length > 0 && (
        <p className="text-center text-sm" style={{ color: "red" }}>
          {state.message}
        </p>
      )}
    </Form>
  );
};

export default ContactUsForm;
