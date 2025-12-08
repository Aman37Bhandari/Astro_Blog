"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { Trash, Edit, Plus, Check, X } from "lucide-react";
import { Navbar } from "./Components/navbar/navbar";
import { Card } from "./Components/cards/cards";
import { cardsData, CardData } from "./Components/data";
import EditModal from "./Admin/Edit-Model/edit_card";
import AddCardModal from "./Admin/Add-Model/add_card";
import Link from "next/link";
import TopStoriesTicker from "./Components/topStories/TopStories";
import Filters from "./Components/Filter/Filter";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const [allCards, setAllCards] = useState<CardData[]>(cardsData);
  const [confirmDeleteId, setConfirmDeleteId] = useState<number | null>(null);

  const categories = ["All", ...new Set(cardsData.map((c) => c.category))];

  const filteredCards = allCards.filter((card) => {
    const matchesSearch =
      card.title.toLowerCase().includes(search.toLowerCase()) ||
      card.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || card.category === category;
    return matchesSearch && matchesCategory;
  });

  const [editCard, setEditCard] = useState<CardData | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const handleUpdateCard = (updatedCard: CardData) => {
    setAllCards((prev) =>
      prev.map((c) => (c.id === updatedCard.id ? updatedCard : c))
    );
    setEditCard(null);
  };

  const handleAddCard = (newCard: CardData) => {
    setAllCards((prev) => [...prev, newCard]);
    setShowAddModal(false); // Close modal after saving
  };

  const handleTrashClick = (id: number) => setConfirmDeleteId(id);
  const handleCancelDelete = () => setConfirmDeleteId(null);

  const handleConfirmDelete = (id: number) => {
    setAllCards((prevCards) => prevCards.filter((card) => card.id !== id));
    setConfirmDeleteId(null);
  };

  const nextId = allCards.length > 0 ? Math.max(...allCards.map((c) => c.id)) + 1 : 1;

  return (
    <div className={styles.page}>
      <Navbar />
      <TopStoriesTicker />

      <main className={styles.mainContent}>
        <div className={styles.headingData}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
          incidunt?
        </div>

        <Filters
          categories={categories}
          onSearchChange={setSearch}
          onCategoryChange={setCategory}
        />

        <div className={styles.cardsContainer}>
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <div key={card.id} className={styles.cardWrapper}>
                <div className={styles.editIcons}>
                  {confirmDeleteId === card.id ? (
                    <>
                      <Check
                        onClick={() => handleConfirmDelete(card.id)}
                        className={styles.confirmIcon}
                        size={22}
                        color="green"
                      />
                      <X
                        onClick={handleCancelDelete}
                        className={styles.cancelIcon}
                        size={22}
                        color="red"
                      />
                    </>
                  ) : (
                    <>
                      <Edit size={22} onClick={() => setEditCard(card)} />
                      <Trash
                        size={22}
                        onClick={() => handleTrashClick(card.id)}
                      />
                    </>
                  )}
                </div>

                <Link href={`/blog/${card.id}`} className={styles.cardLink}>
                  <Card card={card} onCategoryClick={setCategory} />
                </Link>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}

          {/* Trigger to open Add Modal */}
          <div 
            className={styles.addBlog} 
            onClick={() => setShowAddModal(true)}
            style={{ cursor: "pointer" }}
          >
            <Plus className={styles.sign} strokeWidth={3} />
          </div>
        </div>

        {/* Edit Modal */}
        {editCard && (
          <EditModal
            card={editCard}
            categories={categories}
            onSave={handleUpdateCard}
            onClose={() => setEditCard(null)}
          />
        )}

        {/* Add Modal */}
        {showAddModal && (
          <AddCardModal
            categories={categories}
            onSave={handleAddCard}
            onClose={() => setShowAddModal(false)}
            nextId={nextId}
          />
        )}
      </main>
    </div>
  );
}