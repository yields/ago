
describe('ago', function(){

  var assert = require('assert')
    , ago = require('ago');

  describe('future', function(){
    it('should return an empty string', function(){
      assert('' == ago(new Date(6e4 + Date.now())));
    })
  })

  describe('new Date', function(){
    it('should equal "just now"', function(){
      assert('just now' == ago(new Date));
    })
  })

  describe('seconds', function(){
    it('Date(now - 1e3) should be "a second ago"', function(){
      assert('a second ago' == ago(new Date - 1e3));
    })

    it('Date(now - 1e3 * 10) should be "10 seconds ago"', function(){
      assert('10 seconds ago' == ago(new Date - 1e3 * 10));
    })

    it('Date(now - 1e3 * 23) should be "23 seconds ago"', function(){
      assert('23 seconds ago' == ago(new Date - 1e3 * 23));
    })

    it('Date(now - 1e3 * 60) should be "a minute ago"', function(){
      assert('a minute ago' == ago(new Date - 1e3 * 60));
    })
  })

  describe('minutes', function(){
    it('Date(now - 6e4) should be "a minute ago"', function(){
      assert('a minute ago' == ago(new Date - 6e4));
    })

    it('Date(now - 6e4 * 10) should be "10 minutes ago"', function(){
      assert('10 minutes ago' == ago(new Date - 6e4 * 10));
    })

    it('Date(now - 6e4 * 23) should be "23 minutes ago"', function(){
      assert('23 minutes ago' == ago(new Date - 6e4 * 23));
    })

    it('Date(now - 6e4 * 60) should be "an hour ago"', function(){
      assert('an hour ago' == ago(new Date - 6e4 * 60));
    })
  })

  describe('hours', function(){
    it('Date(now - 3.6e+6) should be "an hour ago"', function(){
      assert('an hour ago' == ago(new Date - 3.6e+6));
    })

    it('Date(now - 3.6e+6 * 10) should be "10 hours ago"', function(){
      assert('10 hours ago' == ago(new Date - 3.6e+6 * 10));
    })

    it('Date(now - 3.6e+6 * 23) should be "23 hours ago"', function(){
      assert('23 hours ago' == ago(new Date - 3.6e+6 * 23));
    })

    it('Date(now - 3.6e+6 * 24) should be "a day ago"', function(){
      assert('a day ago' == ago(new Date - 3.6e+6 * 24));
    })
  })

  describe('days', function(){
    it('Date(now - 8.64e+7) should be "a day ago"', function(){
      assert('a day ago' == ago(new Date - 8.64e+7));
    })

    it('Date(now - 8.64e+7 * 10) should be "10 days ago"', function(){
      assert('10 days ago' == ago(new Date - 8.64e+7 * 10));
    })

    it('Date(now - 8.64e+7 * 23) should be "23 days ago"', function(){
      assert('23 days ago' == ago(new Date - 8.64e+7 * 23));
    })

    it('Date(now - 8.64e+7 * 30) should be "a month ago"', function(){
      assert('a month ago' == ago(new Date - 8.64e+7 * 31));
    })
  })

  describe('months', function(){
    it('Date(now - 2.63e+9) should be "a month ago"', function(){
      assert('a month ago' == ago(new Date - 2.63e+9));
    })

    it('Date(now - 2.63e+9 * 10) should be "10 months ago"', function(){
      assert('10 months ago' == ago(new Date - 2.63e+9 * 10));
    })

    it('Date(now - 2.63e+9 * 12) should be "a year ago"', function(){
      assert('a year ago' == ago(new Date - 2.63e+9 * 12));
    })
  })

  describe('years', function(){
    it('Date(now - 3.156e+10) should be "a year ago"', function(){
      assert('a year ago' == ago(new Date - 3.156e+10));
    })

    it('Date(now - 3.156e+10 * 10) should be "10 years ago"', function(){
      assert('10 years ago' == ago(new Date - 3.156e+10 * 10));
    })
  })
})
