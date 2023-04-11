/*Vue.component('button-counter', {
    data: function () {
      return {
        count: 0
      }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times. </button>'
  })
  
new Vue({ el: '#components-demo' })*/
  
  
  Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <p>{{ post.content }}</p>
        <a href="#">Clique ici pour en savoir plus</a>
      </div>
    `
  })
  
  new Vue({
    el: '#app',
    data: {
      posts: [
        { id: 1, title: 'Comment chatGPT a conquérit le monde', content:'chatGPT, le boureau des humain...' },
        { id: 2, title: 'Quel est la couleur préféré d\'Emmanuel Macron', content:'On a tous très envie de savoir quel est la couleur préféré d\'Emmanuel Macron. C\'est pourquoi je vous la dévoile aujourd\'hui' },
        { id: 3, title: 'Harry Potter : que deviennent les acteurs', content:'Ils sont pas tous mort déjà...' },
        { id: 4, title: 'LOL, pourquoi tant d\'engouement', content:'Lorem impsum ...' }
      ]
    }
  })
  
/*
  
  
  Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <div v-html="post.content"></div>
      </div>
    `
  })

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
    })

    var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
    })*/