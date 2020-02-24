'use strict';

import { default as users } from './users.js';

const getSortedUniqueSkills = users => {
  let skillsList = users.flatMap(user => user.skills).sort();
  const result = new Set(skillsList);
  return [...result];
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa',
//'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit',
//'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
