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
    full: '    ',
    
  },
   created() {
    this.start();
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
        //console.log(json);
        this.lib = json;
        console.log(this.lib.value);
        this.words = this.lib.blanks;
        this.title = this.lib.title;
        this.story = this.lib.value;
        this.userWords.length=0;
        this.full = "    ";
      });
     
    },
    go: function(){
      this.full="    ";
      this.userWords.push({value: ''});
      //console.log(this.userWords);
      var i;
      for(i=0; i < this.words.length;i++){
        this.full+=this.story[i]  + this.userWords[i];
      }
      this.full += this.story[this.story.length-2];
      //console.log(this.full);
    },
  }
});
