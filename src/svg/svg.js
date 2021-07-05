

/* Function to add automatically in JS the svg added in the sprite-images folder */
function requireAll(r) {
  r.keys().forEach(r);
}

requireAll(require.context('./sprite-images/', true, /\.svg$/));
