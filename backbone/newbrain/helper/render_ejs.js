var ejs = require('ejs'),
    $ = require('jquery'),
    _ = require('underscore'),
    fs = require('fs'),
    path = require('path'),
    async = require('async'),
    Backbone = require('backbone');

/**
 * either using jqury or readFile 
 */

var ejsRender = {};
module.exports = ejsRender;

ejsRender.render = function(view, data, callback){
  //Running on node.js
  if(typeof window == 'undefined'){
    renderInNode(view, data, callback);
  }
  else {

    function getEjsTextFromPathData(templateData, filePath){
      var found = _.find(templateData, function(obj){
          return obj.filePath == filePath;
      });

      return found.templateText;
    }

    function renderIncludeRecursive(view, data, templateData){
      var ejsText = getEjsTextFromPathData(templateData, view);

      var fn = ejs.compile(
        ejsText,
        { 
          client: true,
          filename: path.join('/js/templates/', view + '.ejs')
        }
      );

      var includeFilePaths = [];
      var rendered = fn(data, null, function(includeFilePath, includeData){
        return renderIncludeRecursive(path.join(path.dirname(view), includeFilePath), includeData, templateData);
      });

      return rendered;
    }

    getAllTemplateFileList(view, data, function(err, pathData){
      
      var rendered = renderIncludeRecursive(view, data, pathData);
      callback(null, rendered);

    });
    //renderInJQuery(view, data, callback);
  }
};

function getAllTemplateFileList(view, data, callback){
  var returnPathsData = [];
  var currentPathData = {
    filePath: view,
    data: data,
    templateText: null
  };

  $.ajax({
      url: path.join('/js/templates/', view + '.ejs'),
      dataType: 'text',
      method: 'GET'
  }).done(function(ejsText) {

    currentPathData.templateText = ejsText;
    returnPathsData.push(currentPathData);

    var fn = ejs.compile(
      ejsText,
      { 
        client: true,
        filename: path.join('/js/templates/', view + '.ejs')
      }
    );

    var includeFilePaths = [];
    fn(data, null, function(includeFilePath, includeData){
      includeFilePaths.push({
        filePath: includeFilePath,
        data: includeData
      });
    });


    if(includeFilePaths.length > 0){
      var createAsyncFunc = function(filePath, data){
        return function (callback){
          getAllTemplateFileList(path.join(path.dirname(view), filePath), data, function(err, pathData){
            callback(err, pathData);
          });
        };
      };

      var funcs = {};

      includeFilePaths.forEach(function(pathData, index){
        funcs['data' + index] = createAsyncFunc(pathData.filePath, pathData.data);
      });

      async.parallel(
        funcs,
        function(err, result){
          if(err) throw err;

          var pathDataFromChild = [];
          for(var key in result){
            result[key].forEach(function(obj){
              returnPathsData.push(obj);
            });
          }

          callback(null, returnPathsData);
        }
      );
    }
    else {
      callback(null, returnPathsData);
    }

  }).fail(function(jqXHR, textStatus, errorThrown){
    callback(new Error(errorThrown), returnPathsData);
  });

}

function renderInJQuery(view, options, callback){

  $.ajax({
      url: path.join('/js/templates/', view + '.ejs'),
      dataType: 'text',
      method: 'GET'
  }).done(function(ejsText) {


    callback(null, ejs.render(ejsText, options));
  }).fail(function(jqXHR, textStatus, errorThrown){
    callback(new Error(errorThrown), textStatus);
  });
}

function renderInNode(view, data, callback){
  ejs.renderFile(
    path.join(__dirname, '../templates/', view + '.ejs'),
    data,
    function(err, result){
      callback(null, result);
    }
  );
}
