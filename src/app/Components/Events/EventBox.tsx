"use client";
import { useState } from "react";
import styles from "./eventbox.module.css";
import { FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";

const events = [
  {
    id: 1,
    title: "Upcoming Event 🚀",
    date: "Oct 15, 2025",
    location: "Haldwani Auditorium",
    image: "https://i.pinimg.com/1200x/3e/29/31/3e2931e00d0e97a0193ff91de6f8c604.jpg",
  },
  {
    id: 2,
    title: "Web Development Workshop",
    date: "Nov 05, 2025",
    location: "Online",
    image: "https://i.pinimg.com/736x/8c/4e/a8/8c4ea892a8fbdac51007b1da38ff0530.jpg",
  },
  {
    id: 3,
    title: "AI & Future Tech",
    date: "Dec 20, 2025",
    location: "Delhi Tech Park",
    image: "https://i.pinimg.com/736x/1f/dc/04/1fdc0438f61ea244d2e48ea3ccefffb6.jpg",
  },
  {
    id: 4,
    title: "Data Science Conference",
    date: "Jan 10, 2026",
    location: "New York City",
    image: "https://i.pinimg.com/736x/13/86/3e/13863e5a80feecfa438c88e460288d46.jpg",
  },
];

export default function EventBox() {
  const [open, setOpen] = useState(true);
  const [expanded, setExpanded] = useState(false);

  if (!open) return null;

  return (
    <div className={`${styles.eventBox} ${expanded ? styles.expanded : ""}`}>
      <button className={styles.closeBtn} onClick={() => setOpen(false)}>
        <FaTimes />
      </button>

      {/* Desktop: only first event */}
      <div className={styles.desktopOnly}>
        <img src={events[0].image} alt={events[0].title} className={styles.eventImage} />
        <div className={styles.eventContent}>
          <h3>{events[0].title}</h3>
          <p>
            Join us on <b>{events[0].date}</b>
          </p>
          <p>
            <b>Location:</b> {events[0].location}
          </p>
          <button className={styles.bookBtn}>Book Seat</button>
        </div>

        <button className={styles.seeMoreBtn} onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <>
              See Less <FaChevronUp className={styles.chevronIcon} />
            </>
          ) : (
            <>
              See More <FaChevronDown className={styles.chevronIcon} />
            </>
          )}
        </button>

        {/* More Events */}
        {expanded && (
          <div className={styles.moreEvents}>
            {events.slice(1).map((ev) => (
              <div key={ev.id} className={styles.eventItem}>
                <img src={ev.image} alt={ev.title} className={styles.eventThumb} />
                <div className={styles.title}>
                  <h4>{ev.title}</h4>
                  <p>
                    {ev.date} • {ev.location}
                  </p>
                  <button className={styles.bookBtn}>Book Seat</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile: all events */}
      <div className={styles.mobileOnly}>
        <div className={styles.moreEvents}>
          {events.map((ev) => (
            <div key={ev.id} className={styles.eventItem}>
              <img src={ev.image} alt={ev.title} className={styles.eventThumb} />
              <div>
                <h4>{ev.title}</h4>
                <p>
                  {ev.date} • {ev.location}
                </p>
                <button className={styles.bookBtn}>Book Seat</button>
              </div>
              <div className={styles.divider}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
