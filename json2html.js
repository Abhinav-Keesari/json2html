// json2html.js

export default function(data) {
  // Start the HTML table with a data attribute
  let table = '<table data-user="keesari.abhinav5940@gmail.com">';
  
  // Create table header
  table += '<thead><tr>';
  // Extract column names from the first object keys (assuming all objects have the same keys)
  const headers = Object.keys(data[0]);
  headers.forEach(header => {
    table += `<th>${header}</th>`;
  });
  table += '</tr></thead>';
  
  // Create table body
  table += '<tbody>';
  data.forEach(row => {
    table += '<tr>';
    headers.forEach(header => {
      // Check if the property exists in the current object and insert it into the table
      table += `<td>${row[header] || ''}</td>`;
    });
    table += '</tr>';
  });
  table += '</tbody>';
  
  // Close the table
  table += '</table>';
  
  return table;
}
