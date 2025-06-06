import React, { useState, useEffect } from "react";
import { FaEdit, FaTrash, FaPlus, FaSave, FaTimes, FaSignOutAlt } from "react-icons/fa";
import { databases, storage, ID } from "../appwrite";
import Auth from "./Auth";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const DATABASE_ID = "681287e00036d14a63a3";
const COLLECTION_ID = "681287e90002dc65f80d";
const BUCKET_ID = "681288e20038e89aa895";

const categories = ["Startap", "Tadbir", "Ta'lim"];

const defaultForm = {
  $id: null,
  title: "",
  date: "",
  category: "",
  content: "",
  image: "",
  imageFile: null
};

function getImageUrl(image) {
  const PROJECT_ID = "6812873f002c54b9f409";
  const APPWRITE_ENDPOINT = "https://fra.cloud.appwrite.io/v1";

  if (!image) return "https://placehold.co/120x80?text='Samarqand yoshlar texnoparki'";
  if (typeof image === "string" && image.startsWith("http")) return image;
  return `${APPWRITE_ENDPOINT}/storage/buckets/${BUCKET_ID}/files/${image}/view?project=${PROJECT_ID}`;
}

const Admin = () => {

   const { t } = useTranslation();
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("adminAuth") === "true"
  );
  const [newsList, setNewsList] = useState([]);
  const [form, setForm] = useState(defaultForm);
  const [isEditing, setIsEditing] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchNews = async () => {
    setLoading(true);
    try {
      const res = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
      setNewsList(res.documents);
    } catch (err) {
      alert("Yangiliklarni olishda xatolik: " + err.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (authenticated) fetchNews();
  }, [authenticated]);

  useEffect(() => {
    if (panelOpen && !form.date) {
      setForm((f) => ({ ...f, date: new Date().toISOString().slice(0, 10) }));
    }
  }, [panelOpen]);

  const uploadImage = async (file) => {
    const fileId = ID.unique();
    await storage.createFile(BUCKET_ID, fileId, file);
    return fileId;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((f) => ({
        ...f,
        image: reader.result,
        imageFile: file,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSave = async () => {
    if (!form.title || !form.date || !form.category || !form.content) {
      alert("Barcha maydonlarni to'ldiring!");
      return;
    }
    setLoading(true);
    try {
      let imageValue = form.image;
      if (form.imageFile) {
        imageValue = await uploadImage(form.imageFile);
      } else if (imageValue && imageValue.startsWith("data:")) {
        imageValue = "";
      }
      
      const data = {
        title: form.title,
        date: form.date,
        category: form.category,
        content: form.content,
        image: imageValue,
      };

      if (isEditing && form.$id) {
        await databases.updateDocument(DATABASE_ID, COLLECTION_ID, form.$id, data);
      } else {
        await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), data);
      }
      
      setPanelOpen(false);
      setForm(defaultForm);
      setIsEditing(false);
      fetchNews();
    } catch (err) {
      alert("Saqlashda xatolik: " + err.message);
    }
    setLoading(false);
  };

  const handleEdit = (news) => {
    setForm({ ...news, imageFile: null });
    setIsEditing(true);
    setPanelOpen(true);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Haqiqatan o'chirmoqchimisiz?")) return;
    setLoading(true);
    try {
      await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, id);
      fetchNews();
    } catch (err) {
      alert("O'chirishda xatolik: " + err.message);
    }
    setLoading(false);
  };

  const getFormPreviewImage = () => {
    if (form.imageFile && form.image && form.image.startsWith("data:")) {
      return form.image;
    }
    return getImageUrl(form.image);
  };

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    setAuthenticated(false);
  };

  if (!authenticated) {
    return <Auth onAuthSuccess={() => setAuthenticated(true)}  />;
  }

  return (
    <div className="min-h-screen container mx-auto  py-20 px-2 sm:px-4">
      <div className="mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold ">📰 Yangiliklar</h1>
          <div className="flex gap-2">
            <Link
              to="/news"
              className="flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded"
              title="Chiqish"
            >
              <FaSignOutAlt />
            </Link>
            <button
              onClick={() => {
                setForm({ ...defaultForm, date: new Date().toISOString().slice(0, 10) });
                setIsEditing(false);
                setPanelOpen(true);
              }}
              className="flex items-center gap-2 px-4 py-2 btn btn-info rounded-lg shadow transition"
            >
              <FaPlus /> <span className="hidden sm:inline">Yangilik qo'shish</span>
            </button>
          </div>
        </header>

        {loading && <div className="text-center">Yuklanmoqda...</div>}

        <div className="grid gap-4">
          {newsList.length === 0 && !loading && (
            <div className="text-center py-12">Yangiliklar yo‘q</div>
          )}
          {newsList.map((news) => (
            <div
              key={news.$id}
              className="rounded-xl glass shadow p-4 flex flex-col sm:flex-row items-center gap-4"
            >
              <img
                src={getImageUrl(news.image)}
                alt="rasm"
                className="w-full sm:w-36 h-24 object-cover rounded-lg border"
              />
              <div className="flex-1 w-full">
                <h2 className="font-semibold text-lg mb-1">{news.title}</h2>
                <div className="flex flex-wrap gap-2 text-sm  mb-2">
                  <span className=" px-2 py-0.5 rounded">{news.category}</span>
                  <span>{news.date}</span>
                </div>
                <div className="line-clamp-2 mb-2">{news.content}</div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(news)}
                    className="p-2 rounded hover:bg-blue-50 text-info"
                    title="Tahrirlash"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(news.$id)}
                    className="p-2 rounded hover:bg-red-50 text-red-600"
                    title="O'chirish"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Panel */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-[400px] h-full glass shadow-2xl z-50 transition-transform duration-300 ${
          panelOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center  justify-between px-4 py-3 border-b">
          <span className="font-bold text-lg">{isEditing ? "Tahrirlash" : "Yangilik qo'shish"}</span>
          <button
            onClick={() => setPanelOpen(false)}
            className="p-2 rounded btn btn-ghost"
          >
            <FaTimes size={22} />
          </button>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="p-4 flex flex-col gap-4 overflow-auto h-[calc(100vh-56px)]"
        >
          <input
            type="text"
            placeholder="Sarlavha *"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
            className="border rounded px-3 py-2 text-base focus:outline-blue-500"
          />
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            required
            className="border rounded px-3 py-2 text-base"
          />
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            required
            className="border rounded px-3 py-2 text-base"
          >
            <option value="" disabled>Kategoriya tanlang *</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <textarea
            placeholder="Yangilik matni *"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            required
            rows={4}
            className="border rounded px-3 py-2 text-base resize-vertical"
          />
          <div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Rasm URL"
                value={form.imageFile ? "" : form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value, imageFile: null })}
                disabled={!!form.imageFile}
                className="border rounded px-3 py-2 text-base flex-1"
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="flex-1"
                style={{ minWidth: 0 }}
              />
            </div>
            {(form.imageFile || form.image) && (
              <img
                src={getFormPreviewImage()}
                alt="Tanlangan rasm"
                className="mt-2 w-full max-h-40 object-contain rounded"
              />
            )}
          </div>
          <button
            type="submit"
            className="mt-2 btn btn-info text-white font-bold py-2 rounded-lg  transition"
            disabled={loading}
          >
            <FaSave className="inline mr-2" />
            {loading ? "Saqlanmoqda..." : "Saqlash"}
          </button>
        </form>
      </div>

      {panelOpen && (
        <div 
          className="fixed inset-0 bg-black/30 z-40" 
          onClick={() => setPanelOpen(false)}
        />
      )}
    </div>
  );
};

export default Admin;

