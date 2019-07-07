
var  app2 = new Vue({
  el:'#app2',
  data:{
    message:'you loaded this page on' + new Date().toLocaleString()
  }
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
    ],
    firstName:'Foo',
    lastName:'Bar'
  },
  computed:{
    fullName: {
      //getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      //setter
      set: function (newName) {
        const names = newName.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})


