module.exports = function check(str, bracketsConfig) {
  
    
    var arr = [];
    if (str.length % 2 !== 0) return false;
        for (var k = 0; k < str.length; k++){
            outer: for (var i = 0; i < bracketsConfig.length; i++) {
                if (str[k] == bracketsConfig[i][0]){   
                    arr.push(str[k]);
                    break outer;
                }
            }
            
        if (arr.length == 0){
                    
            return false;
        }
        for (var m = 0; m < bracketsConfig.length; m++) {
            if (str[k] == bracketsConfig[m][1]){
                 
                var top = arr.pop();
                
                if (top !== bracketsConfig[m][0] || str[k] !== bracketsConfig[m][1]){
                    return false;  
                }     
            }
        }
        
        }       
        if (arr.length == 0){
            return true;
        }

}
