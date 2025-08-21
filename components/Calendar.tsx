'use client';
import React from "react";


export default function Calendar() {
  return (
    <section className="py-20 bg-gray-50">
        <div className="flex items-center justify-center">
          <iframe src="https://calendar.google.com/calendar/embed?src=csufshpe%40gmail.com&ctz=America%2FLos_Angeles" 
          loading="lazy"
          className="md:mx-20 border-0 rounded-lg shadow-lg"
          width="1600" 
          height="1200"
          ></iframe>
        </div>
      </section>
  );
}