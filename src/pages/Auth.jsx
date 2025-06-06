import { useState } from "react";
import { Link } from "react-router-dom";
import { databases } from "../appwrite";
import { useTranslation } from "react-i18next";

const Auth = ({ onAuthSuccess }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

 const { t } = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Barcha dokumentlarni olish
      const res = await databases.listDocuments(
        "681287e00036d14a63a3", // Database ID
        "6812acc70013445a4489" // Collection ID
      );

      // Parolni tekshirish
      if (res.documents.length === 0 || res.documents[0].password !== password) {
        setError(t('auth.errPass'));
        return;
      }

      localStorage.setItem("adminAuth", "true");
      onAuthSuccess();
      
    } catch (err) {
      console.error("Xatolik:", err);
      setError(t('auth.errSys') );
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/20 z-50">
      <div className="glass p-6 rounded-xl shadow-lg w-full max-w-md relative">
        <Link
          to="/news"
          className="absolute top-3 right-3 p-1 rounded-full hover:font-bold"
        >
          ✕
        </Link>

        <h2 className="text-xl font-bold mb-4">{t('auth.inputPass' )} </h2>
        
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 mb-2"
            placeholder={t('auth.inputPlaceholder')} 
            required
            autoFocus
          />
          
          {error && <p className="text-red-500 mb-2">{error}</p>}
          
          <button
            type="submit"
            className="w-full btn btn-info text-white py-2 rounded"
            disabled={loading}
          >
            {loading ? t('auth.btns.0') : t('auth.btns.1') }
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
