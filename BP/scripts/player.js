export function shortName(name) {
  // ถ้าชื่อยาวอย่างน้อย 5 ตัว
  if (name.length >= 5) {
    const last5 = name.slice(-5);

    // ถ้า 5 ตัวท้ายไม่ใช่ตัวเลขทั้งหมด
    if (!/^\d{5}$/.test(last5)) {
      // และ 4 ตัวท้ายเป็นตัวเลข
      if (/\d{4}$/.test(name)) {
        name = name.slice(0, -4);
      }
    }
  }

  // จำกัด 10 ตัวอักษร
  if (name.length > 10) {
    name = name.substring(0, 10) + "...";
  }

  return name;
}

export function getColor(player) {
  switch (player.dimension.id) {
    case "minecraft:overworld":
      return "§b"; // ฟ้า

    case "minecraft:nether":
      return "§6"; // ส้ม

    case "minecraft:the_end":
      return "§5"; // ม่วง

    default:
      return "§f";
  }
}
