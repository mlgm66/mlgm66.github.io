function refreshHitokoto() {
        fetch('https://v1.hitokoto.cn')
          .then(response => response.json())
          .then(data => {
            document.getElementById('hitokoto').innerHTML = data.hitokoto; 
          })
          .catch(error => console.error(error));
      }
      document.addEventListener('DOMContentLoaded', () => {
        refreshHitokoto();
      });