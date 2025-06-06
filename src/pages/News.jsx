import React, { useState, useEffect } from 'react';
import useTitle from '../components/useTitle';
import { useTranslation } from 'react-i18next';
import { databases, storage, ID } from '../appwrite'; // Appwrite konfiguratsiyangiz
import {
  FaSearch,
  FaCalendarAlt,
  FaNewspaper,
  FaTimes,
  FaExternalLinkAlt,
  FaBookmark,
  FaShare,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

// Appwrite konfiguratsiyasi
const BUCKET_ID = "681288e20038e89aa895";
const DATABASE_ID = "681287e00036d14a63a3";
const COLLECTION_ID = "681287e90002dc65f80d";
const PROJECT_ID = "6812873f002c54b9f409";
const ENDPOINT = "https://fra.cloud.appwrite.io/v1";

// Rasm URL hosil qilish funksiyasi
const getImageUrl = (image) => {
  if (!image) return "https://placehold.co/120x80?text=Rasm";
  if (image.startsWith("http")) return image;
  return `${ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${image}/view?project=${PROJECT_ID}`;
};

const News = () => {
  useTitle('news.mtitle');
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Barchasi');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState(null);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const newsPerPage = 9;

  // Yangiliklarni Appwrite'dan olish
  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
      setNewsData(res.documents);
    } catch (err) {
      console.error("Xatolik yangiliklarni yuklashda:", err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Filtrlash va qidiruv
  const filteredNews = newsData.filter(news => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'Barchasi' || news.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  // Pagination
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);

  // Kategoriyalar ro'yxati
  const categories = ['Barchasi', ...new Set(newsData.map(news => news.category))];

  // Modalni ochish
  const openModal = (news) => {
    setSelectedNews(news);
    document.body.style.overflow = 'hidden';
  };

  // Modalni yopish
  const closeModal = () => {
    setSelectedNews(null);
    document.body.style.overflow = 'auto';
  };

  // Sahifalashni boshqarish
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Sahifa soni o'zgarganda tekshirish
  useEffect(() => {
    if (filteredNews.length > 0 && currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filteredNews, currentPage, totalPages]);

  return (
    <div className="container mx-auto px-4 py-10 mt-14">
      {/* Sarlavha */}
      <div className="text-center ld:mb-10">
        <h1 className="text-2xl md:text-5xl font-bold mb-3">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-info to-primary">
            {t('news.mtitle', "Yangiliklar")}
          </span>
        </h1>
        <p className="text-base-content/70 max-w-xl mx-auto">
          {t('news.subtitle', "So'nggi yangiliklar va e'lonlar bilan tanishing")}
        </p>
      </div>

      {/* Qidiruv va filtrlar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8 sticky top-0 z-10 bg-base-100/80 py-4 backdrop-blur-sm rounded-md">
        <div className="relative flex-grow">
          <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-info" />
          <input
            type="text"
            placeholder={t('news.search_placeholder', "Qidirish...")}
            className="input input-bordered w-full pl-12 pr-4"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              className={`badge badge-lg transition-all ${
                categoryFilter === category
                  ? 'badge-info text-white'
                  : 'badge-ghost hover:badge-info/20'
              }`}
              onClick={() => {
                setCategoryFilter(category);
                setCurrentPage(1);
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Yuklash holati */}
      {loading && (
        <div className="text-center py-20">
          <span className="loading loading-spinner loading-lg text-info"></span>
        </div>
      )}

      {/* Yangiliklar grid */}
      {!loading && currentNews.length > 0 ? (
        <>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {currentNews.map((news) => (
              <div
                key={news.$id}
                className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-shadow cursor-pointer"
                onClick={() => openModal(news)}
              >
                <figure className="relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={getImageUrl(news.image)}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 badge badge-info">
                    {news.category}
                  </span>
                </figure>
                <div className="card-body">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FaCalendarAlt className="text-info" />
                    <span>{news.date}</span>
                  </div>
                  <h2 className="card-title line-clamp-1">{news.title}</h2>
                  <p className="text-base-content/70 line-clamp-2">{news.content}</p>
                  <div className="card-actions justify-end mt-2">
                    <button className="btn btn-sm btn-ghost text-info">
                      {t('news.read_more', "Batafsil")} <FaExternalLinkAlt className="ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6">
              <div className="join">
                <button
                  className="join-item btn btn-sm"
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                >
                  <FaChevronLeft />
                </button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    className={`join-item btn btn-sm ${currentPage === i + 1 ? 'btn-active' : ''}`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button
                  className="join-item btn btn-sm"
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        !loading && (
          <div className="text-center py-20">
            <FaNewspaper className="mx-auto text-5xl text-gray-400 mb-4" />
            <h3 className="text-xl font-medium">{t('news.no_results', "Hech qanday yangilik topilmadi")}</h3>
          </div>
        )
      )}

      {/* Modal oynasi */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative bg-base-100 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <button
              className="absolute top-4 right-4 btn btn-circle btn-sm btn-ghost hover:bg-error/20 hover:text-error transition-all"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <FaTimes className="text-xl" />
            </button>

            <div className="p-6 md:p-8">
              <div className="relative h-64 md:h-80 mb-6 m-5 md:m-10 rounded-xl overflow-hidden group">
                <img
                  src={getImageUrl(selectedNews.image)}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="badge badge-info glass text-white">
                    {selectedNews.category}
                  </span>
                  <span className="badge badge-ghost glass flex text-white items-center gap-1">
                    <FaCalendarAlt className="text-info" /> {selectedNews.date}
                  </span>
                </div>
              </div>

              <h2 className="text-2xl md:text-2xl font-bold mb-4 text-gradient bg-gradient-to-r  bg-clip-text text-info">
                {selectedNews.title}
              </h2>

              <p className="text-base text-justify whitespace-pre-line mb-6 leading-relaxed">
                {selectedNews.content}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
