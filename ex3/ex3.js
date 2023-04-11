
  
  
  Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <h4>{{post.authors}}</h4>
        <p>{{ post.content }}</p>
        <a href="#">Clique ici pour en savoir plus</a>
      </div>
    `
  })
  
  new Vue({
    el: '#app',
    data: {
      posts: [
        { id: 1, title: 'Comment chatGPT a conquérit le monde',
        authors:'Bob',
        content:'chatGPT, le boureau des humain...' },
        { id: 2, title: 'Quel est la couleur préféré d\'Emmanuel Macron',
        authors:'Michel',
        content:'On a tous très envie de savoir quel est la couleur préféré d\'Emmanuel Macron. C\'est pourquoi je vous la dévoile aujourd\'hui' },
        { id: 3, title: 'Harry Potter : que deviennent les acteurs',
        content:'Ils sont pas tous mort déjà...' },
        { id: 4, title: 'LOL, pourquoi tant d\'engouement',
         content:'Lorem impsum ...' }
      ]
    }
  })
  
