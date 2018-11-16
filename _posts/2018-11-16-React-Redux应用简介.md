Redux with React

两者结合APP中，创建redux store用于存储整个app的状态，  
react component去选用只与自己相关的store中的data，  
然后从react component中dispatch action，  
最后触发store update

## Redux: 状态管理框架
## react: 试图库

两者结合时，需要引入react-redux package，它提供了将redux state and dispatch 作为props传入react component的方法。


提供了两个两者结合的feature:

## Provider:
Provider是一个包裹，用来包裹你的react-redux app。  
这个包裹允许从react component tree中访问redux store and dispatch functions。
Provider takes two props, the Redux store and the child components of your app. 
~~~
<Provider store={store}>
  <App/>
</Provider>
~~~

## Connect:
指定哪些state 对应哪些action
provider开放了从component中访问state and dispatch的权限，但是你必须指明你需要哪些state and action，这样才能保证每个component只需要访问需要访问的state。  
使用两个函数可以完成这个功能，  
In these functions, you declare what pieces of state you want to have access to and which action creators you need to be able to dispatch. 

这两个函数是：  
mapStateToProps()  
mapDispatchToProps()


- mapStateToProps()  
使用state作为输入参数，输出为一个object，这个object将输入的state映射为某些Property,这些property就可以被你的component访问了。

~~~
This function should take state as an argument, 
then return an object which maps that state to specific property names. 
These properties will become accessible to your component via props. 

const state = [];
function mapStateToProps(state){
    return {
        messages:state
    }
}
~~~

- mapDispatchToProps()  
将特定的action creators提供给react component，这样component才可以dispatch action to redux store。
使用dispatch作为参数，返回一个object。这个object应该有一个 submitNewMessage的属性，这个属性的值即为dispatch function，这个function的参数即为action所需的参数。

~~~
Write the function mapDispatchToProps() that takes dispatch as an argument, then returns an object. 
The object should have a property submitNewMessage set to the dispatch function, 
which takes a parameter for the new message to add when it dispatches addMessage().

const addMessage = (message) => {
  return {
    type: 'ADD',
    message: message
  }
};

function mapDispatchToProps(dispatch){
  return {
      submitNewMessage : function(newMsg){
          dispatch(addMessage(newMsg));
      }
  }
}
~~~

然后调用connect函数，此函数使用上面两个函数作为参数，然后随即使用调用结果作用于你的component，语法形式如下：  

connect(mapStateToProps, mapDispatchToProps)(MyComponent)

以上两个函数都作为connect的参数传入，不一定都需要，没有的传入null。


