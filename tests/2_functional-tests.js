/*
*
*
*       FILL IN EACH FUNCTIONAL TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]-----
*       (if additional are added, keep them at the very end!)
*/

var chaiHttp = require('chai-http');
var chai = require('chai');
var assert = chai.assert;
var server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {
    
    suite('GET /api/stock-prices => stockData object', function() {
      
      test('1 stock', function(done) {
       chai.request(server)
        .get('/api/stock-prices')
        .query({stock: 'goog'})
        .end(function(err, res){
          //complete this one too
         assert.equal(res.status, 200);
         assert.equal(res.body.stockData.stock, 'GOOG');
         assert.isNumber(res.body.stockData.likes);
         assert.isString(res.body.stockData.price);
         done();
        });
      });
      
      test('1 stock with like', function(done) {
       chai.request(server)
        .get('/api/stock-prices')
        .query({stock: 'goog', like: 'true'})
        .end(function(err, res){
          //complete this one too
         assert.equal(res.status, 200);
         assert.equal(res.body.stockData.stock, 'GOOG');
         assert.isNumber(res.body.stockData.likes);
         assert.isString(res.body.stockData.price);
         done();
        });
      });
      
      test('1 stock with like again (ensure likes arent double counted)', function(done) {
       chai.request(server)
        .get('/api/stock-prices')
        .query({stock: 'goog', like: 'true'})
        .end(function(err, res){
          //complete this one too
         assert.equal(res.status, 200);
         assert.equal(res.body.stockData.stock, 'GOOG');
         assert.isNumber(res.body.stockData.likes);
         assert.isString(res.body.stockData.price);
         done();
        });
      });
      
      test('2 stocks', function(done) {
       chai.request(server)
        .get('/api/stock-prices')
        .query({stock: ['goog', 'msft']})
        .end(function(err, res){
          //complete this one too
         assert.equal(res.status, 200);
         assert.equal(res.body.stockData[0].stock, 'GOOG');
         assert.isNumber(res.body.stockData[0].rel_likes);
         assert.isString(res.body.stockData[0].price);
         assert.equal(res.body.stockData[1].stock, 'MSFT');
         assert.isNumber(res.body.stockData[1].rel_likes);
         assert.isString(res.body.stockData[1].price);
         done();
        });
      });
      
      test('2 stocks with like', function(done) {
       chai.request(server)
        .get('/api/stock-prices')
        .query({stock: ['goog', 'msft'], like: 'true'})
        .end(function(err, res){
          //complete this one too
         assert.equal(res.status, 200);
         assert.equal(res.body.stockData[0].stock, 'GOOG');
         assert.isNumber(res.body.stockData[0].rel_likes);
         assert.isString(res.body.stockData[0].price);
         assert.equal(res.body.stockData[1].stock, 'MSFT');
         assert.isNumber(res.body.stockData[1].rel_likes);
         assert.isString(res.body.stockData[1].price);
         done();
        });
      });
      
    });

});
