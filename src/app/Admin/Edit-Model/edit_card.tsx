"use client";

import React, { useState } from "react";
import styles from "./edit_card.module.css";
import { CardData } from "../../Components/data";

interface Props {
  card: CardData | null;
  categories: string[];
  onSave: (updated: CardData) => void;
  onClose: () => void;
}

const EditModal: React.FC<Props> = ({ card, categories, onSave, onClose }) => {
  if (!card) return null;

  const [form, setForm] = useState<CardData>({
    ...card,
    sliderImages: card.sliderImages ?? []
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

  const handleSave = () => onSave(form);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2 className={styles.modalTitle}>Edit Card</h2>

        <label className={styles.label}>Category</label>
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

        <label className={styles.label}>Heading</label>
        <input
        className={styles.formField}
          type="text"
          value={form.title}
          onChange={(e) => updateField("title", e.target.value)}
        />

        <label className={styles.label}>Description</label>
        <textarea
        className={styles.formField}
          value={form.description}
          onChange={(e) => updateField("description", e.target.value)}
        />

        <label className={styles.label}>Front Image URL</label>
        <input
        className={styles.formField}
          type="text"
          value={form.imageUrl}
          onChange={(e) => updateField("imageUrl", e.target.value)}
        />

        <label className={styles.label}>Slider Images</label>

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
      ❌
    </button>
  </div>
))}

<button className={styles.addBtn} onClick={handleAddSlider}>
  + Add More Images
</button>


        <div className={styles.actions}>
          <button className={styles.saveBtn} onClick={handleSave}>Save</button>
          <button className={styles.closeBtn} onClick={onClose}>❌</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
