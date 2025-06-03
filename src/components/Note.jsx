import { useState, useEffect } from "react";
import { notesAPI } from "../../services/notesAPI";
import LoadingSpinner from "./LoadingSpinner";
import EmptyState from "./EmptyState";
import { AiFillDelete } from "react-icons/ai"; // jika ingin pakai ikon

function GenericTable({ columns, data, renderRow }) {
  return (
    <table className="min-w-full divide-y divide-gray-200 overflow-hidden rounded-2xl shadow-lg">
      <thead className="text-white bg-emerald-600">
        <tr>
          {columns.map((col, idx) => (
            <th key={idx} className="px-6 py-3 text-left">{col}</th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-100 text-sm text-gray-800">
        {data.map((item, index) => renderRow(item, index))}
      </tbody>
    </table>
  );
}

export default function Note() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [dataForm, setDataForm] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const loadNotes = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await notesAPI.fetchNotes();
      setNotes(data);
    } catch (err) {
      setError("Gagal memuat catatan");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError("");
      setSuccess("");

      if (editingNote) {
        await notesAPI.update(editingNote.id, dataForm);
        setSuccess("Catatan berhasil diperbarui!");
        setEditingNote(null);
      } else {
        await notesAPI.createNote(dataForm);
        setSuccess("Catatan berhasil ditambahkan!");
      }

      setDataForm({ title: "", content: "" });
      await loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const konfirmasi = confirm("Yakin ingin menghapus catatan ini?");
    if (!konfirmasi) return;

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      await notesAPI.deleteNote(id);
      setSuccess("Catatan berhasil dihapus!");
      await loadNotes();
    } catch (err) {
      setError(`Terjadi kesalahan: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (note) => {
    setEditingNote(note);
    setDataForm({ title: note.title, content: note.content });
  };

  const handleCancelEdit = () => {
    setEditingNote(null);
    setDataForm({ title: "", content: "" });
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Notes App</h2>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          {editingNote ? "Edit Catatan" : "Tambah Catatan Baru"}
        </h3>

        {error && (
          <p className="text-red-600 bg-red-100 px-4 py-2 rounded mb-4">
            {error}
          </p>
        )}
        {success && (
          <p className="text-green-600 bg-green-100 px-4 py-2 rounded mb-4">
            {success}
          </p>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={dataForm.title}
            placeholder="Judul catatan"
            onChange={handleChange}
            required
            disabled={loading}
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
          />

          <textarea
            name="content"
            value={dataForm.content}
            placeholder="Isi catatan"
            onChange={handleChange}
            required
            rows="2"
            disabled={loading}
            className="w-full p-3 bg-gray-50 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
          />

          <div className="flex gap-4 items-center">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-2xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
            >
              {loading
                ? "Mohon Tunggu..."
                : editingNote
                ? "Simpan Perubahan"
                : "Tambah Data"}
            </button>

            {editingNote && (
              <button
                type="button"
                onClick={handleCancelEdit}
                className="px-4 py-2 text-sm rounded-xl border border-gray-300 hover:bg-gray-100"
              >
                Batal
              </button>
            )}
          </div>
        </form>

        {/* TABEL CATATAN */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mt-10">
          <div className="px-6 py-4">
            <h3 className="text-lg font-semibold">
              Daftar Catatan ({notes.length})
            </h3>
          </div>

          {loading && <LoadingSpinner text="Memuat catatan..." />}

          {!loading && notes.length === 0 && !error && (
            <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
          )}

          {!loading && notes.length === 0 && error && (
            <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
          )}

          {!loading && notes.length > 0 && (
            <GenericTable
              columns={["#", "Judul", "Isi Catatan", "Aksi"]}
              data={notes}
              renderRow={(note, index) => (
                <tr key={note.id}>
                  <td className="px-6 py-4 font-medium text-gray-700">
                    {index + 1}.
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-emerald-600">{note.title}</div>
                  </td>
                  <td className="px-6 py-4 max-w-xs">
                    <div className="truncate text-gray-600">{note.content}</div>
                  </td>
                  <td className="px-6 py-4 space-x-2">
                    <button
                      onClick={() => handleEdit(note)}
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="text-red-500 hover:underline text-sm"
                      disabled={loading}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              )}
            />
          )}
        </div>
      </div>
    </div>
  );
}
