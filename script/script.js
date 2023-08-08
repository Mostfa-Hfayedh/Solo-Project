//helpers
function each (coll,f){
    if(Array.isArray(coll)){
        for (var i = 0; i < coll.length; i++){
            f(coll[i],i)
        }
    }
    else {
        for(var key in coll){
            f(coll[key],key)
        }
    }

}
function filter (coll,predicate){
    if(Array.isArray(coll)){
        var acc = []
        each (coll,function(element,i){
        if(predicate(element,i)){
            acc.push(element)
        }
    })}
    else {
        var acc = {}
        each (coll,function(element,key){
            if(predicate(element,key)){
                acc[key]=element
            }
        })
    }

    return acc
}
//helpers
var sudo1=[
    ['0','0','0','2','6','0','7','0','1'],
    ['6','8','0','0','7','0','0','9','0'],
    ['1','9','0','0','0','4','5','0','0'],
    ['8','2','0','1','0','0','0','4','0'],
    ['0','0','4','6','0','2','9','0','0'],
    ['0','5','0','0','0','3','0','2','8'],
    ['0','0','9','3','0','0','0','7','4'],
    ['0','4','0','0','5','0','0','3','6'],
    ['7','0','3','0','1','8','0','0','0']
]
var solution=[
    ['4','3','5','2','6','9','7','8','1'],
    ['6','8','2','5','7','1','4','9','3'],
    ['1','9','7','8','3','4','5','6','2'],
    ['8','2','6','1','9','5','3','4','7'],
    ['3','7','4','6','8','2','9','1','5'],
    ['9','5','1','7','4','3','6','2','8'],
    ['5','1','9','3','2','6','8','7','4'],
    ['2','4','8','9','5','7','1','3','6'],
    ['7','6','3','4','1','8','2','5','9']
]
function makeAccount(userName,userPass){
    return {
        userName : userName ,
        userPass : userPass
    }
}
function Logs(){
    var instance={}
    instance.accounts=[]
    instance.add=add
    return instance
}
var add=function(account){
    this.accounts.push(account)
}
var admin=Logs()
$('#log').on('click',function(){
    var acc=filter(admin.accounts,function(element){
        return element.userName===$('#uname').val()&&element.userPass===$('#pass').val()
    })
    if(acc.length){
        location.replace("./game.html");
    }
    else{
        alert("You don't have an account please sign up first")
        $('.log').hide()
        $('.sign').show()
    }    
})
$('#sign').on('click',function(){
    admin.add(makeAccount($('#uname2').val(),$('#pass2').val()))
    alert('Your account has been created')
    $('.log').show()
    $('.sign').hide()
})

for(var i=0;i<9;i++){
    for(var j=0;j<9;j++){
        $('.grid').append(`<div class='pos' id=${"x"+i+j}><input type='number' class='rc' id=${"i"+i+j}></div>`)
    }
}



$('#easy').on('click',function(){
    for(var i=0;i<sudo1.length;i++){
        for(var j=0;j<sudo1.length;j++){
            if(sudo1[i][j]!=='0'){
                $('#x'+i+j).text(sudo1[i][j])
            }
        }
    }
})

$("#check").on('click',function(){
    var copy =[]
    Object.assign(copy,sudo1)
    for(var i=0;i<sudo1.length;i++){
        for(var j=0;j<sudo1.length;j++){
           if($('#i'+i+j).val()){
                copy[i][j]=$('#i'+i+j).val()
           }
        }
    }
    for(var i=0;i<sudo1.length;i++){
        for(var j=0;j<sudo1.length;j++){
            
                if($('#i'+i+j).val()){
                    if(copy[i][j]!==solution[i][j]){  
                        $('#i'+i+j).css('background-color','#F31559')
                    }
                    else{
                        $('#i'+i+j).css('background-color','#91C8E4')
                    }
                }   
            
           
        }
    }
})