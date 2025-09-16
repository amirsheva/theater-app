import { useState } from "react";
import { SHOWS } from "./data";

export default function AdminPage() {
  const [shows, setShows] = useState(SHOWS);

  function addShow(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const newShow = { id: Date.now().toString(), title, description, showtimes: [] };
    setShows([...shows, newShow]);
    e.target.reset();
  }

  function addShowtime(showId, e) {
    e.preventDefault();
    const date = e.target.date.value;
    const time = e.target.time.value;
    const capacity = parseInt(e.target.capacity.value, 10);
    const price = parseInt(e.target.price.value, 10);

    setShows(
      shows.map((s) =>
        s.id === showId
          ? {
              ...s,
              showtimes: [...s.showtimes, { id: Date.now().toString(), date, time, capacity, price }],
            }
          : s
      )
    );
    e.target.reset();
  }

  return (
    <main className="container mx-auto px-4 py-12 text-right">
      <h1 className="text-3xl font-bold mb-8">⚙️ پنل مدیریت</h1>

      <form onSubmit={addShow} className="bg-white shadow p-6 rounded-xl space-y-4 mb-8">
        <h2 className="font-semibold">➕ افزودن نمایش جدید</h2>
        <input name="title" placeholder="عنوان نمایش" className="w-full border rounded p-2" required />
        <textarea name="description" placeholder="توضیحات" className="w-full border rounded p-2" />
        <button className="w-full bg-green-600 text-white py-2 rounded-lg">ثبت نمایش</button>
      </form>

      {shows.map((show) => (
        <div key={show.id} className="bg-gray-50 p-6 rounded-xl shadow mb-6">
          <h3 className="font-bold text-xl">{show.title}</h3>
          <p className="text-gray-600">{show.description}</p>

          <h4 className="mt-4 font-semibold">سانس‌ها:</h4>
          <ul className="mb-4">
            {show.showtimes.map((st) => (
              <li key={st.id}>
                {st.date} - {st.time} | ظرفیت: {st.capacity} | قیمت: {st.price.toLocaleString()} تومان
              </li>
            ))}
          </ul>

          <form onSubmit={(e) => addShowtime(show.id, e)} className="space-y-2">
            <input type="date" name="date" className="border rounded p-2" required />
            <input type="time" name="time" className="border rounded p-2" required />
            <input type="number" name="capacity" placeholder="ظرفیت" className="border rounded p-2" required />
            <input type="number" name="price" placeholder="قیمت" className="border rounded p-2" required />
            <button className="bg-indigo-600 text-white px-4 py-2 rounded">افزودن سانس</button>
          </form>
        </div>
      ))}
    </main>
  );
}
