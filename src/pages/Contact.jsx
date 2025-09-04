import React, { useState } from "react";
import useTitle from "../components/useTitle";
import { useTranslation } from "react-i18next";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";

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
    } catch {
      setAlert({ show: true, type: "error", message: "Xabar yuborishda xatolik yuz berdi." });
    }

    // Alert 3.5 soniyadan so‘ng yo‘qoladi
    setTimeout(() => {
      setAlert({ ...alert, show: false });
    }, 3500);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Manzil",
      details: "pr. Lenina, 36, Tomsk, 634050",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaPhoneAlt className="text-2xl" />,
      title: "Telefon",
      details: "+7 (3822) 52-91-85",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      details: "ftf@tsu.ru",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "Ish vaqti",
      details: "Dushanba - Juma: 8:00 - 17:00",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200 py-20">
      <div className="container mx-auto px-4">
        {/* Alert */}
        {alert.show && (
          <div className={`alert alert-${alert.type} shadow-lg mb-8 max-w-2xl mx-auto transition-all duration-300`}>
            <span>{alert.message}</span>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-info to-sky-600 bg-clip-text text-transparent">
              {t('btns.contactbtn')}
            </span>
          </h1>
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto">
            {t('contact.title')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-bold mb-8 text-center lg:text-left">
              <span className="bg-gradient-to-r from-info to-sky-600 bg-clip-text text-transparent">
                Aloqa ma'lumotlari
              </span>
            </h2>
            
            {contactInfo.map((info, index) => (
              <div key={index} className="group">
                <div className="flex items-start space-x-4 p-6 bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 text-base-content">
                      {info.title}
                    </h3>
                    <p className="text-base-content/70">
                      {info.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-base-100 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-8 text-center">
                <span className="bg-gradient-to-r from-info to-sky-600 bg-clip-text text-transparent">
                  {t('btns.sendbtn')}
                </span>
              </h2>
              
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">{t('contact.inputName')}</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      placeholder={t('contact.inputName')}
                      className="input input-bordered w-full focus:input-info transition-colors"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">{t('contact.inputEmail')}</span>
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      placeholder={t('contact.inputEmail')}
                      className="input input-bordered w-full focus:input-info transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium">{t('contact.inputMsg')}</span>
                  </label>
                  <textarea 
                    name="message"
                    className="textarea textarea-bordered h-32 w-full focus:textarea-info transition-colors resize-none"
                    placeholder={t('contact.inputMsg')}
                    required
                  ></textarea>
                </div>
                
                <button 
                  className="btn btn-info btn-lg w-full shadow-lg hover:shadow-xl transition-all duration-300 group" 
                  type="submit"
                >
                  <FaPaperPlane className="mr-2 group-hover:translate-x-1 transition-transform" />
                  {t('btns.sendbtn')}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-base-100 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">
                <span className="bg-gradient-to-r from-info to-sky-600 bg-clip-text text-transparent">
                  Bizning manzilimiz
                </span>
              </h2>
              <p className="text-base-content/70 mb-6">
                Tomsk davlat universitetining Fizika-Texnika fakulteti
              </p>
            </div>
            <div className="relative h-96">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2201.2345678901234!2d84.9876543210987!3d56.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x432b1234567890ab%3A0x1234567890abcdef!2sTomsk%20State%20University!5e0!3m2!1sen!2sru!4v1234567890123!5m2!1sen!2sru"
                allowFullScreen
                loading="lazy"
                title="TSU Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;