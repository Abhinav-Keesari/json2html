// json2html.js

export default function(data) {
  // Start the HTML table with a data attribute
  let table = '<table data-user="keesari.abhinav5940@gmail.com">';
  
  // Create table header with fixed columns: Name, Age, Gender
  table += '<thead><tr>';
  table += '<th>Name</th><th>Age</th><th>Gender</th>';
  table += '</tr></thead>';
  
  // Create table body
  table += '<tbody>';
  data.forEach(row => {
    table += '<tr>';
    // Ensure that each row has values for Name, Age, and Gender
    table += `<td>${row.Name || ''}</td>`;
    table += `<td>${row.Age || ''}</td>`;
    table += `<td>${row.Gender || ''}</td>`;
    table += '</tr>';
  });
  table += '</tbody>';
  
  // Close the table
  table += '</table>';
  
  return table;
}
