"use client";
import { useState, useEffect } from "react";

type Status = "Applied" | "Interview" | "Offer" | "Rejected";

type Application = {
  id: string;
  company: string;
  role: string;
  date: string;
  link: string;
  status: Status;
};

const statusColors: Record<Status, string> = {
  Applied: "bg-blue-100 text-blue-700 border-blue-200",
  Interview: "bg-amber-100 text-amber-700 border-amber-200",
  Offer: "bg-green-100 text-green-700 border-green-200",
  Rejected: "bg-red-100 text-red-700 border-red-200",
};

const emptyForm = { company: "", role: "", date: "", link: "", status: "Applied" as Status };

export default function Tracker() {
  const [apps, setApps] = useState<Application[]>([]);
  const [form, setForm] = useState(emptyForm);
  const [filter, setFilter] = useState<Status | "All">("All");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("job-applications");
    if (saved) setApps(JSON.parse(saved));
  }, []);

  const save = (updated: Application[]) => {
    setApps(updated);
    localStorage.setItem("job-applications", JSON.stringify(updated));
  };

  const addApp = () => {
    if (!form.company || !form.role) return;
    const newApp: Application = { ...form, id: Date.now().toString() };
    save([newApp, ...apps]);
    setForm(emptyForm);
    setShowForm(false);
  };

  const updateStatus = (id: string, status: Status) => {
    save(apps.map((a) => (a.id === id ? { ...a, status } : a)));
  };

  const deleteApp = (id: string) => {
    save(apps.filter((a) => a.id !== id));
  };

  const filtered = filter === "All" ? apps : apps.filter((a) => a.status === filter);

  const counts = {
    All: apps.length,
    Applied: apps.filter((a) => a.status === "Applied").length,
    Interview: apps.filter((a) => a.status === "Interview").length,
    Offer: apps.filter((a) => a.status === "Offer").length,
    Rejected: apps.filter((a) => a.status === "Rejected").length,
  };

  return (
    <main className="min-h-screen bg-slate-50 px-8 md:px-24 py-16">
      <div className="flex items-start justify-between mb-10">
        <div>
          <a href="/" className="text-sky-500 text-sm font-mono hover:text-sky-400 transition-colors mb-4 block">
            ← Back to portfolio
          </a>
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Job Tracker</h1>
          <p className="text-slate-500">Keep track of every application in one place.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-8 px-5 py-2.5 bg-sky-500 hover:bg-sky-400 text-white rounded-lg font-medium transition-colors text-sm"
        >
          + Add Application
        </button>
      </div>

      {showForm && (
        <div className="bg-white border border-slate-200 rounded-xl p-6 mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            placeholder="Company *"
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
            className="bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 placeholder-slate-300 text-sm focus:outline-none focus:border-sky-400"
          />
          <input
            placeholder="Role *"
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 placeholder-slate-300 text-sm focus:outline-none focus:border-sky-400"
          />
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-600 text-sm focus:outline-none focus:border-sky-400"
          />
          <input
            placeholder="Job listing URL (optional)"
            value={form.link}
            onChange={(e) => setForm({ ...form, link: e.target.value })}
            className="bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-900 placeholder-slate-300 text-sm focus:outline-none focus:border-sky-400"
          />
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value as Status })}
            className="bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-600 text-sm focus:outline-none focus:border-sky-400"
          >
            {["Applied", "Interview", "Offer", "Rejected"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
          <div className="flex gap-3">
            <button onClick={addApp} className="flex-1 bg-sky-500 hover:bg-sky-400 text-white rounded-lg py-2.5 text-sm font-medium transition-colors">
              Save
            </button>
            <button onClick={() => setShowForm(false)} className="flex-1 border border-slate-200 hover:border-slate-300 text-slate-500 rounded-lg py-2.5 text-sm transition-colors">
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-8">
        {(["All", "Applied", "Interview", "Offer", "Rejected"] as const).map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-1.5 rounded-full text-sm font-mono border transition-colors ${
              filter === s
                ? "bg-sky-500 border-sky-400 text-white"
                : "bg-white border-slate-200 text-slate-500 hover:border-sky-300"
            }`}
          >
            {s} ({counts[s]})
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-24 text-slate-300 font-mono text-sm">
          No applications yet — add one above.
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((app) => (
            <div key={app.id} className="bg-white border border-slate-200 rounded-xl px-6 py-4 flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="text-slate-900 font-semibold">{app.company}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full border font-mono ${statusColors[app.status]}`}>
                    {app.status}
                  </span>
                </div>
                <p className="text-slate-500 text-sm">{app.role}</p>
                {app.date && <p className="text-slate-400 text-xs mt-1 font-mono">Applied: {app.date}</p>}
              </div>
              <div className="flex items-center gap-3">
                {app.link && (
                  <a href={app.link} target="_blank" rel="noreferrer" className="text-sky-500 hover:text-sky-400 text-sm transition-colors">
                    View listing →
                  </a>
                )}
                <select
                  value={app.status}
                  onChange={(e) => updateStatus(app.id, e.target.value as Status)}
                  className="bg-white border border-slate-200 rounded-lg px-3 py-1.5 text-slate-600 text-xs focus:outline-none focus:border-sky-400"
                >
                  {["Applied", "Interview", "Offer", "Rejected"].map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
                <button
                  onClick={() => deleteApp(app.id)}
                  className="text-slate-300 hover:text-red-400 transition-colors text-sm"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}