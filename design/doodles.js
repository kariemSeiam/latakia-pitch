// ═══════════════════════════════════════════════════════════════════
// SY · CORNICHE DOODLES — 18 original delivery/Latakia icons
// Same stroke weight, same breath, tile as ambient field
// ═══════════════════════════════════════════════════════════════════




const icons = [
  // ── Core Delivery ──
  {k:"scooter", ar:"سكوتر توصيل", d:"M4 15.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4M17 15.5a2 2 0 1 0 0 4 2 2 0 0 0 0-4M6 17.5h9M7 17.5l1.5-5h6.5v3.5M10 12.5l1-2h4.5l1 2"},
  {k:"bag", ar:"كيس طلب", d:"M7 8h10l-1 12H8zM9 8V6.5a3 3 0 0 1 6 0V8M9 12h6"},
  {k:"pin", ar:"عنوان", d:"M12 21c4-5 6-8 6-11a6 6 0 1 0-12 0c0 3 2 6 6 11M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4"},
  {k:"waves", ar:"الكورنيش", d:"M2 8q3-3 6 0t6 0 6 0M2 14q3-3 6 0t6 0 6 0M2 20q3-3 6 0t6 0 6 0"},
  {k:"timer", ar:"وعد الوقت", d:"M12 22a8 8 0 1 0 0-16 8 8 0 0 0 0 16M12 6V3M9.5 3h5M12 14l3-3M18.5 6l1.5-1.5"},
  {k:"receipt", ar:"فاتورة شفافة", d:"M6 3h12v18l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4-2 1.4zM9 8h6M9 12h6M9 16h3.5"},
  {k:"wallet", ar:"محفظة", d:"M3 8h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM3 8l2.5-3.5h10L18 8M16.5 13h3"},
  {k:"store", ar:"متجر", d:"M4 9l1.6-4h12.8L20 9M4.5 9v10.5h15V9M4 9a2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0 2 2 0 0 0 4 0M9.5 19.5v-5.5h5v5.5"},
  {k:"phone", ar:"شاشة الطلب", d:"M7.5 2.5h9a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-17a1 1 0 0 1 1-1M10 5.5h4M10 9h4M10 12h4M10 15h2.5"},
  {k:"route", ar:"خط السير", d:"M6 4a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8M18 15.2a2.4 2.4 0 1 0 0 4.8 2.4 2.4 0 0 0 0-4.8M6 9c0 5 12 3.5 12 6M6 6.4h.01"},
  {k:"box", ar:"طرد", d:"M12 2.5l8.5 4.5v9L12 20.5 3.5 16V7zM3.5 7l8.5 4.5L20.5 7M12 11.5v9M7.7 4.7l8.6 4.6"},
  {k:"coffee", ar:"قهوة", d:"M5 8.5h12v4.5a5 5 0 0 1-10 0zM17 9.5h2a2 2 0 0 1 0 4h-2M8 3v2M11 3v2M14 3v2M4.5 20h13"},
  {k:"plate", ar:"طبق", d:"M3 16.5h18M4.5 16.5a7.5 7.5 0 0 1 15 0M12 9V6.8M6.5 20h11"},
  {k:"star", ar:"تقييم", d:"M12 2.6l2.9 6.05 6.6.62-4.98 4.4 1.46 6.48L12 17.3l-5.94 2.85 1.46-6.48-4.98-4.4 6.6-.62z"},
  {k:"shield", ar:"موثوق", d:"M12 3l7 2.2v6c0 4.2-3 7.3-7 9.3-4-2-7-5.1-7-9.3v-6zM8.8 12l2.2 2.2 4.2-4.4"},
  {k:"palm", ar:"نخلة", d:"M12 21V10.5M12 10.5c-1.2-3-4.2-4-7-2.7 2-2.2 5-2.2 7 .7M12 10.5c1.2-3 4.2-4 7-2.7-2-2.2-5-2.2-7 .7M12 10.5c-2-2-2.7-5-1.5-8-2 2.2-1.8 5.3 1.5 8M12 10.5c2-2 2.7-5 1.5-8 2 2.2 1.8 5.3-1.5 8M9.5 21h5"},
  {k:"anchor", ar:"الميناء", d:"M12 4.5a1.6 1.6 0 1 0 0 3.2 1.6 1.6 0 0 0 0-3.2M12 7.7V20.5M6 12.5H4c0 4.2 3.8 7.5 8 7.5s8-3.3 8-7.5h-2M8 11.5l4 4 4-4"},
  {k:"bell", ar:"إشعار", d:"M12 3.2a5 5 0 0 0-5 5c0 5.8-2 6.8-2 8h14c0-1.2-2-2.2-2-8a5 5 0 0 0-5-5M10 19.5a2 2 0 0 0 4 0"},
];

export { icons };
export const tileSize = 480;

export const placements = [
  { iconIndex: 0, x: 20, y: 25, rotation: -8, scale: 1.1 },
  { iconIndex: 1, x: 160, y: 10, rotation: 12, scale: 0.9 },
  { iconIndex: 2, x: 340, y: 35, rotation: -5, scale: 1.0 },
  { iconIndex: 3, x: 440, y: 120, rotation: 15, scale: 0.85 },
  { iconIndex: 4, x: 80, y: 100, rotation: 6, scale: 1.05 },
  { iconIndex: 5, x: 260, y: 90, rotation: -18, scale: 0.95 },
  { iconIndex: 6, x: 400, y: 200, rotation: 8, scale: 1.0 },
  { iconIndex: 7, x: 30, y: 200, rotation: -12, scale: 0.9 },
  { iconIndex: 8, x: 190, y: 180, rotation: 22, scale: 1.1 },
  { iconIndex: 9, x: 100, y: 280, rotation: -6, scale: 0.95 },
  { iconIndex: 10, x: 320, y: 150, rotation: 10, scale: 1.0 },
  { iconIndex: 11, x: 450, y: 300, rotation: -15, scale: 0.9 },
  { iconIndex: 12, x: 240, y: 260, rotation: 5, scale: 1.05 },
  { iconIndex: 13, x: 50, y: 360, rotation: 18, scale: 0.85 },
  { iconIndex: 14, x: 370, y: 340, rotation: -10, scale: 1.0 },
  { iconIndex: 15, x: 150, y: 380, rotation: 7, scale: 0.95 },
  { iconIndex: 16, x: 290, y: 370, rotation: -22, scale: 1.1 },
  { iconIndex: 17, x: 420, y: 420, rotation: 14, scale: 0.9 },
  { iconIndex: 18, x: 20, y: 440, rotation: -8, scale: 1.0 },
  { iconIndex: 19, x: 200, y: 440, rotation: 5, scale: 0.95 },
  { iconIndex: 20, x: 340, y: 460, rotation: -12, scale: 1.05 },
  { iconIndex: 21, x: 120, y: 170, rotation: 20, scale: 0.85 },
  { iconIndex: 22, x: 300, y: 260, rotation: -3, scale: 1.0 },
  { iconIndex: 23, x: 440, y: 50, rotation: 16, scale: 0.9 },
];

export const doodles = { icons, placements, tileSize };
export default doodles;