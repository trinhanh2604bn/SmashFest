import assert from 'node:assert/strict';
import test from 'node:test';
import { createRoundScore, earnedStars } from '../src/round-score.js';

test('interleaved shot chains keep separate counts and the per-target bonus caps at 250', () => {
  const score = createRoundScore();
  assert.equal(score.hitTarget(undefined), null);
  const hits = [1, 2, 1, 1, 2, 1, 1, 1, 1, 1].map(id => score.hitTarget(id));
  assert.deepEqual(hits.map(hit => hit.title), ['', '', '', 'Good!', '', 'Well done!', 'Awesome!', 'Awesome!', 'Incredible!', 'Incredible!']);
  assert.equal(hits[3].chainPoints, 350);
  assert.equal(hits[9].chainPoints, 1800);
  assert.equal(score.points, 2000);
  assert.equal(score.best, 8);
  assert.equal(createRoundScore().points, 0);
});

test('three, two and one stars depend on the number of shots used in a win', () => {
  assert.deepEqual([3, 4, 6].map(used => earnedStars(true, used, 6)), [3, 2, 1]);
  assert.equal(earnedStars(false, 6, 6), 0);
  assert.equal(earnedStars(true, 2, 2), 1);
});
