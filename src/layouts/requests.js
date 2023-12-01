fetch('http://localhost:3000/notes/', {
    method: 'POST', 
    headers: {"Content-Type": "application/json"}, 
    body: JSON.stringify({ title, body, updatedAt: new Date() })
  })
  .then(res => res.json())
  .then(
    data => console.log(data)
    
  )