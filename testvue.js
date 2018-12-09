// window.onload = function(){
//   console.log("onload");
// };

//test
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
app.message = 'I have change the messsage data!';

var app2 = new Vue({
  el: '#app2',
  data: {
    seen: true
  }
});
app2.seen = false;

var app3 = new Vue({
  el: '#app3',
  data: {
    todos:[
      {text: 'Lean Vue'},
      {text: 'second'},
      {text: 'List type'}
    ]
  }
});
app3.todos.push({text:'New text'});

var app4 = new Vue({
  el: '#app4',
  data:{
    message: 'Hello Vue!'
  },
  methods:{
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

var app5 = new Vue({
  el: '#app5',
  data:{
    message: 'model input'
  }
});

Vue.component('todo-item', {
  template: '<li>This is a todo</li>'
})


Vue.component('todo-item-2', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app6 = new Vue({
    el: '#app6',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
});
//end of test
