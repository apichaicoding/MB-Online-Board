import { world, system } from "@minecraft/server";
import { shortName, getColor } from "./player.js";
import { getMinecraftTime, getTimeColor, getWorldDay } from "./time.js";

system.runInterval(() => {
  const players = world.getPlayers();

  if (players.length === 0) {
    return;
  }

  let text = "";

  for (const player of players.slice(0, 3)) {
    text += `${getColor(player)}${shortName(player.name)}§r\n`;
  }

  const day = getWorldDay();
  const time = getMinecraftTime();
  const timeColor = getTimeColor();

  text += `\n§cTotal: ${players.length} §8| §fDay: ${day} §8| §fTime: ${timeColor}${time}§r`;

  for (const player of players) {
    player.onScreenDisplay.setActionBar(text);
  }
}, 20);
