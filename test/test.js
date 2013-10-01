
describe('ago', function(){

  var assert = require('assert')
    , ago = require('ago');

  describe('future', function(){
    it('should return an empty string', function(){
      assert('' == ago(new Date(6e4 + Date.now())));
    })
  })

  describe('new Date', function(){
    it('should return "just now"', function(){
      assert('just now' == ago(new Date));
    })
  })

  describe('new Date - 1e3', function(){
    it('should be "a second ago"', function(){
      assert('a second ago' == ago(new Date - 1e3));
    })
  })
})
