"use client";

import React, { useState, useEffect } from "react";
import styles from "./edit_card.module.css";
import { CardData, fileToDataUrl } from "../../Components/data";

interface Props {
  card: CardData | null;
  categories: string[];
  onSave: (updated: CardData) => void;
  onClose: () => void;
  isNewCard?: boolean;
}

const EditModal: React.FC<Props> = ({ card, categories, onSave, onClose, isNewCard = false }) => {
  if (!card) return null;

  const [form, setForm] = useState<CardData>({
    ...card,
    sliderImages: card.sliderImages ?? []
  });

  const [mainImagePreview, setMainImagePreview] = useState<string>(card.imageUrl);
  const [sliderPreviews, setSliderPreviews] = useState<string[]>(
    card.sliderImages?.map(img => img.src) || []
  );

  const updateField = (field: keyof CardData, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const handleMainImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await fileToDataUrl(file);
      setMainImagePreview(dataUrl);
      updateField("imageUrl", dataUrl);
      updateField("imageFile", file);
    }
  };

  const handleSliderChange = (index: number, key: "src" | "alt", value: string) => {
    const updated = [...(form.sliderImages ?? [])];
    updated[index] = { ...updated[index], [key]: value };
    updateField("sliderImages", updated);
  };

  const handleSliderImageUpload = async (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const dataUrl = await fileToDataUrl(file);
      const updated = [...(form.sliderImages ?? [])];
      updated[index] = { ...updated[index], src: dataUrl, file };
      updateField("sliderImages", updated);
      
      const newPreviews = [...sliderPreviews];
      newPreviews[index] = dataUrl;
      setSliderPreviews(newPreviews);
    }
  };

  const handleAddSlider = () => {
    updateField("sliderImages", [
      ...(form.sliderImages ?? []),
      { src: "", alt: "" }
    ]);
    setSliderPreviews([...sliderPreviews, ""]);
  };

  const handleDeleteSlider = (index: number) => {
    const updated = [...(form.sliderImages ?? [])];
    updated.splice(index, 1);
    updateField("sliderImages", updated);
    
    const newPreviews = [...sliderPreviews];
    newPreviews.splice(index, 1);
    setSliderPreviews(newPreviews);
  };

  const handleSave = () => onSave(form);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>❌</button>
        <h2 className={styles.modalTitle}>{isNewCard ? "Create New Card" : "Edit Card"}</h2>

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

        <label className={styles.label}>Front Image</label>
        {mainImagePreview && (
          <img 
            src={mainImagePreview} 
            alt="Preview" 
            style={{ 
              width: '100%', 
              maxHeight: '200px', 
              objectFit: 'cover', 
              borderRadius: '8px', 
              marginBottom: '10px' 
            }} 
          />
        )}
        <input
          className={styles.formField}
          type="file"
          accept="image/*"
          onChange={handleMainImageUpload}
        />

        <label className={styles.label}>Slider Images</label>

        {(form.sliderImages ?? []).map((img, i) => (
          <div key={i} className={styles.sliderItem}>
            <div className={styles.sliderInputs}>
              {sliderPreviews[i] && (
                <img 
                  src={sliderPreviews[i]} 
                  alt="Slider preview" 
                  style={{ 
                    width: '100%', 
                    maxHeight: '150px', 
                    objectFit: 'cover', 
                    borderRadius: '8px', 
                    marginBottom: '8px' 
                  }} 
                />
              )}
              <input
                className={styles.formField}
                type="file"
                accept="image/*"
                onChange={(e) => handleSliderImageUpload(i, e)}
              />
              <input
                className={styles.formField}
                type="text"
                placeholder="Alt text"
                value={img.alt}
                onChange={(e) => handleSliderChange(i, "alt", e.target.value)}
              />
            </div>

            <button
              className={styles.deleteSliderBtn}
              onClick={() => handleDeleteSlider(i)}
            >
              ❌
            </button>
          </div>
        ))}

        <button className={styles.addBtn} onClick={handleAddSlider}>
          + Add More Images
        </button>

        <div className={styles.actions}>
          <button className={styles.saveBtn} onClick={handleSave}>
            {isNewCard ? "Create Card" : "Save Changes"}
          </button>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;