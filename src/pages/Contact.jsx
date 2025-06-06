import React, { useState } from "react";
import useTitle from "../components/useTitle";
import { useTranslation } from "react-i18next";

// Telegram token va chat id ni shu yerda yozing
const TELEGRAM_BOT_TOKEN = '7305258248:AAGoJgcC_38pnMcmgIj9BiNtk_AnyJ3t6ZA';
const TELEGRAM_CHAT_ID = '901097759'; 

const sendMessageToTelegram = async (message) => {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text: message,
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return response.json();
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error;
  }
};

const Contact = () => {
  useTitle('contact.mtitle');
  const { t } = useTranslation();

  // Alert uchun state
  const [alert, setAlert] = useState({ show: false, type: "success", message: "" });

  // Formani yuborish funksiyasi
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const message = form.elements['message'].value;

    const telegramMessage = 
      `📩 Yangi so'rov!\n\n` +
      `👤 Ism: ${name}\n` +
      `📧 Email: ${email}\n` +
      `💬 Xabar: ${message}`;

    try {
      await sendMessageToTelegram(telegramMessage);
      setAlert({ show: true, type: "success", message: "Xabaringiz muvaffaqiyatli yuborildi!" });
      form.reset();
    } catch (error) {
      setAlert({ show: true, type: "error", message: "Xabar yuborishda xatolik yuz berdi." });
    }

    // Alert 3.5 soniyadan so‘ng yo‘qoladi
    setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, 3500);
  };

  return (
    <div className="py-16 pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* DaisyUI Alert */}
        {alert.show && (
          <div className={`alert alert-${alert.type} shadow-lg mb-6 transition-all duration-300`}>
            <span>{alert.message}</span>
          </div>
        )}

        {/* Sarlavha */}
        <div className="text-center md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-info mb-4">
            {t('btns.contactbtn')}
          </h2>
          <p className="max-w-md mx-auto">
            {t('contact.title') || "Har qanday loyiha yoki hamkorlik uchun bog'laning. Sizga 24 soat ichida javob beramiz!"}
          </p>
        </div>

        {/* Form va Xarita */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 rounded-xl shadow-sm overflow-hidden">
          {/* Form Qismi */}
          <div className="lg:w-1/2 w-full p-8">
            <h3 className="text-xl font-semibold mb-6 ">{t('btns.sendbtn')}</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="form-control">
                <input 
                  type="text" 
                  name="name"
                  placeholder={t('contact.inputName')}
                  className="input input-bordered  w-full"
                  required
                />
              </div>
              <div className="form-control">
                <input 
                  type="email" 
                  name="email"
                  placeholder={t('contact.inputEmail')}
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <textarea 
                  name="message"
                  className="textarea textarea-bordered h-32 w-full"
                  placeholder={t('contact.inputMsg')}
                  required
                ></textarea>
              </div>
              <button className="btn btn-info text-white btn-block mt-4  transition-colors" type="submit">
                {t('btns.sendbtn')}
              </button>
            </form>
          </div>

          {/* Xarita Qismi */}
          <div className="lg:w-3/4 w-full relative min-h-[400px] ">
            <iframe
              className="w-full h-full absolute inset-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.239352184306!2d66.9573762899339!3d39.64432752900472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19ca891429b5%3A0xd67bdbef8e48a3a2!2sSamarkand%20Youth%20Technopark!5e0!3m2!1suz!2sru!4v1745907793284!5m2!1suz!2sru"
              allowFullScreen
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;