import React from "react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://serviceit-server.onrender.com/api/contact",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );
    const data = await res.json();
    if (data.success) {
      setStatus("Message envoyé !");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("Erreur lors de l'envoi.");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Contactez-moi</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          className="p-2 border rounded"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Votre nom"
          required
        />
        <input
          className="p-2 border rounded"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Votre email"
          required
        />
        <textarea
          className="p-2 border rounded"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Votre message"
          required
        />
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          type="submit"
        >
          Envoyer
        </button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
}
