import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold mb-6"
      >
        🎭 تجربه جادوی تئاتر
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg md:text-2xl mb-8 max-w-2xl"
      >
        بهترین نمایش‌ها را کشف کنید و بلیت خود را به ساده‌ترین شکل رزرو کنید
      </motion.p>
      <Link
        to="/shows"
        className="px-8 py-4 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition"
      >
        مشاهده نمایش‌ها
      </Link>
    </section>
  );
}
