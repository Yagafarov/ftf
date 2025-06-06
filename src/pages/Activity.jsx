import React, { useState, useEffect } from 'react'; // useEffect qo'shildi
import useTitle from '../components/useTitle';
import { useTranslation } from 'react-i18next';
import { 
  FaRocket, 
  FaUsers, 
  FaChalkboardTeacher, 
  FaChevronDown,
  FaChevronUp,
  FaImage,
  FaRegCalendarAlt,
  FaExternalLinkAlt
} from 'react-icons/fa';



const Activity = () => {
  useTitle('activity.mtitle');
  const { t } = useTranslation();
  const [expandedIndex, setExpandedIndex] = useState(0); // 0 qilib o'rnatildi

  const activities = [
    {
      icon: <FaRocket className="text-xl" />,
      titleKey: 'activity.project_title',
      descKey: 'activity.project_desc',
      tag: t('activity.status.0'),
      color: 'from-indigo-500 to-purple-600',
      gallery: [
        "https://avatars.mds.yandex.net/get-altay/901763/2a00000189cebec13b8fabaf8543e44a3b77/XXXL",
        "https://avatars.mds.yandex.net/get-altay/9724410/2a00000189cf71e6a8f1e55f216df48d92bb/XXXL",
        "https://avatars.mds.yandex.net/get-altay/901763/2a00000189cebec13b8fabaf8543e44a3b77/XXXL"
      ]
    },
    {
      icon: <FaUsers className="text-xl" />,
      titleKey: 'activity.event_title',
      descKey: 'activity.event_desc',
      tag: t('activity.status.1'),
      color: 'from-emerald-500 to-teal-600',
      gallery: [
        "https://avatars.mds.yandex.net/get-altay/901763/2a00000189cebec13b8fabaf8543e44a3b77/XXXL",
        "https://avatars.mds.yandex.net/get-altay/9724410/2a00000189cf71e6a8f1e55f216df48d92bb/XXXL",
        "https://avatars.mds.yandex.net/get-altay/901763/2a00000189cebec13b8fabaf8543e44a3b77/XXXL"
      ]
    },
    {
      icon: <FaChalkboardTeacher className="text-xl" />,
      titleKey: 'activity.education_title',
      descKey: 'activity.education_desc',
      tag: t('activity.status.2'),
      color: 'from-amber-500 to-orange-600',
      gallery: [
        "https://avatars.mds.yandex.net/get-altay/901763/2a00000189cebec13b8fabaf8543e44a3b77/XXXL",
        "https://avatars.mds.yandex.net/get-altay/9724410/2a00000189cf71e6a8f1e55f216df48d92bb/XXXL",
        "https://avatars.mds.yandex.net/get-altay/901763/2a00000189cebec13b8fabaf8543e44a3b77/XXXL"
      ]
    }
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen py-20 bg-gradient-to-br from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-info to-sky-600">
              {t('navbar.activity')}
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-base-content/80">
            {t('activity.subtitle')}
          </p>
        </div>

        {/* Faoliyat kartalari */}
        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((item, index) => (
            <div 
              key={index}
              className={`relative group overflow-hidden rounded-2xl transition-all duration-500 ${expandedIndex === index ? 'md:col-span-3' : ''}`}
            >
              {/* Neomorfizm kartasi */}
              <div 
                className={`bg-base-100 border border-base-300 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden ${expandedIndex === index ? 'ring-2 ring-info/50' : ''}`}
              >
                <div 
                  className="flex items-center justify-between p-6 cursor-pointer"
                  onClick={() => toggleExpand(index)}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${item.color} text-white shadow-lg`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{t(item.titleKey)}</h3>
                      <div className="badge badge-sm mt-2 bg-opacity-20 backdrop-blur-sm">
                        <FaRegCalendarAlt className="mr-1" /> {item.tag}
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl text-info">
                    {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                  </div>
                </div>

                {/* Tafsilotlar va galereya */}
                {expandedIndex === index && (
                  <div className="p-6 pt-0 space-y-6">
                    <p className="text-base-content/80">{t(item.descKey)}</p>
                    
                    <div className="space-y-4">
                      <h4 className="flex items-center gap-2 text-lg font-semibold">
                        <FaImage className="text-info" /> {t('activity.gallery_title')}
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {item.gallery.map((img, idx) => (
                          <div 
                            key={idx} 
                            className="relative aspect-video rounded-xl overflow-hidden group"
                          >
                            <img
                              src={img}
                              alt=""
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <button className="btn btn-sm btn-info gap-2">
                                <FaExternalLinkAlt /> Batafsil
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Activity;
