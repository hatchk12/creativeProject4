/*global axios */
/*global Vue */
var app = new Vue({
  el: '#app',
  data: {
    words: [],
    lib: "" ,
    story: [],
    
  },
  methods: {
    async getpokis() {
      // `this` points to the vm instance
      console.log("get pokis");
      var url = "http://kitkatcode.com:4200/libz";
      try {
        let response = await axios.get(url);
        this.lib = response.data;
        console.log(this.lib);
        return true;
      }
      catch (error) {
        console.log(error);
      }
    },
  }
});
