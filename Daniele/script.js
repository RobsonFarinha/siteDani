
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
      data[key] = value;
  });

  // Substitua 'YOUR_BACKEND_ENDPOINT' pelo endpoint do seu servidor PHP
  const backendEndpoint = 'YOUR_BACKEND_ENDPOINT';

  fetch(backendEndpoint, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => {
      if (data.success) {
          alert('Mensagem enviada com sucesso.');
      } else {
          alert('Erro ao enviar a mensagem.');
      }
  })
  .catch(error => {
      console.error('Erro:', error);
      alert('Erro ao enviar a mensagem.');
  });
});
