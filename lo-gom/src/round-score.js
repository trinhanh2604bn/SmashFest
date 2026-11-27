export const formatPoints = points => points.toLocaleString('vi-VN');

export function comboTitle(count) {
  if (count >= 7) return 'Incredible!';
  if (count >= 5) return 'Awesome!';
  if (count === 4) return 'Well done!';
  return count === 3 ? 'Good!' : '';
}

export function createRoundScore() {
  const chains = new Map();
  let total = 0;
  let best = 0;
  return {
    get points() { return total; },
    get best() { return best; },
    hitTarget(shotId) {
      if (!shotId) return null;
      const last = chains.get(shotId);
      const count = (last?.count ?? 0) + 1;
      best = Math.max(best, count);
      const points = 100 + 50 * Math.min(5, Math.max(0, count - 2));
      const chainPoints = (last?.chainPoints ?? 0) + points;
      chains.set(shotId, { count, chainPoints });
      total += points;
      return { count, chainPoints, title: comboTitle(count) };
    },
  };
}

export function earnedStars(won, used, budget) {
  if (!won) return 0;
  return used <= Math.ceil(budget / 2) ? 3 : used <= Math.ceil(budget * .75) && used < budget ? 2 : 1;
}
