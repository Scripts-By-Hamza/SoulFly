import React, { useState } from "react";
import './FallIntoTravel.css'
import paristour from "../assets/paristour.jpg";
import turkeytour from "../assets/turkeytour.jpg";
import dubaitour from "../assets/dubaitour.jpg";
import thailandtour from "../assets/thailandtour.jpg";
import hunzatour from "../assets/hunzatour.jpg";
import hajjtour from "../assets/hajjtour.jpg";
import hajjtour0 from "../assets/hajjtour0.jpg";
import male0 from "../assets/male0.jpg";

const packages = [
    {
        id: "europe-highlights",
        title: "Europe Highlights Tour",
        duration: "5 Days",
        price: "$1899",
        image:
            paristour,
        itinerary: [
            "Day 1: Arrive in Paris, Seine River Cruise",
            "Day 2: Paris City Tour",
            "Day 3: Travel to Switzerland – Lucerne",
            "Day 4: Travel to Italy (Rome/Venice)",
            "Day 5: Departure"
        ]
    },
    {
        id: "turkey-classic",
        title: "Turkey Classic Tour",
        duration: "7 Days",
        price: "$899",
        image:
            turkeytour,
        itinerary: [
            "Day 1: Arrive in Istanbul",
            "Day 2: Old City Tour",
            "Day 3: Bosphorus & Asian Side",
            "Day 4: Fly to Cappadocia – Local Tour",
            "Day 5: Cappadocia Hot Air Balloon & Valleys",
            "Day 6: Return to Istanbul / Bursa Day Trip",
            "Day 7: Departure"
        ]
    },
    {
        id: "dubai-escape",
        title: "Dubai Short Escape",
        duration: "5 Days",
        price: "$750",
        image:
            dubaitour,
        highlights: [
            "Burj Khalifa & Dubai Mall",
            "Desert Safari with BBQ Dinner",
            "Abu Dhabi Day Trip – Sheikh Zayed Mosque"
        ],
        itinerary: [
            "Day 1: Arrival & Dhow Cruise Dinner",
            "Day 2: Dubai City Tour",
            "Day 3: Desert Safari",
            "Day 4: Abu Dhabi Day Trip",
            "Day 5: Departure"
        ]
    },
    {
        id: "thailand-delight",
        title: "Thailand Tour",
        duration: "6 Days",
        price: "$699",
        image:
            thailandtour,
        highlights: [
            "Bangkok – Grand Palace, Floating Market",
            "Phuket – Phi Phi Islands & James Bond Island",
            "Krabi – Beaches & Kayaking"
        ],
        itinerary: [
            "Day 1: Arrival in Bangkok",
            "Day 2: Bangkok City Tour",
            "Day 3: Flight to Phuket, Local Exploration",
            "Day 4: Phi Phi Islands Tour",
            "Day 5: Krabi Excursion",
            "Day 6: Departure"
        ]
    },
    {
        id: "hunza-skardu",
        title: "Hunza & Skardu Adventure",
        duration: "10 Days",
        price: "PKR 120,000",
        image:
            hunzatour,
        highlights: [
            "Hunza – Baltit Fort, Attabad Lake, Khunjerab Pass",
            "Skardu – Shangrila, Upper Kachura, Deosai Plains",
            "Fairy Meadows Trek (Optional)"
        ],
        itinerary: [
            "Day 1: Islamabad to Naran/Kaghan",
            "Day 2: Drive to Gilgit",
            "Day 3: Hunza Valley Tour",
            "Day 4: Khunjerab Pass",
            "Day 5: Skardu – Shangrila & Kachura",
            "Day 6: Deosai Plains",
            "Day 7: Fairy Meadows Trek (Optional)",
            "Day 8: Explore Skardu",
            "Day 9: Return Journey",
            "Day 10: Arrival in Islamabad"
        ]
    },
    {
        id: "umrah-basic",
        title: "Umrah Pilgrimage Package",
        duration: "10 Days",
        price: "PKR 250,000",
        image:
            hajjtour,
        highlights: [
            "Makkah – Masjid al-Haram",
            "Madinah – Masjid an-Nabawi",
            "Guided Religious Assistance"
        ],
        itinerary: [
            "Day 1: Arrival in Jeddah & Transfer to Makkah",
            "Day 2–5: Perform Umrah & Stay in Makkah",
            "Day 6: Travel to Madinah",
            "Day 7–9: Stay in Madinah (Ziyarat Tour)",
            "Day 10: Return"
        ]
    },
    {
        id: "hajj-deluxe",
        title: "Hajj Deluxe Package",
        duration: "21 Days",
        price: "PKR 1,200,000",
        image:
            hajjtour0,
        highlights: [
            "Hajj Rituals with Full Guidance",
            "VIP Transport & Tents in Mina",
            "Stay in Makkah & Madinah"
        ],
        itinerary: [
            "Day 1–4: Arrival in Makkah & Preparation",
            "Day 5–10: Mina, Arafat, Muzdalifah, Hajj Rituals",
            "Day 11–16: Stay in Makkah (Ibadah)",
            "Day 17–20: Madinah Visit & Ziyarat",
            "Day 21: Return"
        ]
    },
    {
        id: "maldives-relax",
        title: "Maldives Luxury Escape",
        duration: "5 Days",
        price: "$1400",
        image:
            male0,
        highlights: [
            "Overwater Villas",
            "Snorkeling & Scuba Diving",
            "Private Beach Dinner"
        ],
        itinerary: [
            "Day 1: Arrival in Male & Speedboat Transfer",
            "Day 2: Island Hopping & Water Sports",
            "Day 3: Relax at Resort / Spa Treatment",
            "Day 4: Diving & Sunset Cruise",
            "Day 5: Departure"
        ]
    },
];

export default function TourPackages() {
    const [expandedId, setExpandedId] = useState(null)

    const handleMoreInfo = (id) => setExpandedId(id)
    const handleLessInfo = () => setExpandedId(null)
    const handleBook = (pkg) => {
        alert(`Booking: ${pkg.title} — ${pkg.duration} — ${pkg.price}`)
    }

    return (
        <section className="fall-travel tours">
            <div className="container">
                <div className="fall-head">
                    <div>
                        <h2>Popular tours</h2>
                        <p>Handpicked tour packages around the world.</p>
                    </div>
                    <button className="see-all">See all</button>
                </div>

                <div className="fall-grid">
                    {packages.map((pkg) => (
                        <article key={pkg.id} className={`fall-card ${expandedId === pkg.id ? 'expanded' : ''}`}>
                            <div className="image-wrap">
                                <img src={pkg.image} alt={pkg.title} loading="lazy" />
                            </div>
                            <div className="overlay">
                                <div className={`info ${expandedId === pkg.id ? 'hidden' : ''}`}>
                                    <div>
                                        <h3>{pkg.title}</h3>
                                        <p>{pkg.duration}</p>
                                    </div>
                                    <div className="fall-price">{pkg.price}</div>
                                </div>

                                {expandedId === pkg.id ? (
                                    <div className="itinerary">
                                        <h4>Itinerary</h4>
                                        <ul>
                                            {pkg.itinerary.map((day, i) => (
                                                <li key={i}>{day}</li>
                                            ))}
                                        </ul>
                                        <div className="actions">
                                            <button className="secondary" onClick={handleLessInfo}>Less Info</button>
                                            <button className="book" onClick={() => handleBook(pkg)}>Book Tour</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="actions">
                                        <button className="secondary" onClick={() => handleMoreInfo(pkg.id)}>More Info</button>
                                        <button className="book" onClick={() => handleBook(pkg)}>Book Tour</button>
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
