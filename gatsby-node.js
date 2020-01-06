const axios = require('axios');

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  const [info, items, sections] = await Promise.all([
    axios.get(`${process.env.SHEETS_API_URL}/info?dir=COL`),
    axios.get(`${process.env.SHEETS_API_URL}/menu_items`),
    axios.get(`${process.env.SHEETS_API_URL}/menu_sections`),
  ]);
  const restaurant = { info, items, sections };
  createNode({
    info,
    items,
    sections,
    // required fields
    id: `google-sheets-data`,
    parent: null,
    children: [],
    internal: {
      type: `Restaurant`,
      contentDigest: createContentDigest(restaurant),
    },
  })
}