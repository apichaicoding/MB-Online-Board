import { world } from "@minecraft/server";

export function getMinecraftTime() {
  const ticks = world.getTimeOfDay();

  // 0 = 06:00
  const totalMinutes = Math.floor((((ticks + 6000) % 24000) * 1440) / 24000);

  const hour = Math.floor(totalMinutes / 60);
  const minute = totalMinutes % 60;

  return `${hour.toString().padStart(2, "0")}:${minute
    .toString()
    .padStart(2, "0")}`;
}

export function getTimeColor() {
  const ticks = world.getTimeOfDay();

  // กลางวัน 06:00 - 18:00
  if (ticks >= 0 && ticks < 12000) {
    return "§e"; // เหลือง
  }

  // กลางคืน 18:00 - 06:00
  return "§9"; // น้ำเงิน
}

export function getWorldDay() {
  return Math.floor(world.getAbsoluteTime() / 24000) + 1;
}
