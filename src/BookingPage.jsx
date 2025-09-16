import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { SHOWS } from "./data";

export default function BookingPage() {
  const [searchParams] = useSearchParams();
  const [result, setResult] = useState(null);

  const showId = searchParams.get("show_id");
  const show = SHOWS.find((s) => s.id === showId) || SHOWS[0];

  function handleSubmit(e) {
    e.preventDefault();
    const showtimeId = e.target.showtime.value;
    const qty = parseInt(e.target.qty.value, 10);
    const showtime = show.showtimes.find((st) => st.id === showtimeId);

    if (!showtime || showtime.capacity < qty) {
      alert("ظرفیت کافی نیست!");
      return;
    }

    setResult({
      show: show.title,
      date: showtime.date,
      time: showtime.time,
      qty,
      total: qty * showtime.price,
    });
  }

  return (
    <main className="container mx-auto px-4 py-12 text-right">
      <h1 className="text-3xl font-bold mb-8">📝 رزرو بلیت</h1>

      <form onSubmit={handleSubmit} className="bg-white shadow rounded-xl p-6 space-y-4 max-w-md mx-auto">
        <h2 className="font-semibold">نمایش: {show.title}</h2>

        <label>سانس:</label>
        <select name="showtime" className="w-full border rounded p-2" required>
          {show.showtimes.map((st) => (
            <option key={st.id} value={st.id} disabled={st.capacity === 0}>
              {st.date} - {st.time} ({st.capacity > 0 ? `ظرفیت: ${st.capacity}` : "تکمیل"})
            </option>
          ))}
        </select>

        <label>تعداد بلیت:</label>
        <input type="number" name="qty" min="1" defaultValue="1" className="w-full border rounded p-2" />

        <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition">
          ثبت رزرو
        </button>
      </form>

      {result && (
        <div className="mt-8 bg-green-100 p-4 rounded-xl max-w-md mx-auto text-green-800">
          ✅ رزرو موفق بود
          <p>نمایش: {result.show}</p>
          <p>تاریخ: {result.date}</p>
          <p>ساعت: {result.time}</p>
          <p>تعداد: {result.qty}</p>
          <p>مبلغ کل: {result.total.toLocaleString()} تومان</p>
        </div>
      )}
    </main>
  );
}
