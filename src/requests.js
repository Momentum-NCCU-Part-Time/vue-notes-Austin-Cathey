const URL = 'http://localhost:3000/notes/'
export const getNotes = () => {
  return fetch(URL).then((response) => response.json())
};

export const createNote = (note) => {
  const { title, body } = note;
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify({ title, body, updatedAt: new Date() }),
  }).then((response) => response.json());
};


