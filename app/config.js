System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  
  paths: {
    "npm:*": "node_modules/*"
  },

  // meta: {
  // },
  
  map: {
    "angular2": "npm:angular2",
    "rxjs": "npm:rxjs",
  }
});
