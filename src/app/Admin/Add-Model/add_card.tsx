"use client"

import React, { useState } from "react";
import styles from "./add_card.module.css";
import { CardData } from "../../Components/data";

interface Props {
  categories: string[];
  onSave: (newCard: CardData) => void;
  onClose: () => void;
  nextId: number;
}

const AddCardModal: React.FC<Props> = ({ categories, onSave, onClose, nextId }) => {
  const [form, setForm] = useState<CardData>({
    id: nextId,
    imageUrl: "",
    category: categories.find(c => c !== "All") || "Technology",
    title: "",
    description: "",
    content: "<p></p>",
    author: {
      name: "",
      avatarUrl: "https://i.pravatar.cc/150?img=1"
    },
    date: new Date().toISOString().split('T')[0],
    sliderImages: []
  });

  const updateField = (field: keyof CardData, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleSliderChange = (index: number, key: "src" | "alt", value: string) => {
    const updated = [...(form.sliderImages ?? [])];
    updated[index] = { ...updated[index], [key]: value };
    updateField("sliderImages", updated);
  };

  const handleAddSlider = () => {
    updateField("sliderImages", [
      ...(form.sliderImages ?? []),
      { src: "", alt: "" }
    ]);
  };

  const handleSave = () => {
    // Basic validation
    if (!form.title.trim() || !form.description.trim() || !form.imageUrl.trim()) {
      alert("Please fill in all required fields (Title, Description, and Front Image URL)");
      return;
    }
    onSave(form);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>Add New Card</h2>

        <label className={styles.label}>Category *</label>
        <select
          className={styles.formField}
          value={form.category}
          onChange={(e) => updateField("category", e.target.value)}
        >
          {categories.filter(c => c !== "All").map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>

        <label className={styles.label}>Editor Name</label>
        <select
          className={styles.formField}
          value={form.author.name}
          onChange={(e) =>
            updateField("author", { ...form.author, name: e.target.value })
          }
        >
          <option>astroverse</option>
          <option>astrostops</option>
        </select>

        <label className={styles.label}>Date</label>
        <input
          className={styles.formField}
          type="date"
          value={form.date}
          onChange={(e) => updateField("date", e.target.value)}
        />

        <label className={styles.label}>Heading *</label>
        <input
          className={styles.formField}
          type="text"
          value={form.title}
          onChange={(e) => updateField("title", e.target.value)}
          placeholder="Enter card title"
        />

        <label className={styles.label}>Description *</label>
        <textarea
          className={styles.formField}
          value={form.description}
          onChange={(e) => updateField("description", e.target.value)}
          placeholder="Enter card description"
        />

        <label className={styles.label}>Thumbnail</label>
        <input
          className={styles.formField}
          type="file"
          value={form.imageUrl}
          accept="image/*"
          onChange={(e) => updateField("imageUrl", e.target.value)}
          placeholder="https://example.com/image.jpg"
          required
        />

        <label className={styles.label}>Content (HTML)</label>
        <textarea
          className={styles.formField}
          value={form.content}
          onChange={(e) => updateField("content", e.target.value)}
          placeholder="<p>Your content here...</p>"
          rows={4}
        />

        <label className={styles.label}>Slider Images (Optional)</label>

        {(form.sliderImages ?? []).map((img, i) => (
          <div key={i} className={styles.sliderItem}>
            <div className={styles.sliderInputs}>
              <input
                className={styles.formField}
                type="text"
                placeholder="Image src"
                value={img.src}
                onChange={(e) =>
                  handleSliderChange(i, "src", e.target.value)
                }
              />
              <input
                className={styles.formField}
                type="text"
                placeholder="Alt text"
                value={img.alt}
                onChange={(e) =>
                  handleSliderChange(i, "alt", e.target.value)
                }
              />
            </div>

            <button
              className={styles.deleteSliderBtn}
              onClick={() => {
                const updated = [...(form.sliderImages ?? [])];
                updated.splice(i, 1);
                updateField("sliderImages", updated);
              }}
            >
              ✌
            </button>
          </div>
        ))}

        <button className={styles.addBtn} onClick={handleAddSlider}>
          + Add More Images
        </button>

        <div className={styles.actions}>
          <button className={styles.saveBtn} onClick={handleSave}>Add Card</button>
          <button className={styles.closeBtn} onClick={onClose}>✌</button>
        </div>
      </div>
    </div>
  );
};

export default AddCardModal;