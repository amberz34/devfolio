import emailjs from "@emailjs/browser";

const mail = ({ user_name, user_email, message }) => {
  return emailjs.send(
    process.env.NEXT_PUBLIC_SERVICE_ID,
    process.env.NEXT_PUBLIC_TEMPLATE_ID,
    { user_name, user_email, message },
    process.env.NEXT_PUBLIC_USER_ID
  );
};

export default mail;
