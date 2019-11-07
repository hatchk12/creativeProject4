/*global axios */
/*global Vue */
var app = new Vue({
  el: '#app',
  data: {
    words: [],
    lib: "" ,
    story: [],
    title: "",
    userWords: [],
    
  },
  methods: {
    async start() {
      console.log("get story");
      var url = "http://kitkatcode.com:4200/libz";
        fetch(url)
        .then((response)=>{
          return (response.json());
        })
        .then((json)=>{
        console.log(json);
        this.lib = json;
        console.log(this.lib.blanks);
        this.words = this.lib.blanks;
        this.title = this.lib.title;
        this.story = this.lib.value;
      });
     
    },
    go(){
      console.log(this.userWords);
    },
    pop(){
      this.userWords = app.words;
    }
  }
});
