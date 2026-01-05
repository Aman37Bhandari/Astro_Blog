"use client";

import { Bell, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import data from "@/app/data";

import styles from "./UpcomingEvents.module.css";

const UpcomingEvents = () => {
  const [eventsVisible, setEventsVisible] = useState(true);
  const eventsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        eventsRef.current &&
        !eventsRef.current.contains(event.target as Node)
      ) {
        setEventsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={eventsRef}>
      <div
        className={styles.eventsButton}
        onClick={(e) => {
          e.stopPropagation();
          setEventsVisible(!eventsVisible);
        }}
      >
        <Bell />
      </div>
      {eventsVisible && (
        <section className={styles.upcomingEvents}>
          <X
            className={styles.upcomingEvents_closeButton}
            onClick={(e) => {
              e.stopPropagation();
              setEventsVisible(false);
            }}
          />
          <h2>Upcoming Events</h2>
          <div className={styles.upcomingEvents_cards}>
            {data.events.map((event, index) => (
              <div key={index} className={styles.upcomingEvents_cards_card}>
                <div className={styles.upcomingEvents_cards_card_thumbnail}>
                  <Image src={event.image} alt={event.title} fill />
                </div>
                <h3>{event.title}</h3>
                <p className={styles.upcomingEvents_cards_card_date}>
                  {event.date}
                </p>
                <p className={styles.upcomingEvents_cards_card_location}>
                  {event.location}
                </p>
                <Link
                  href={event.href}
                  target={event.target}
                  onClick={(e) => e.stopPropagation()}
                >
                  Details
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default UpcomingEvents;
