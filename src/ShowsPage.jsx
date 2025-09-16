import { Link } from "react-router-dom";

const SHOWS = [
  { id: "1", title: "هملت", venue: "سالن اصلی", date: "2025-09-20", time: "19:30", price: 250000 },
  { id: "2", title: "شاه‌لیر", venue: "سالن ۲", date: "2025-09-22", time: "20:00", price: 220000 },
  { id: "3", title: "مرغ دریایی", venue: "بلک‌باکس", date: "2025-09-25", time: "18:45", price: 180000 },
];

export default function ShowsPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">🎭 نمایش‌های در حال اجرا</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {SHOWS.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col justify-between"
          >
            <h2 className="text-xl font-bold mb-2">{s.title}</h2>
            <p className="text-gray-600">📍 {s.venue}</p>
            <p className="text-gray-600">📅 {s.date} — ⏰ {s.time}</p>
            <p className="text-lg font-semibold text-indigo-600 mt-2">
              {s.price.toLocaleString()} تومان
            </p>
            <Link
              to={`/booking?show_id=${s.id}`}
              className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              رزرو بلیت
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
